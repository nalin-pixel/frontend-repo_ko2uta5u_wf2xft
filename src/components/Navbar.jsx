import { useState } from 'react'
import { Menu, Phone, Stethoscope, Hospital } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Beranda', href: '#beranda' },
    { label: 'Tentang Kami', href: '#tentang' },
    { label: 'Layanan', href: '#layanan' },
    { label: 'Dokter', href: '#dokter' },
    { label: 'Fasilitas', href: '#fasilitas' },
    { label: 'Kontak', href: '#kontak' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#beranda" className="flex items-center gap-2 text-blue-600 font-bold text-xl">
            <Hospital size={24} />
            SehatCare Clinic
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-gray-700 hover:text-blue-600 transition-colors">
                {item.label}
              </a>
            ))}
            <a href="#kontak" className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
              <Phone size={18} /> Hubungi Kami
            </a>
          </nav>

          <button className="md:hidden p-2" onClick={() => setOpen(!open)}>
            <Menu />
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="text-gray-700 hover:text-blue-600 transition-colors">
                  {item.label}
                </a>
              ))}
              <a href="#kontak" className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
                <Phone size={18} /> Hubungi Kami
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
