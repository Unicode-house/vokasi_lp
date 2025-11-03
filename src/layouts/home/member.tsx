import Marquee from 'react-fast-marquee'

export default function MemberDelta () {
  // Contoh data logo sekolah (nanti kamu bisa ganti pakai logo asli)
 const sekolah = [
  {
    nama: 'SMK Negeri 1 Bogor',
    logo: 'https://smkmadinatulquran.sch.id/wp-content/uploads/2025/08/SMK-MQ-LOGO-Header.svg'
  },
  {
    nama: 'SMK Negeri 2 Bogor',
    logo: 'https://smkmadinatulquran.sch.id/wp-content/uploads/2025/08/SMK-MQ-LOGO-Header.svg'
  },
  {
    nama: 'SMK Wikrama Bogor',
    logo: 'https://smkmadinatulquran.sch.id/wp-content/uploads/2025/08/SMK-MQ-LOGO-Header.svg'
  },
  {
    nama: 'SMK PGRI 1 Bogor',
    logo: 'https://smkmadinatulquran.sch.id/wp-content/uploads/2025/08/SMK-MQ-LOGO-Header.svg'
  },
  {
    nama: 'SMK Muhammadiyah 1 Bogor',
    logo: 'https://smkmadinatulquran.sch.id/wp-content/uploads/2025/08/SMK-MQ-LOGO-Header.svg'
  },
  {
    nama: 'SMK Taruna Terpadu',
    logo: 'https://smkmadinatulquran.sch.id/wp-content/uploads/2025/08/SMK-MQ-LOGO-Header.svg'
  },
  {
    nama: 'SMK Grafika Bogor',
    logo: 'https://smkmadinatulquran.sch.id/wp-content/uploads/2025/08/SMK-MQ-LOGO-Header.svg'
  },
  {
    nama: 'SMK Pakuan',
    logo: 'https://smkmadinatulquran.sch.id/wp-content/uploads/2025/08/SMK-MQ-LOGO-Header.svg'
  },
  {
    nama: 'SMK Kosgoro',
    logo: 'https://smkmadinatulquran.sch.id/wp-content/uploads/2025/08/SMK-MQ-LOGO-Header.svg'
  },
  {
    nama: 'SMK Bina Sejahtera 1',
    logo: 'https://smkmadinatulquran.sch.id/wp-content/uploads/2025/08/SMK-MQ-LOGO-Header.svg'
  },
  {
    nama: 'SMK Bina Sejahtera 2',
    logo: 'https://smkmadinatulquran.sch.id/wp-content/uploads/2025/08/SMK-MQ-LOGO-Header.svg'
  },
  {
    nama: 'SMK Bina Sejahtera 3',
    logo: 'https://smkmadinatulquran.sch.id/wp-content/uploads/2025/08/SMK-MQ-LOGO-Header.svg'
  },
  {
    nama: 'SMK YPHB Bogor',
    logo: 'https://smkmadinatulquran.sch.id/wp-content/uploads/2025/08/SMK-MQ-LOGO-Header.svg'
  },
  {
    nama: 'SMK Tri Dharma 1',
    logo: 'https://smkmadinatulquran.sch.id/wp-content/uploads/2025/08/SMK-MQ-LOGO-Header.svg'
  },
  {
    nama: 'SMK Tri Dharma 2',
    logo: 'https://smkmadinatulquran.sch.id/wp-content/uploads/2025/08/SMK-MQ-LOGO-Header.svg'
  },
  {
    nama: 'SMK Tunas Harapan',
    logo: 'https://smkmadinatulquran.sch.id/wp-content/uploads/2025/08/SMK-MQ-LOGO-Header.svg'
  },
  {
    nama: 'SMK Pelita Ciampea',
    logo: 'https://smkmadinatulquran.sch.id/wp-content/uploads/2025/08/SMK-MQ-LOGO-Header.svg'
  },
  {
    nama: 'SMK Kesehatan Bogor',
    logo: 'https://smkmadinatulquran.sch.id/wp-content/uploads/2025/08/SMK-MQ-LOGO-Header.svg'
  },
  {
    nama: 'SMK Harapan Bangsa',
    logo: 'https://smkmadinatulquran.sch.id/wp-content/uploads/2025/08/SMK-MQ-LOGO-Header.svg'
  },
  {
    nama: 'SMK Insan Kreatif',
    logo: 'https://smkmadinatulquran.sch.id/wp-content/uploads/2025/08/SMK-MQ-LOGO-Header.svg'
  },
  {
    nama: 'SMK Amanah Bangsa',
    logo: 'https://smkmadinatulquran.sch.id/wp-content/uploads/2025/08/SMK-MQ-LOGO-Header.svg'
  },
  {
    nama: 'SMK Plus Bogor',
    logo: 'https://smkmadinatulquran.sch.id/wp-content/uploads/2025/08/SMK-MQ-LOGO-Header.svg'
  },
  {
    nama: 'SMK Mutiara Bangsa',
    logo: 'https://smkmadinatulquran.sch.id/wp-content/uploads/2025/08/SMK-MQ-LOGO-Header.svg'
  },
  {
    nama: 'SMK Cibinong',
    logo: 'https://smkmadinatulquran.sch.id/wp-content/uploads/2025/08/SMK-MQ-LOGO-Header.svg'
  },
  {
    nama: 'SMK Tunas Jaya',
    logo: 'https://smkmadinatulquran.sch.id/wp-content/uploads/2025/08/SMK-MQ-LOGO-Header.svg'
  },
  {
    nama: 'SMK Ar-Rahman',
    logo: 'https://smkmadinatulquran.sch.id/wp-content/uploads/2025/08/SMK-MQ-LOGO-Header.svg'
  },
  {
    nama: 'SMK Putra Bangsa',
    logo: 'https://smkmadinatulquran.sch.id/wp-content/uploads/2025/08/SMK-MQ-LOGO-Header.svg'
  },
  {
    nama: 'SMK Negeri 3 Bogor',
    logo: 'https://smkmadinatulquran.sch.id/wp-content/uploads/2025/08/SMK-MQ-LOGO-Header.svg'
  },
  {
    nama: 'SMK Negeri 4 Bogor',
    logo: 'https://smkmadinatulquran.sch.id/wp-content/uploads/2025/08/SMK-MQ-LOGO-Header.svg'
  },
  {
    nama: 'SMK Negeri 5 Bogor',
    logo: 'https://smkmadinatulquran.sch.id/wp-content/uploads/2025/08/SMK-MQ-LOGO-Header.svg'
  },
  {
    nama: 'SMK Negeri 6 Bogor',
    logo: 'https://smkmadinatulquran.sch.id/wp-content/uploads/2025/08/SMK-MQ-LOGO-Header.svg'
  },
  {
    nama: 'SMK Negeri 7 Bogor',
    logo: 'https://smkmadinatulquran.sch.id/wp-content/uploads/2025/08/SMK-MQ-LOGO-Header.svg'
  },
  {
    nama: 'SMK Negeri 8 Bogor',
    logo: 'https://smkmadinatulquran.sch.id/wp-content/uploads/2025/08/SMK-MQ-LOGO-Header.svg'
  },
  {
    nama: 'SMK Negeri 9 Bogor',
    logo: 'https://smkmadinatulquran.sch.id/wp-content/uploads/2025/08/SMK-MQ-LOGO-Header.svg'
  },
  {
    nama: 'SMK Negeri 10 Bogor',
    logo: 'https://smkmadinatulquran.sch.id/wp-content/uploads/2025/08/SMK-MQ-LOGO-Header.svg'
  },
  {
    nama: 'SMK Negeri 11 Bogor',
    logo: 'https://smkmadinatulquran.sch.id/wp-content/uploads/2025/08/SMK-MQ-LOGO-Header.svg'
  }
]


// Potong array jadi 5 grup, masing-masing 7 sekolah
const grouped = Array.from({ length: 5 }, (_, i) =>
  sekolah.slice(i * 7, i * 7 + 7)
)


  return (
    <section className='bg-[#fdfaf6] py-20 flex flex-col items-center text-center'>
  {/* Judul Elegan */}
  <div className='mb-10'>
    <h2 className='text-4xl md:text-5xl font-light tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-gray-700 to-gray-500'>
      Anggota Komunitas Kami
    </h2>
    <div className='h-[2px] w-24 mx-auto mt-4 bg-gradient-to-r from-gray-400 via-gray-800 to-gray-400 rounded-full'></div>
    <p className='text-gray-500 mt-4 text-base md:text-lg italic'>
      35 Sekolah Menengah Kejuruan Bogor yang berkolaborasi aktif.
    </p>
  </div>

  {/* 5 baris marquee */}
  <div className='flex flex-col gap-8 w-full'>
    {grouped.map((row, i) => (
      <Marquee
        key={i}
        speed={40 + i * 5}
        gradient
        // gradientColor={[253, 250, 246]}
        direction={i % 2 === 0 ? 'left' : 'right'}
        pauseOnHover
      >
        {row.map((s, j) => (
          <div
            key={j}
            className='flex flex-col items-center justify-center mx-10'
          >
            <img
              src={s.logo}
              alt={s.nama}
              className='h-16 w-16 object-contain mb-2 drop-shadow-md transition-transform hover:scale-105'
              loading='lazy'
            />
            <p className='text-sm font-medium text-gray-700 whitespace-nowrap'>
              {s.nama}
            </p>
          </div>
        ))}
      </Marquee>
    ))}
  </div>
        </section>
  )

}
