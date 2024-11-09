import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token");
  if (!token && request.nextUrl.pathname === "/form") {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  let path = request.nextUrl.pathname;
  const isPublicPath = path === "/login" || path === "/signup";

  if (token && isPublicPath)
    return NextResponse.redirect(new URL("/form", request.url));
}

export const config = {
  matcher: ["/login", "/signup", "/form"],
};
