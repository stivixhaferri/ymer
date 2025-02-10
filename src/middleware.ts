import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { verifyToken } from './lib/auth'

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value
   
  if (request.nextUrl.pathname.startsWith('/dashboard')) {
    
    if (!token) {
      return NextResponse.redirect(new URL('/login', request.url))
    }
    try {
      verifyToken(token)
    } catch (error) {
      console.log(error)
      return NextResponse.redirect(new URL('/login', request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/dashboard/:path*']
}
