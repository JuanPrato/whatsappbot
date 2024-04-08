"use server";

import { redirect } from "next/navigation";

import { login as loginLib, logout } from "./lib";
import { db } from "@/db";
import { user } from "@/db/schema";
import { eq } from "drizzle-orm";
import { comparePasswords } from "../user/lib";

export async function login(formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const [dbUser] = await db
    .select()
    .from(user)
    .where(eq(user.email, email))
    .limit(1);

  if (!dbUser) return;

  if (!(await comparePasswords(password, dbUser.password))) {
    return;
  }

  await loginLib({
    email: dbUser.email,
    name: dbUser.name || "",
    phone: dbUser.phone,
  });

  redirect("/dashboard");
}

export async function logoutAction() {
  await logout();
  redirect("/");
}
