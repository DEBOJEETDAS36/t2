import { listEnquiries } from '@/lib/store'
export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'
const cell = (v: string) => { const s = /^[=+\-@\t\r]/.test(v) ? "'" + v : v; return '"' + s.replace(/"/g, '""') + '"' }
export async function GET(req: Request) {
  const type = new URL(req.url).searchParams.get('type')
  const rows = (await listEnquiries()).filter(e => !type || type === 'all' || e.type === type)
  const head = ['Date', 'Type', 'Status', 'Name', 'Email', 'Phone', 'Tour', 'Message', 'Other details']
  const lines = rows.map(e => [e.createdAt, e.type, e.status, e.name, e.email, e.phone, e.tour, e.message, Object.entries(e.fields).map(([k, v]) => `${k}: ${v}`).join(' | ')].map(cell).join(','))
  return new Response([head.map(cell).join(','), ...lines].join('\n'), { headers: { 'Content-Type': 'text/csv; charset=utf-8', 'Content-Disposition': 'attachment; filename="wanderline-enquiries.csv"' } })
}
