import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { cookieService } from "./app/_ultis/cookieService";
import { ROUTES } from "./app/_ultis/constant";

// Danh sách các route yêu cầu đăng nhập
const authorizedRoutes = [
  ROUTES.USER.url,
  ROUTES.USER_PROFILE.url,
  ROUTES.RECIPES_CREATE.url,
  ROUTES.RECIPES_PERSIONAL.url,
];
const unAuthorizedRoutes = [ROUTES.LOGIN.url, ROUTES.REGISTER.url];

export function middleware(request: NextRequest) {
  const token = request.cookies.get(
    cookieService.COOKIE_KEYS.ACCESS_TOKEN,
  )?.value;
  const pathName = request.nextUrl.pathname;

  if (authorizedRoutes.includes(pathName)) {
    if (!token) {
      return NextResponse.redirect(new URL(ROUTES.LOGIN.url, request.url));
    }
  }
  if (unAuthorizedRoutes.some(route => request.nextUrl.pathname === route)) {
    if (token) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }
}

export const config = {
  // matcher: ['/dashboard/:path*', '/profile/:path*'], // Định nghĩa các route cần áp dụng middleware
  matcher: ["/((?!_next/static|images).*)"],
};
