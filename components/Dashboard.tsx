'use client'
import { useEffect, useMemo, useState } from 'react'
import { useRouter } from 'next/navigation'
import type { Enquiry, Status } from '@/lib/store'
const TYPES = [['all', 'All'], ['contact', 'General'], ['tour', 'Tours'], ['mice', 'MICE'], ['newsletter', 'Newsletter']]
const LBL: Record<string, string> = { contact: 'General', tour: 'Tour', mice: 'MICE', newsletter: 'Newsletter' }
const fmt = (s: string) => new Date(s).toLocaleString('en-IN', { dateStyle: 'medium', timeStyle: 'short' })
export default function Dashboard() {
  const r = useRouter()
  const [items, setItems] = useState<Enquiry[]>([])
  const [loading, setLoading] = useState(true)
  const [store, setStore] = useState('')
  const [error, setError] = useState('')
  const [type, setType] = useState('all')
  const [q, setQ] = useState('')
  const [sel, setSel] = useState<Enquiry | null>(null)
  const load = async () => { const res = await fetch('/api/admin/enquiries'); if (res.status === 401) return r.push('/admin/login'); const j = await res.json().catch(() => ({})); setStore(j.store || ''); if (!res.ok) setError(j.error || 'Could not load enquiries.'); else setItems(j.items); setLoading(false) }
  useEffect(() => { load() }, [])
  const list = useMemo(() => items.filter(e => (type === 'all' || e.type === type) && (!q || JSON.stringify(e).toLowerCase().includes(q.toLowerCase()))), [items, type, q])
  const count = (s: Status) => items.filter(e => e.status === s).length
  const status = async (e: Enquiry, s: Status) => { setItems(items.map(x => x.id === e.id ? { ...x, status: s } : x)); if (sel?.id === e.id) setSel({ ...e, status: s }); await fetch('/api/admin/enquiries', { method: 'PATCH', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ id: e.id, status: s }) }) }
  const del = async (e: Enquiry) => { if (!confirm(`Delete this ${LBL[e.type].toLowerCase()} entry from ${e.name || e.email}?`)) return; setItems(items.filter(x => x.id !== e.id)); setSel(null); await fetch('/api/admin/enquiries?id=' + e.id, { method: 'DELETE' }) }
  const out = async () => { await fetch('/api/admin/logout', { method: 'POST' }); r.push('/admin/login'); r.refresh() }
  return (
    <div className="adm">
      <div className="adm-top"><div><span className="eyebrow">Dashboard{store && <> · {store === 'mongodb' ? 'MongoDB' : 'Local file (set MONGODB_URI to use MongoDB)'}</>}</span><h1>Enquiries &amp; <em>subscribers</em></h1></div>
        <div style={{ display: 'flex', gap: 10 }}><a className="btn gh" href={`/api/admin/export?type=${type}`}>Export CSV</a><button className="btn gh" onClick={out}>Log out</button></div></div>
      <div className="stat">{[['Total', items.length], ['New', count('new')], ['Contacted', count('contacted')], ['Closed', count('closed')]].map(([l, v]) => <div key={l} className="glass"><small>{l}</small><b>{v}</b></div>)}</div>
      <div className="adm-bar">
        <div className="atabs">{TYPES.map(([k, n]) => <button key={k} className={type === k ? 'on' : ''} onClick={() => setType(k)}>{n}<small>{k === 'all' ? items.length : items.filter(e => e.type === k).length}</small></button>)}</div>
        <input className="aq" placeholder="Search name, email, tour, message…" value={q} onChange={e => setQ(e.target.value)} />
      </div>
      <div className="glass" style={{ overflowX: 'auto' }}>
        <table className="tbl"><thead><tr><th>Date</th><th>Type</th><th>From</th><th>Details</th><th>Status</th><th /></tr></thead><tbody>
          {list.map(e => (
            <tr key={e.id}><td style={{ whiteSpace: 'nowrap' }}>{fmt(e.createdAt)}</td><td><span className="tp">{LBL[e.type]}</span></td>
              <td><b>{e.name || '—'}</b><br /><span className="mu">{e.email}</span></td>
              <td className="mu" style={{ maxWidth: 320 }}>{e.tour && <b style={{ color: 'var(--fg)', fontWeight: 500 }}>{e.tour}<br /></b>}{(e.message || Object.values(e.fields).join(' · ')).slice(0, 90)}</td>
              <td><select className={'st st-' + e.status} value={e.status} onChange={x => status(e, x.target.value as Status)}><option value="new">New</option><option value="contacted">Contacted</option><option value="closed">Closed</option></select></td>
              <td style={{ whiteSpace: 'nowrap' }}><button className="lk" onClick={() => setSel(e)}>View</button> <button className="lk dg" onClick={() => del(e)}>Delete</button></td></tr>))}
        </tbody></table>
        {!loading && !error && !list.length && <p className="mu" style={{ padding: 40, textAlign: 'center' }}>{items.length ? 'No entries match your filters.' : 'No enquiries yet — they will appear here as soon as someone submits a form.'}</p>}
        {error && <p className="ferr" style={{ padding: 24 }}>{error}</p>}
        {loading && <p className="mu" style={{ padding: 40, textAlign: 'center' }}>Loading…</p>}
      </div>
      {sel && <div className="dr" onClick={() => setSel(null)}><div className="drp glass" onClick={e => e.stopPropagation()}>
        <button className="lbb lbx" style={{ top: 18, right: 18 }} onClick={() => setSel(null)} aria-label="Close">✕</button>
        <span className="eyebrow">{LBL[sel.type]} · {fmt(sel.createdAt)}</span><h2 style={{ font: '300 1.8rem var(--serif)', marginBottom: 18 }}>{sel.name || sel.email}</h2>
        <dl>{[['Email', sel.email], ['Phone', sel.phone], ['Tour', sel.tour], ...Object.entries(sel.fields), ['Message', sel.message]].filter(([, v]) => v).map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}</dl>
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginTop: 22 }}><a className="btn pri" href={`mailto:${sel.email}`}>Reply by email</a>{sel.status !== 'contacted' && <button className="btn gh" onClick={() => status(sel, 'contacted')}>Mark contacted</button>}{sel.status !== 'closed' && <button className="btn gh" onClick={() => status(sel, 'closed')}>Mark closed</button>}<button className="btn gh" onClick={() => del(sel)}>Delete</button></div>
      </div></div>}
    </div>
  )
}
