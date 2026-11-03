import { readdirSync, statSync } from 'fs'
import path from 'path'
const EXT = /\.(png|jpe?g|webp|avif|svg|gif)$/i
// Lists every image inside public/images (server only). Runs at build time / per request in dev.
export function getImageFiles(): string[] {
  const out: string[] = []
  const walk = (dir: string, rel: string) => {
    let names: string[] = []
    try { names = readdirSync(dir) } catch { return }
    for (const n of names) {
      const p = path.join(dir, n), r = rel ? rel + '/' + n : n
      try { if (statSync(p).isDirectory()) walk(p, r); else if (EXT.test(n)) out.push(r) } catch {}
    }
  }
  walk(path.join(process.cwd(), 'public', 'images'), '')
  return out.sort()
}
