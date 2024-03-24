import { NextRequest, NextResponse } from "next/server";
import { updateSession } from "./auth/lib";
import { PUBLIC_ROUTES } from "./common/constants";

export async function middleware(request: NextRequest) {
  const res = await updateSession(request);
  const isUnProtectedRoute = PUBLIC_ROUTES.some((route) =>
    request.nextUrl.pathname.startsWith(route),
  );

  if (isUnProtectedRoute) return res;

  if (!res) return Response.redirect(new URL("/login", request.url));
}
