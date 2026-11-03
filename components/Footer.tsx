import Link from 'next/link'
import Logo from './Logo'
export default function Footer() {
  return (
    <footer><div className="wrap">
      <div className="fg">
        <div><Logo /><p className="sub" style={{ fontSize: '.88rem' }}>Journeys and events, beautifully curated since 2011.</p></div>
        <div><h4>Explore</h4><ul><li><Link href="/">Home</Link></li><li><Link href="/leisure">Leisure</Link></li><li><Link href="/mice">MICE</Link></li><li><Link href="/blogs">Blogs</Link></li><li><Link href="/gallery">Gallery</Link></li></ul></div>
        <div><h4>Support</h4><ul><li><Link href="/about">About us</Link></li><li><Link href="/contact">Contact us</Link></li><li><a href="#">Privacy policy</a></li><li><a href="#">Terms &amp; conditions</a></li></ul></div>
        <div><h4>Contact</h4><ul><li>+91-9830032368</li><li>bentsholidays@gmail.com</li></ul></div>
      </div>
      <div className="cp"><span>© 2026 Bents. All rights reserved.</span><span>Crafted with care</span></div>
    </div></footer>
  )
}
