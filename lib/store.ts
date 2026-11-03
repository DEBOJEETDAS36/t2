import { promises as fs } from 'fs'
import path from 'path'
import { randomUUID } from 'crypto'
import { MongoClient, type Collection } from 'mongodb'
export type Status = 'new' | 'contacted' | 'closed'
export interface Enquiry { id: string; type: string; name: string; email: string; phone: string; message: string; tour: string; fields: Record<string, string>; status: Status; createdAt: string }
const dir = () => process.env.DATA_DIR || path.join(process.cwd(), 'data', 'store')
const file = () => path.join(dir(), 'enquiries.json')
let chain: Promise<unknown> = Promise.resolve()
function lock<T>(fn: () => Promise<T>): Promise<T> { const r = chain.then(fn, fn); chain = r.catch(() => {}); return r }
async function read(): Promise<Enquiry[]> { try { return JSON.parse(await fs.readFile(file(), 'utf8')) } catch { return [] } }
async function write(a: Enquiry[]) { await fs.mkdir(dir(), { recursive: true }); const t = file() + '.tmp'; await fs.writeFile(t, JSON.stringify(a, null, 1)); await fs.rename(t, file()) }
const fileList = () => read()
const fileAdd = (e: Omit<Enquiry, 'id' | 'status' | 'createdAt'>) => lock(async () => { const a = await read(); const rec: Enquiry = { ...e, id: randomUUID(), status: 'new', createdAt: new Date().toISOString() }; a.unshift(rec); await write(a); return rec })
const fileSetStatus = (id: string, status: Status) => lock(async () => { const a = await read(); const r = a.find(x => x.id === id); if (!r) return false; r.status = status; await write(a); return true })
const fileRemove = (id: string) => lock(async () => { const a = await read(); const n = a.filter(x => x.id !== id); if (n.length === a.length) return false; await write(n); return true })

// ---- MongoDB (used when MONGODB_URI is set) ----
export const storeKind = (): 'mongodb' | 'file' => (process.env.MONGODB_URI ? 'mongodb' : 'file')
type Doc = Omit<Enquiry, 'id'> & { _id: string }
const g = globalThis as unknown as { _wlMongo?: Promise<Collection<Doc>> }
function col(): Promise<Collection<Doc>> {
  if (!g._wlMongo) {
    const p = (async () => {
      const client = new MongoClient(process.env.MONGODB_URI!, { serverSelectionTimeoutMS: 8000 })
      await client.connect()
      const c = client.db(process.env.MONGODB_DB || 'wanderline').collection<Doc>('enquiries')
      await c.createIndex({ createdAt: -1 })
      return c
    })()
    p.catch(() => { g._wlMongo = undefined }) // allow a retry on the next request
    g._wlMongo = p
  }
  return g._wlMongo
}
const fromDoc = ({ _id, ...rest }: Doc): Enquiry => ({ id: _id, ...rest })

export async function listEnquiries(): Promise<Enquiry[]> {
  if (storeKind() === 'file') return fileList()
  return (await (await col()).find({}).sort({ createdAt: -1 }).limit(5000).toArray()).map(fromDoc)
}
export async function addEnquiry(e: Omit<Enquiry, 'id' | 'status' | 'createdAt'>): Promise<Enquiry> {
  if (storeKind() === 'file') return fileAdd(e)
  const doc: Doc = { ...e, status: 'new', createdAt: new Date().toISOString(), _id: randomUUID() }
  await (await col()).insertOne(doc)
  return fromDoc(doc)
}
export async function setStatus(id: string, status: Status): Promise<boolean> {
  if (storeKind() === 'file') return fileSetStatus(id, status)
  return (await (await col()).updateOne({ _id: id }, { $set: { status } })).matchedCount > 0
}
export async function removeEnquiry(id: string): Promise<boolean> {
  if (storeKind() === 'file') return fileRemove(id)
  return (await (await col()).deleteOne({ _id: id })).deletedCount > 0
}
