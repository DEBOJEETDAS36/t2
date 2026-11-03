const m = new Map<string, number[]>()
const recent = (key: string, ms: number) => { const now = Date.now(); const a = (m.get(key) || []).filter(t => now - t < ms); m.set(key, a); return a }
export const attempts = (key: string, ms: number) => recent(key, ms).length
export const addAttempt = (key: string, ms = 3600_000) => { const a = recent(key, ms); a.push(Date.now()); m.set(key, a) }
export const ipOf = (req: Request) => req.headers.get('x-forwarded-for')?.split(',')[0].trim() || 'local'
