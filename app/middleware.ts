import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // 비밀번호가 필요한 프로젝트 경로 확인
  if (request.nextUrl.pathname.startsWith('/projects/nh-3')) {
    const session = request.cookies.get('session')
    
    // 세션이 없으면 로그인 페이지로 리다이렉트
    if (!session) {
      return NextResponse.redirect(new URL('/login', request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: '/projects/:path*',
} 