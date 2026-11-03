export const COOKIE = 'wl_admin'
const enc = new TextEncoder()
const secret = () => process.env.SESSION_SECRET || 'wanderline:' + (process.env.ADMIN_PASSWORD || '')
async function sig(msg: string) {
  const k = await crypto.subtle.importKey('raw', enc.encode(secret()), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign'])
  const s = await crypto.subtle.sign('HMAC', k, enc.encode(msg))
  return btoa(String.fromCharCode(...new Uint8Array(s))).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '')
}
export async function makeToken(days = 7) { const exp = String(Date.now() + days * 864e5); return exp + '.' + (await sig(exp)) }
export async function verifyToken(t?: string | null) {
  if (!t || !process.env.ADMIN_PASSWORD) return false
  const [exp, s] = t.split('.')
  if (!exp || !s || !(Number(exp) > Date.now())) return false
  const e = await sig(exp)
  if (e.length !== s.length) return false
  let d = 0
  for (let i = 0; i < e.length; i++) d |= e.charCodeAt(i) ^ s.charCodeAt(i)
  return d === 0
}
