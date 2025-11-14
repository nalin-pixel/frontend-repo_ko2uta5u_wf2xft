import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { Tentang, Layanan, Dokter, Fasilitas, Kontak } from './components/Sections'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Tentang />
      <Layanan />
      <Dokter />
      <Fasilitas />
      <Kontak />
      <footer className="border-t py-8 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} SehatCare Clinic. All rights reserved.
      </footer>
    </div>
  )
}

export default App
