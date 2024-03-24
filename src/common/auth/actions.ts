"use server";

import { redirect } from "next/navigation";
import { logout } from "./lib";

export async function logoutAction() {
  await logout();
  redirect("/");
}
