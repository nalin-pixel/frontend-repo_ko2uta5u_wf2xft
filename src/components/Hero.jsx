import { Stethoscope, CalendarDays } from 'lucide-react'

export default function Hero() {
  return (
    <section id="beranda" className="pt-24 bg-gradient-to-br from-blue-50 via-sky-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <span className="inline-flex items-center gap-2 text-blue-700 font-medium bg-blue-100 px-3 py-1 rounded-full">
            <Stethoscope size={18} /> Rumah Sakit & Klinik Terpadu
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
            Layanan Kesehatan Modern, Cepat, dan Terpercaya
          </h1>
          <p className="mt-4 text-gray-600 text-lg">
            Kami menghadirkan pelayanan kesehatan komprehensif mulai dari konsultasi dokter, layanan IGD 24 jam, rawat jalan, rawat inap, laboratorium, radiologi, hingga farmasi dalam satu ekosistem.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a href="#layanan" className="inline-flex justify-center items-center bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-md font-semibold transition-colors">
              Jelajahi Layanan
            </a>
            <a href="#janji" className="inline-flex justify-center items-center gap-2 bg-white border hover:bg-gray-50 text-gray-900 px-5 py-3 rounded-md font-semibold transition-colors">
              <CalendarDays size={18} /> Buat Janji Online
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[4/3] rounded-2xl bg-gradient-to-tr from-blue-200 via-sky-200 to-blue-100 shadow-inner" />
          <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-lg p-4 border">
            <p className="font-semibold text-gray-900">Akreditasi Paripurna</p>
            <p className="text-sm text-gray-600">Standar mutu dan keselamatan pasien terverifikasi</p>
          </div>
        </div>
      </div>
    </section>
  )
}
