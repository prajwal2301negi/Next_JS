import { NextRequest, NextResponse } from "next/server";

// let requestCount = 0;

// export function middleware(req:NextRequest, ){
//     requestCount++;
//     const res = NextResponse.next()
//     console.log(`Request count: ${requestCount}`)
//     return res;
// }

//  Problem -> It run on all Routes
//  Soln ->

// export const config = {
//     matcher: '/api/:path*', // if frontend route is call, do not run.
// }





export function middleware(request:NextRequest){
    console.log(request.nextUrl.pathname)
    if(request.nextUrl.pathname.startsWith('/admin')){
        return NextResponse.redirect(new URL('/signin', request.url))
    }

    if (request.nextUrl.pathname.startsWith('/dashboard')){
        return NextResponse.next()
    }
}