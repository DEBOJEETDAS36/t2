import { NextRequest, NextResponse } from 'next/server'
import { COOKIE, verifyToken } from '@/lib/auth'
export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl
  const ok = await verifyToken(req.cookies.get(COOKIE)?.value)
  if (pathname === '/admin/login' || pathname === '/api/admin/login') {
    if (ok && pathname === '/admin/login') return NextResponse.redirect(new URL('/admin', req.url))
    return NextResponse.next()
  }
  if (ok) return NextResponse.next()
  if (pathname.startsWith('/api/')) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  return NextResponse.redirect(new URL('/admin/login', req.url))
}
export const config = { matcher: ['/admin/:path*', '/api/admin/:path*'] }
