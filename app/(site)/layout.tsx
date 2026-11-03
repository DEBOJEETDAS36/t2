import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Cursor from '@/components/Cursor'
import ImagesProvider from '@/components/ImagesProvider'
import { getImageFiles } from '@/lib/images'
export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return <ImagesProvider files={getImageFiles()}><Cursor /><Navbar />{children}<Footer /></ImagesProvider>
}
