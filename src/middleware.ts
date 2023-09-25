import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export  function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const isPublicPath = path=== '/login' || path==='/signUp'  ;
  const token = request.cookies.has('token')  

  if(isPublicPath && token)
  {
    // if user is logged in and on path /login and /signup 
    //  then he will be redirected to /
    return NextResponse.redirect(new URL('/', request.nextUrl));
  }
  const adminLinks = '/all_products/animesite/data/manageProduct';
  if(adminLinks === path && !token)
  {
      return NextResponse.redirect(new URL('/login', request.nextUrl));
  }

  
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/login','/signUp','/all_products/animesite/data/manageProduct'],
}