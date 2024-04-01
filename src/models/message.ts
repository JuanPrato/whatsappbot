import { twiml } from "twilio";

const { MessagingResponse } = twiml;

export class Message {
  private currentMessage;
  private body: string | null;
  private welcomeMessage: string | null;
  private media: string | null;

  constructor() {
    this.currentMessage = new MessagingResponse();
    this.body = null;
    this.welcomeMessage = null;
    this.media = null;
  }

  getResponse() {
    let message;
    const parts = [];
    if (this.welcomeMessage) {
      parts.push(this.welcomeMessage);
    }
    if (this.body) {
      parts.push(this.body);
    }
    if (parts.length !== 0) {
      message = this.currentMessage.message(parts.join("\n\n"));
    }

    if (this.media) {
      message = message || this.currentMessage.message("");
      message.media(this.media);
    }

    return this.currentMessage.toString();
  }

  setBody(body: string) {
    this.body = body;
  }

  setMedia(url: string) {
    this.media = url;
  }

  addWelcomeMessage(welcomeMessage: string | null) {
    this.welcomeMessage = welcomeMessage;
  }
}
