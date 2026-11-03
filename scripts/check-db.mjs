// Usage: npm run db:check   (reads .env.local)
import { MongoClient } from 'mongodb'
const uri = process.env.MONGODB_URI
if (!uri) { console.error('MONGODB_URI is not set in .env.local'); process.exit(1) }
const client = new MongoClient(uri, { serverSelectionTimeoutMS: 8000 })
try {
  await client.connect()
  await client.db('admin').command({ ping: 1 })
  const c = client.db(process.env.MONGODB_DB || 'wanderline').collection('enquiries')
  console.log('Connected to MongoDB. Enquiries stored so far:', await c.countDocuments())
} catch (e) {
  console.error('Could not connect:', e.message)
  console.error('Check the connection string, the database user password, and Atlas > Network Access.')
  process.exit(1)
} finally { await client.close() }
