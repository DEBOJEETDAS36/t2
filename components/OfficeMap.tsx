'use client'
import { OFFICES } from '@/data/offices'
const X = (lon: number) => 40 + (lon - 68) * 12.8
const Y = (lat: number) => 70 + (32 - lat) * 15
const HUBS = ['Kolkata', 'Mumbai', 'Bengaluru', 'Hyderabad', 'Guwahati', 'Kochi']
export default function OfficeMap({ hot, setHot }: { hot: string; setHot: (s: string) => void }) {
  const pts = OFFICES.map(o => ({ ...o, x: X(o.lon) + (o.dx || 0), y: Y(o.lat) + (o.dy || 0) }))
  const d = pts.find(p => p.n === 'Delhi')!
  return (
    <svg viewBox="0 0 400 480" role="img" aria-label="Wanderline office locations across India">
      <g className="mapg">{[100, 180, 260, 340, 420].map(y => <line key={y} x1="20" x2="380" y1={y} y2={y} />)}{[80, 160, 240, 320].map(x => <line key={x} y1="40" y2="440" x1={x} x2={x} />)}</g>
      {pts.filter(p => HUBS.includes(p.n)).map(p => <path key={p.n} className="ol" d={`M${d.x} ${d.y} Q${(d.x + p.x) / 2 + 24} ${(d.y + p.y) / 2 - 10} ${p.x} ${p.y}`} />)}
      {pts.map((p, i) => (
        <g key={p.n} className={'op' + (hot === p.n ? ' hot' : '') + (p.hq ? ' hq' : '')} onMouseEnter={() => setHot(p.n)} onMouseLeave={() => setHot('')}>
          <circle className="ring" cx={p.x} cy={p.y} r={p.hq ? 7 : 5} style={{ animationDelay: `${-i * 0.25}s` }} />
          <circle className="dot" cx={p.x} cy={p.y} r={p.hq ? 6 : 4.5} />
          <circle className="hit" cx={p.x} cy={p.y} r="16" />
          <text x={p.l ? p.x - 11 : p.x + 11} y={p.y + 4} textAnchor={p.l ? 'end' : 'start'}>{p.n}{p.hq ? ' · HQ' : ''}</text>
        </g>
      ))}
    </svg>
  )
}
