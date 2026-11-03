'use client'
import type React from 'react'
import { useState } from 'react'
export function useEnquiry(type: string, opts: { extra?: Record<string, string>; alert?: boolean } = {}) {
  const [sent, setSent] = useState(false)
  const [busy, setBusy] = useState(false)
  const [err, setErr] = useState('')
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (busy) return
    const f = e.currentTarget
    const body: Record<string, string> = { type, ...(opts.extra || {}) }
    Array.from(f.elements).forEach(el => {
      const x = el as HTMLInputElement
      if (!x.name || x.disabled) return
      if (el instanceof HTMLSelectElement && el.selectedIndex === 0) return
      body[x.name] = x.value
    })
    setBusy(true); setErr('')
    try {
      const r = await fetch('/api/enquiry', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) })
      const j = await r.json().catch(() => ({}))
      if (!r.ok) throw new Error(j.error || 'Something went wrong. Please try again.')
      setSent(true); f.reset()
    } catch (x) {
      const m = x instanceof Error ? x.message : 'Something went wrong. Please try again.'
      setErr(m); if (opts.alert) alert(m)
    } finally { setBusy(false) }
  }
  return { sent, busy, err, onSubmit }
}
