import { db } from "@/db";
import { desc, eq } from "drizzle-orm";
import { image, user as userTable } from "@/db/schema";
import { Command, Image } from "@/common/types";
import dayjs from "dayjs";

type DBUser = {
  phone: string;
  welcomeMessage: string | null;
  menuItems: {
    phone: string;
    id: number;
    title: string;
    reply: string;
    images: {
      menuItem: number;
      image: number & {
        phone: string;
        id: number;
        url: string;
      };
    }[];
  }[];
};

export class Bot {
  phone: string;
  menuItems: Command[];
  welcomeMessage: string | null;

  constructor(dbUser: DBUser) {
    this.phone = dbUser.phone;
    this.menuItems = dbUser.menuItems.map((item) => ({
      id: item.id,
      title: item.title,
      reply: item.reply,
      images: item.images.map((i) => ({
        id: i.image.id,
        description: "Imagen",
        url: i.image.url,
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

  static async getBot(phone: string): Promise<Bot | null> {
    const dbUser = await db.query.user.findFirst({
      where: eq(userTable.phone, phone),
      with: {
        menuItems: {
          with: {
            images: {
              with: {
                image: true,
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
    const images = await db.query.image.findMany({
      where: eq(image.phone, phone),
      orderBy: desc(image.timestamp),
    });

    const result: { date: Date; pictures: Image[] }[] = [];

    images.forEach((image) => {
      const day = dayjs(image.timestamp).startOf("day");

      const res = result.at(-1);

      if (!res || res.date.getTime() !== day.toDate().getTime()) {
        result.push({
          date: day.toDate(),
          pictures: [
            {
              id: image.id,
              description: "Imagen",
              url: image.url,
            },
          ],
        });
        return;
      }

      res.pictures.push({
        id: image.id,
        description: "Imagen",
        url: image.url,
      });
    });

    return result;
  }
}
