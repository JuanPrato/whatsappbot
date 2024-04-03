import { PowerButton } from "@/components/shared/powerButton";
import UserStatistics from "@/components/dashboard/userStatistics";
import WelcomeMessage from "@/components/dashboard/welcomeMessage";
import UserMenu from "@/components/dashboard/menu";
import { UserCategoryHeader } from "@/components/shared/userCategoryHeader";
import { Bot } from "@/models";

export default async function DashBoardPage() {
  const bot = await Bot.getBot("+14155238886");

  if (!bot) return <h1>No tiene bot</h1>;

  return (
    <div className="ml-[7rem] flex h-full min-h-screen flex-col gap-6 bg-light px-20 py-12">
      <UserCategoryHeader
        title="Información y gestión de tu bot"
        icon={PowerButton}
        phone={bot.phone}
      />
      <section>
        <div className="grid grid-cols-2 gap-16">
          <WelcomeMessage
            welcomeMessage={bot.welcomeMessage}
            phone={bot.phone}
          />
          <UserStatistics />
        </div>
      </section>
      <UserMenu items={bot.menuItems} phone={bot.phone} />
    </div>
  );
}
