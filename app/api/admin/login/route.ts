import { NextResponse } from 'next/server'
import { createHash, timingSafeEqual } from 'crypto'
import { COOKIE, makeToken } from '@/lib/auth'
import { attempts, addAttempt, ipOf } from '@/lib/rate'
export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'
const h = (s: string) => createHash('sha256').update(s).digest()
export async function POST(req: Request) {
  const pw = process.env.ADMIN_PASSWORD
  if (!pw) return NextResponse.json({ error: 'ADMIN_PASSWORD is not set. Add it to .env.local and restart.' }, { status: 500 })
  const ip = ipOf(req)
  if (attempts('login:' + ip, 600_000) >= 5) return NextResponse.json({ error: 'Too many attempts. Try again in 10 minutes.' }, { status: 429 })
  const b = await req.json().catch(() => ({}))
  const given = typeof b.password === 'string' ? b.password : ''
  if (!timingSafeEqual(h(given), h(pw))) { addAttempt('login:' + ip, 600_000); return NextResponse.json({ error: 'Incorrect password.' }, { status: 401 }) }
  const res = NextResponse.json({ ok: true })
  res.cookies.set(COOKIE, await makeToken(7), { httpOnly: true, sameSite: 'lax', secure: process.env.NODE_ENV === 'production', path: '/', maxAge: 7 * 86400 })
  return res
}
