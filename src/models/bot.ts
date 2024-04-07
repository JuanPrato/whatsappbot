import { db } from "@/db";
import { and, desc, eq } from "drizzle-orm";
import { file, user as userTable } from "@/db/schema";
import { Command, File } from "@/common/types";
import dayjs from "dayjs";

type DBUser = {
  phone: string;
  welcomeMessage: string | null;
  isOn: boolean;
  menuItems: {
    phone: string;
    id: number;
    title: string;
    reply: string;
    files: {
      menuItem: number;
      file: number & {
        phone: string;
        id: number;
        url: string;
        name: string | null;
      };
    }[];
  }[];
};

export class Bot {
  phone: string;
  menuItems: Command[];
  welcomeMessage: string | null;
  isOn: boolean;

  constructor(dbUser: DBUser) {
    this.phone = dbUser.phone;
    this.isOn = dbUser.isOn;
    this.menuItems = dbUser.menuItems.map((item) => ({
      id: item.id,
      title: item.title,
      reply: item.reply,
      files: item.files.map((i) => ({
        id: i.file.id,
        description: i.file.name || "Imagen",
        url: i.file.url,
        type: "",
      })),
    }));
    this.welcomeMessage = dbUser.welcomeMessage;
  }

  getCommand(
    commandTitle: string,
  ): (typeof this.menuItems)[number] | undefined {
    return this.menuItems.find(
      (item) =>
        item.title.toLocaleLowerCase() === commandTitle.toLocaleLowerCase(),
    );
  }

  getMenu(): string {
    return this.menuItems.reduce(
      (acc, item) => acc + `- ${item.title}\n`,
      "Menú de opciones:\n",
    );
  }

  async addImage(url: string, name: string, key: string, type: string) {
    await db.insert(file).values({
      phone: this.phone,
      name,
      url,
      key,
      type,
    });
  }

  static async getBot(phone: string): Promise<Bot | null> {
    const dbUser = await db.query.user.findFirst({
      where: eq(userTable.phone, phone),
      with: {
        menuItems: {
          with: {
            files: {
              with: {
                file: true,
              },
            },
          },
        },
      },
    });

    if (!dbUser) return null;

    return new Bot(dbUser);
  }

  static async getBotImagesGroupByDay(phone: string) {
    const files = await db.query.file.findMany({
      where: eq(file.phone, phone),
      orderBy: desc(file.timestamp),
    });

    const result: { date: Date; files: File[] }[] = [];

    files.forEach((file) => {
      const day = dayjs(file.timestamp).startOf("day");

      const res = result.at(-1);

      if (!res || res.date.getTime() !== day.toDate().getTime()) {
        result.push({
          date: day.toDate(),
          files: [
            {
              id: file.id,
              description: file.name || "default",
              url: file.url,
              type: file.type || "unknown",
            },
          ],
        });
        return;
      }

      res.files.push({
        id: file.id,
        description: file.name || "default",
        url: file.url,
        type: file.type || "unknown",
      });
    });

    return result;
  }
}
