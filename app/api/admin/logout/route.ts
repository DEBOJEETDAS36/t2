import { NextResponse } from 'next/server'
import { COOKIE } from '@/lib/auth'
export const dynamic = 'force-dynamic'
export async function POST() { const r = NextResponse.json({ ok: true }); r.cookies.set(COOKIE, '', { httpOnly: true, path: '/', maxAge: 0 }); return r }
