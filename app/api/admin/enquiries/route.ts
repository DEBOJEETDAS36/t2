import { NextResponse } from 'next/server'
import { listEnquiries, setStatus, removeEnquiry, storeKind, type Status } from '@/lib/store'
export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'
export async function GET() {
  try { return NextResponse.json({ items: await listEnquiries(), store: storeKind() }) }
  catch (err) { console.error('Could not read enquiries:', err); return NextResponse.json({ error: 'Could not reach the database. Check MONGODB_URI and your Atlas network access.', store: storeKind() }, { status: 503 }) }
}
export async function PATCH(req: Request) {
  const b = await req.json().catch(() => ({}))
  if (typeof b.id !== 'string' || !['new', 'contacted', 'closed'].includes(b.status)) return NextResponse.json({ error: 'Invalid request.' }, { status: 400 })
  return (await setStatus(b.id, b.status as Status)) ? NextResponse.json({ ok: true }) : NextResponse.json({ error: 'Not found.' }, { status: 404 })
}
export async function DELETE(req: Request) {
  const id = new URL(req.url).searchParams.get('id') || ''
  return (await removeEnquiry(id)) ? NextResponse.json({ ok: true }) : NextResponse.json({ error: 'Not found.' }, { status: 404 })
}
