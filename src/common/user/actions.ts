"use server";

import { db } from "@/db";
import { user } from "@/db/schema";
import { redirect } from "next/navigation";
import { hashPassword } from "./lib";

export async function register(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const phone = formData.get("phone") as string;

  await db.insert(user).values({
    email,
    userPhone: phone,
    phone: "+14155238886",
    name,
    password: await hashPassword(password),
  });

  redirect("/login");
}
