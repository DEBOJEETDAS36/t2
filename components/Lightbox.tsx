'use client'
import type React from 'react'
import { useEffect } from 'react'
export interface LbItem { label: string; title: string; sub?: string; a?: string; b?: string }
export default function Lightbox({ items, index, onIndex, onClose }: { items: LbItem[]; index: number | null; onIndex: (i: number) => void; onClose: () => void }) {
  const open = index !== null && items.length > 0
  useEffect(() => {
    if (!open) return
    const n = items.length
    const k = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') onIndex((index! + 1) % n)
      if (e.key === 'ArrowLeft') onIndex((index! + n - 1) % n)
    }
    addEventListener('keydown', k); document.body.style.overflow = 'hidden'
    return () => { removeEventListener('keydown', k); document.body.style.overflow = '' }
  }, [open, index, items.length])
  const it = open ? items[index!] : null
  const go = (d: number) => (e: React.MouseEvent) => { e.stopPropagation(); onIndex((index! + d + items.length) % items.length) }
  return (
    <div className={'lb' + (open ? ' on' : '')} onClick={onClose} aria-hidden={!open}>
      {it && <>
        <button className="lbb lbx" aria-label="Close" onClick={e => { e.stopPropagation(); onClose() }}>✕</button>
        <button className="lbb lbv" aria-label="Previous" onClick={go(-1)}>←</button>
        <button className="lbb lbt" aria-label="Next" onClick={go(1)}>→</button>
        <div className="lbi" onClick={e => e.stopPropagation()}>
          <div className="lbp" key={index} style={{ '--a': it.a, '--b': it.b } as React.CSSProperties}><div className="pimg" data-l={it.label} /></div>
          <div className="lbc"><div><small>{it.sub}</small><h3>{it.title}</h3></div><span>{index! + 1} / {items.length}</span></div>
        </div>
      </>}
    </div>
  )
}
