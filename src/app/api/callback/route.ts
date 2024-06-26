import { Conversation, Message } from "@/models";
import { Bot } from "@/models/bot";
import { extractMessageInformationFromRequest } from "@/utils/twilio";

export async function POST(request: Request) {
  const message = new Message();

  const { userPhone, senderPhone, commandTitle } =
    await extractMessageInformationFromRequest(request);

  const conversation = new Conversation(senderPhone, userPhone);

  const bot = await Bot.getBot(userPhone);

  if (!bot || !bot.isOn) {
    return new Response(message.getResponse(), {
      headers: {
        "Content-Type": "text/xml",
      },
    });
  }

  await conversation.fetchMessages();

  const command = bot.getCommand(commandTitle);

  if (!command) {
    if (!conversation.hasPreviosConversation()) {
      message.setBody(bot.getMenu());
      message.addWelcomeMessage(bot.welcomeMessage);
    }

    return new Response(message.getResponse(), {
      headers: {
        "Content-Type": "text/xml",
      },
    });
  }

  message.setBody(command.reply || "No hay respuesta para este comando");

  command.files.forEach((file) => message.setMedia(file.url));

  return new Response(message.getResponse(), {
    headers: {
      "Content-Type": "text/xml",
    },
  });
}
