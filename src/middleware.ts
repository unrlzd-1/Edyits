import { auth } from "@/lib/auth"
import { NextResponse } from "next/server"

export default auth((req) => {
  const { nextUrl } = req
  const isLoggedIn = !!req.auth

  // Protected routes
  const protectedRoutes = ["/upload", "/moderation", "/profile/settings"]
  const isProtectedRoute = protectedRoutes.some((route) =>
    nextUrl.pathname.startsWith(route)
  )

  if (isProtectedRoute && !isLoggedIn) {
    const redirectUrl = new URL("/login", nextUrl.origin)
    redirectUrl.searchParams.set("callbackUrl", nextUrl.pathname)
    return NextResponse.redirect(redirectUrl)
  }

  // Moderator routes
  if (nextUrl.pathname.startsWith("/moderation") && req.auth?.user.role !== "MODERATOR" && req.auth?.user.role !== "ADMIN") {
    return NextResponse.redirect(new URL("/", nextUrl.origin))
  }

  return NextResponse.next()
})

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}