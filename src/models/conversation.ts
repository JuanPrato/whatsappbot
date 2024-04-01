import type { Message } from "types";
import { db } from "../db/index";
import { and, eq, gte } from "drizzle-orm";
import { interaction } from "../db/schema";
import dayjs from "dayjs";

export class Conversation {
  private sender: string;
  private userPhone: string;
  private messages: Message[] | null = null;

  constructor(from: string, userPhone: string) {
    this.sender = from;
    this.userPhone = userPhone;
  }

  async fetchMessages(): Promise<void> {
    const interactions = await db.query.interaction.findMany({
      where: and(
        eq(interaction.phone, this.sender),
        gte(interaction.timestamp, dayjs().startOf("day").toDate())
      ),
    });

    this.messages = interactions.map((int) => ({
      id: int.id,
      message: int.body,
      from: int.phone,
      timestamp: int.timestamp,
    }));
  }

  getMessages(): Message[] | null {
    return this.messages;
  }

  hasPreviosConversation(): boolean {
    return !!this.messages && this.messages?.length > 0;
  }
}
