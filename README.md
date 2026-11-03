# Wanderline — Next.js travel site

Routes: / · /leisure · /leisure/[tour] · /mice · /about · /blogs · /blogs/[post] · /gallery · /contact · /admin

```bash
npm install
cp .env.example .env.local     # then set ADMIN_PASSWORD
npm run dev                    # http://localhost:3000   (dashboard: /admin)
npm run build && npm start
```

## Backend (minimal)
- Every form on the site posts to `/api/enquiry`. Entries are stored in **MongoDB** (collection `enquiries`) when `MONGODB_URI` is set,
  otherwise in a local JSON file (`data/store/enquiries.json`) so the site still works without a database while developing.
- `/admin` is protected by one password, `ADMIN_PASSWORD` in `.env.local`. Login sets a signed, httpOnly cookie (7 days).
- Dashboard: live data from the database — filter, search, view, change status (new / contacted / closed), delete, export CSV.
- Login attempts and form submissions are rate-limited per IP.

### Connect MongoDB Atlas
1. Create a free cluster at mongodb.com/atlas → **Database Access**: add a user with a password.
2. **Network Access**: allow your IP (for Vercel, add `0.0.0.0/0`, since Vercel uses changing IPs).
3. **Connect → Drivers**: copy the connection string, put your password in it, and set it as `MONGODB_URI` in `.env.local`
   (and in Vercel → Project → Settings → Environment Variables, together with `ADMIN_PASSWORD`).
4. Check it with `npm run db:check`, then submit a form on the site and open `/admin`.
- Content lives in `data/tours.ts`, `data/blogs.ts` and `data/gallery.ts`.
