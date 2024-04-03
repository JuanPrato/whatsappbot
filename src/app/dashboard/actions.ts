"use server";

import { db } from "@/db";
import { menuItem, user } from "@/db/schema";
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

export async function updateMenuItem(_: any, formData: FormData) {
  const id = Number(formData.get("id")) as number | undefined;
  const title = formData.get("title") as string | null;
  const reply = formData.get("reply") as string | null;
  const phone = formData.get("phone") as string;

  if (!title) {
    return {
      success: false,
      errors: {
        title: "Debe ingresar un titulo",
      },
    };
  }

  if (!reply) {
    return {
      success: false,
      errors: {
        reply: "Debe ingresar una respuesta",
      },
    };
  }

  if (id) {
    await db.update(menuItem).set({ title, reply }).where(eq(menuItem.id, id));
  } else {
    await db.insert(menuItem).values({ title, reply, phone });
  }

  revalidatePath("/dashboard");

  return {
    success: true,
  };
}
