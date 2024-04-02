"use server";

import { db } from "@/db";
import { user } from "@/db/schema";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";

export async function updateWelcomeMessage(_: any, formData: FormData) {
  const welcomeMessage = formData.get("message") as string | null;
  const phone = formData.get("phone") as string;
  if (!welcomeMessage) {
    return {
      errors: {
        message: "Mensaje invalido",
      },
    };
  }

  await db.update(user).set({ welcomeMessage }).where(eq(user.phone, phone));

  return {
    result: "success",
  };
}
