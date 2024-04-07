import { FileOption } from "@/common/types";
import { db } from "@/db";
import { file } from "@/db/schema";
import { eq } from "drizzle-orm";

export default class Files {
  static async getAllFiles(phone: string): Promise<FileOption[]> {
    const files = await db.query.file.findMany({
      where: eq(file.phone, phone),
    });
    return files.map((file) => ({
      id: file.id,
      name: file.name,
    }));
  }
}
