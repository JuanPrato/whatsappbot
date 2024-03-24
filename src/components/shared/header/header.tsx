"use client";

import UnAuthHeader from "./unAuthHeader";
import AuthHeader from "./authHeader";
import { usePathname } from "next/navigation";
import { PUBLIC_ROUTES } from "@/common/constants";

export default function Header() {
  const pathname = usePathname();

  return PUBLIC_ROUTES.some((r) => r.endsWith(pathname || "-")) ? (
    <UnAuthHeader />
  ) : (
    <AuthHeader route={pathname} />
  );
}
