import { NextRequest, NextResponse } from "next/server";
import { updateSession } from "./auth/lib";

const UNPROTECTED_ROUTES = ["/", "/login", "register"];

export async function middleware(request: NextRequest) {
  const res = await updateSession(request);
  const isUnProtectedRoute = UNPROTECTED_ROUTES.some((route) =>
    request.nextUrl.pathname.startsWith(route),
  );

  if (isUnProtectedRoute) return res;

  if (!res) return Response.redirect(new URL("/login", request.url));
}
