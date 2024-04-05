"use server";

import { Bot } from "@/models";
import { revalidatePath } from "next/cache";
import { UTApi } from "uploadthing/server";

const utapi = new UTApi();

export async function uploadImage(formData: FormData) {
  console.log("PASE");
  try {
    const file = formData.get("file") as File;
    const phone = formData.get("phone") as string;
    const response = await utapi.uploadFiles([file]);

    if (response[0].data === null) {
      return {
        success: false,
        error: "Error desconocido",
      };
    }

    const bot = await Bot.getBot(phone);

    await bot?.addImage(response[0].data.url, file.name);
  } catch (e) {
    console.log(e);
    return {
      success: false,
    };
  }
  //const files = formData.getAll("files") as File[];

  revalidatePath("/images");

  return {
    success: true,
  };
}
