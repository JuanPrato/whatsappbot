"use server";

import { revalidatePath } from "next/cache";
import { UTApi } from "uploadthing/server";

const utapi = new UTApi();

export async function deleteFile(formData: FormData) {
  try {
    const fileUrl = formData.get("file") as string | null;

    if (!fileUrl) {
      throw new Error("Invalid image url");
    }

    await utapi.deleteFiles(fileUrl);
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
