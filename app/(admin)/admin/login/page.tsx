'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
export default function Login() {
  const r = useRouter()
  const [pw, setPw] = useState(''), [err, setErr] = useState(''), [busy, setBusy] = useState(false)
  const go = async (e: React.FormEvent) => {
    e.preventDefault(); setBusy(true); setErr('')
    const res = await fetch('/api/admin/login', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ password: pw }) })
    const j = await res.json().catch(() => ({}))
    if (res.ok) { r.push('/admin'); r.refresh() } else { setErr(j.error || 'Login failed.'); setBusy(false) }
  }
  return (
    <div className="alogin"><form className="glass" onSubmit={go}>
      <div><span className="eyebrow">Dashboard</span><h1 style={{ font: '300 2rem var(--serif)' }}>Welcome <em>back</em></h1></div>
      <input className="in" type="password" placeholder="Password" autoFocus value={pw} onChange={e => setPw(e.target.value)} required />
      {err && <p className="ferr">{err}</p>}
      <button className="btn pri" disabled={busy}>{busy ? 'Signing in…' : 'Sign in'}</button>
    </form></div>
  )
}
