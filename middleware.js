
export async function middleware(req) {
  const { pathname } = req.nextUrl

  console.log("pathname", pathname);
  
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|icon.svg|apple-icon.png|manifest|_pagefind|_vercel).*)',
  ],
}