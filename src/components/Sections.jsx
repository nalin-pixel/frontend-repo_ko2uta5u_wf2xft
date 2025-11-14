import { HeartPulse, Microscope, Ambulance, Syringe, Shield, UserRound, Award, Pill, Stethoscope } from 'lucide-react'

export function Tentang() {
  return (
    <section id="tentang" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-gray-900">Tentang Kami</h2>
          <p className="text-gray-600 leading-relaxed">
            SehatCare adalah jaringan rumah sakit dan klinik terpadu yang berfokus pada pelayanan
            kesehatan holistik berbasis teknologi. Kami menghadirkan pengalaman perawatan yang
            humanis, aman, dan efisien, dengan tim dokter spesialis berpengalaman serta fasilitas
            modern berstandar internasional.
          </p>
          <div className="grid grid-cols-2 gap-4">
            {[{icon:Award,label:'Terakreditasi KARS'},{icon:Shield,label:'Keselamatan Pasien'},{icon:UserRound,label:'Dokter Berpengalaman'},{icon:Stethoscope,label:'Pelayanan Terpadu'}].map((item,idx)=> (
              <div key={idx} className="flex items-center gap-3 p-4 border rounded-lg bg-gray-50">
                {<item.icon className="text-blue-600" size={20} />}
                <span className="text-sm font-medium text-gray-700">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="aspect-[4/3] rounded-2xl bg-gradient-to-tr from-gray-100 to-gray-50 border" />
      </div>
    </section>
  )
}

export function Layanan() {
  const services = [
    { icon: HeartPulse, title: 'IGD 24 Jam', desc: 'Tanggap darurat dengan tenaga medis terlatih dan ambulans siaga.' },
    { icon: Microscope, title: 'Laboratorium', desc: 'Pemeriksaan lengkap dengan hasil cepat dan akurat.' },
    { icon: Syringe, title: 'Rawat Jalan & Inap', desc: 'Kenyamanan kamar rawat dan poli spesialis lengkap.' },
    { icon: Pill, title: 'Farmasi', desc: 'Obat resmi, aman, dan terintegrasi dengan resep elektronik.' },
    { icon: Shield, title: 'Asuransi Rekanan', desc: 'Kerja sama berbagai asuransi dan BPJS Kesehatan.' },
    { icon: Ambulance, title: 'Home Care', desc: 'Kunjungan perawat dan fisioterapis ke rumah Anda.' },
  ]

  return (
    <section id="layanan" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Layanan Unggulan</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div key={i} className="p-6 bg-white rounded-xl border shadow-sm hover:shadow-md transition-shadow">
              <s.icon className="text-blue-600" />
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{s.title}</h3>
              <p className="mt-1 text-gray-600 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Dokter() {
  const doctors = [
    { name: 'dr. Andini Sp.PD', spec: 'Penyakit Dalam' },
    { name: 'dr. Bima Sp.OG', spec: 'Kebidanan & Kandungan' },
    { name: 'dr. Citra Sp.A', spec: 'Anak' },
    { name: 'dr. Dewa Sp.B', spec: 'Bedah Umum' },
    { name: 'dr. Eka Sp.THT-KL', spec: 'THT' },
    { name: 'dr. Farhan Sp.JP', spec: 'Jantung' },
  ]

  return (
    <section id="dokter" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Tim Dokter</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {doctors.map((d, i) => (
            <div key={i} className="p-6 border rounded-xl bg-gray-50">
              <div className="h-24 w-24 rounded-full bg-gradient-to-br from-blue-200 to-blue-100" />
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{d.name}</h3>
              <p className="text-gray-600 text-sm">{d.spec}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Fasilitas() {
  const items = [
    'Kamar Rawat Inap Nyaman',
    'Ruang Operasi Modern',
    'MRI & CT-Scan',
    'NICU & PICU',
    'Ruang Laktasi & Kids Corner',
    'Mushola & Cafetaria'
  ]

  return (
    <section id="fasilitas" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Fasilitas</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <div key={i} className="p-6 bg-white rounded-xl border">
              <p className="text-gray-800 font-medium">{it}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Kontak() {
  return (
    <section id="kontak" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Hubungi Kami</h2>
          <p className="mt-2 text-gray-600">Butuh informasi atau ingin konsultasi? Tim kami siap membantu.</p>
          <div className="mt-6 space-y-3">
            <p className="text-gray-700"><strong>Telepon:</strong> (021) 1234-5678</p>
            <p className="text-gray-700"><strong>WhatsApp:</strong> 0812-3456-7890</p>
            <p className="text-gray-700"><strong>Email:</strong> info@sehatcare.id</p>
            <p className="text-gray-700"><strong>Alamat:</strong> Jl. Sehat Harmoni No. 88, Jakarta</p>
          </div>
        </div>
        <form className="bg-gray-50 p-6 rounded-xl border">
          <div className="grid sm:grid-cols-2 gap-4">
            <input className="border rounded-md px-3 py-2" placeholder="Nama" />
            <input className="border rounded-md px-3 py-2" placeholder="Email" />
          </div>
          <input className="border rounded-md px-3 py-2 w-full mt-4" placeholder="Subjek" />
          <textarea rows={4} className="border rounded-md px-3 py-2 w-full mt-4" placeholder="Pesan" />
          <button type="button" className="mt-4 inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-md font-semibold transition-colors w-full sm:w-auto">Kirim Pesan</button>
        </form>
      </div>
    </section>
  )
}
