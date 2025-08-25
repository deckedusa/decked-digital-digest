
//import { auth } from "./auth";
import { redirect } from "next/navigation";


export async function middleware(req) {
  const { pathname } = req.nextUrl
  // console.log("pathname", pathname, config.matcher);
  // // test if path matches the config matcher
  // if (config.matcher.some((matcher) => matcher.test(pathname))) {
    
  //   //const session = await auth();
  //   //console.log("session", session);
    
  //   // if (!session) {
  //   //   redirect('/signin');
  //   //   return;
  //   // }

  // }else{
  //   console.log("Must not Sign in", pathname);

  // }

  return;
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|icon.svg|apple-icon.png|manifest|_pagefind|_vercel).*)',
  ],
}