'use client'
import { useEffect, useId, useRef, useState } from 'react'
import type React from 'react'

type Props = {
  label: string
  value: string
  options: readonly string[]
  onChange: (v: string) => void
}

export default function GlassSelect({ label, value, options, onChange }: Props) {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState(0)
  const root = useRef<HTMLDivElement>(null)
  const trigger = useRef<HTMLButtonElement>(null)
  const list = useRef<HTMLDivElement>(null)
  const uid = useId()
  const listId = `${uid}-list`
  const optionId = (i: number) => `${uid}-opt-${i}`
  const selected = Math.max(0, options.indexOf(value))

  const openMenu = () => {
    setActive(selected)
    setOpen(true)
  }

  const closeMenu = (refocus = true) => {
    setOpen(false)
    if (refocus) requestAnimationFrame(() => trigger.current?.focus())
  }

  const pick = (i: number) => {
    onChange(options[i])
    closeMenu()
  }

  useEffect(() => {
    if (!open) return
    const outside = (e: PointerEvent) => {
      if (!root.current?.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('pointerdown', outside)
    return () => document.removeEventListener('pointerdown', outside)
  }, [open])

  useEffect(() => {
    if (!open) return
    list.current?.querySelector<HTMLElement>(`[data-idx="${active}"]`)?.scrollIntoView({ block: 'nearest' })
  }, [open, active])

  const onKey = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    const k = e.key
    if (k === 'Escape') {
      if (open) { e.preventDefault(); closeMenu() }
      return
    }
    if (k === 'Tab') { setOpen(false); return }
    if (k === 'ArrowDown' || k === 'ArrowUp') {
      e.preventDefault()
      if (!open) {
        setActive(k === 'ArrowUp' ? options.length - 1 : selected)
        setOpen(true)
        return
      }
      setActive(a => (k === 'ArrowDown' ? (a + 1) % options.length : (a - 1 + options.length) % options.length))
      return
    }
    if (open && k === 'Home') { e.preventDefault(); setActive(0); return }
    if (open && k === 'End') { e.preventDefault(); setActive(options.length - 1); return }
    if (k === 'Enter' || k === ' ') {
      e.preventDefault()
      if (open) pick(active)
      else openMenu()
    }
  }

  return (
    <div ref={root} className={'gs' + (open ? ' open' : '')}>
      <span className="gs-label">{label}</span>
      <button
        ref={trigger}
        type="button"
        className="gs-btn"
        role="combobox"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={open ? listId : undefined}
        aria-activedescendant={open ? optionId(active) : undefined}
        aria-label={`${label}: ${value}`}
        onClick={() => (open ? closeMenu() : openMenu())}
        onKeyDown={onKey}
      >
        <span className="gs-val">{value}</span>
        <span className="gs-arrow" aria-hidden="true">
          <svg viewBox="0 0 24 24"><path d="M6 9l6 6 6-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </span>
      </button>

      {open && (
        <div ref={list} id={listId} className="gs-menu" role="listbox" aria-label={label}>
          <span className="gs-menu-head" aria-hidden="true">{label}</span>
          {options.map((o, i) => (
            <div
              key={o}
              id={optionId(i)}
              role="option"
              aria-selected={o === value}
              data-idx={i}
              data-active={i === active}
              className="gs-opt"
              onMouseEnter={() => setActive(i)}
              onMouseDown={e => e.preventDefault()}
              onClick={() => pick(i)}
            >
              <span>{o}</span>
              <span className="gs-tick" aria-hidden="true">✓</span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
