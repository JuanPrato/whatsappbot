"use server";

import { Bot } from "@/models";
import { revalidatePath } from "next/cache";
import { UTApi } from "uploadthing/server";

const utapi = new UTApi();

export async function deleteImage(formData: FormData) {
  try {
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
