import { NextResponse } from 'next/server'
import { addEnquiry } from '@/lib/store'
import { attempts, addAttempt, ipOf } from '@/lib/rate'
export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'
const TYPES = ['contact', 'tour', 'mice', 'newsletter']
const cap = (v: unknown, n: number) => (typeof v === 'string' ? v.trim().slice(0, n) : '')
export async function POST(req: Request) {
  const ip = ipOf(req)
  if (attempts('enq:' + ip, 600_000) >= 5) return NextResponse.json({ error: 'Too many submissions. Please try again in a few minutes.' }, { status: 429 })
  let b: Record<string, unknown>
  try { b = await req.json() } catch { return NextResponse.json({ error: 'Invalid request.' }, { status: 400 }) }
  const type = cap(b.type, 20)
  if (!TYPES.includes(type)) return NextResponse.json({ error: 'Invalid request.' }, { status: 400 })
  const email = cap(b.email, 200), name = cap(b.name, 120)
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 })
  if (type !== 'newsletter' && !name) return NextResponse.json({ error: 'Please enter your name.' }, { status: 400 })
  const known = ['type', 'name', 'email', 'phone', 'message', 'tour']
  const fields: Record<string, string> = {}
  Object.entries(b).filter(([k]) => !known.includes(k)).slice(0, 20).forEach(([k, v]) => { const s = cap(v, 2000); if (s) fields[k.slice(0, 40)] = s })
  addAttempt('enq:' + ip, 600_000)
  try {
    await addEnquiry({ type, name, email, phone: cap(b.phone, 40), message: cap(b.message, 3000), tour: cap(b.tour, 120), fields })
  } catch (err) {
    console.error('Could not save enquiry:', err)
    return NextResponse.json({ error: 'We could not save your enquiry right now. Please try again in a moment.' }, { status: 503 })
  }
  return NextResponse.json({ ok: true })
}
