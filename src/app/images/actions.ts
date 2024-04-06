"use server";

import { revalidatePath } from "next/cache";
import { UTApi } from "uploadthing/server";

const utapi = new UTApi();

export async function deleteImage(formData: FormData) {
  try {
    const imageUrl = formData.get("image") as string | null;

    if (!imageUrl) {
      throw new Error("Invalid image url");
    }

    await utapi.deleteFiles(imageUrl);
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
