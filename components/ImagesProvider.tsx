'use client'
import { createContext, useContext, useMemo } from 'react'
export interface Img { src: string; name: string; orig: boolean }
interface Ctx { find: (base: string) => string | null; list: (dir: string) => Img[] }
const C = createContext<Ctx>({ find: () => null, list: () => [] })
const strip = (f: string) => f.replace(/\.[^.]+$/, '')
const pretty = (f: string) => strip(f.split('/').pop() || '').replace(/-color$/i, '').replace(/[-_]+/g, ' ').replace(/\b\w/g, c => c.toUpperCase())
export function ImagesProvider({ files, children }: { files: string[]; children: React.ReactNode }) {
  const v = useMemo<Ctx>(() => ({
    find: base => { const f = files.find(x => strip(x).toLowerCase() === base.toLowerCase()); return f ? '/images/' + encodeURI(f) : null },
    list: dir => files.filter(f => f.startsWith(dir + '/') && !f.slice(dir.length + 1).includes('/')).map(f => ({ src: '/images/' + encodeURI(f), name: pretty(f), orig: /-color\.[^.]+$/i.test(f) })),
  }), [files])
  return <C.Provider value={v}>{children}</C.Provider>
}
export default ImagesProvider
export const useImages = () => useContext(C)
