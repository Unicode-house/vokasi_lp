
const dummyHero = {
  title: "Kunjungan Industri Siswa Ke PT Nusantara Digital",
  author: "Admin Sekolah",
  date: "12 Oktober 2025",
  description:
    "Sebanyak 45 siswa SMK melakukan kunjungan industri untuk melihat langsung proses kerja di perusahaan digital ternama di Jakarta.",
  image:
    "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1200",
}

const dummyPosts = [
  {
    id: 1,
    category: "Kegiatan Sekolah",
    title:
      "Workshop Desain Grafis: Siswa Belajar Teknik Membuat Poster Profesional Menggunakan Canva & Figma",
    author: "Admin",
    image:
      "https://images.unsplash.com/photo-1581091870622-1ee0f9c8d011?q=80&w=1000",
  },
  {
    id: 2,
    category: "Lomba",
    title:
      "Tim Robotik SMK Meraih Juara Harapan di Kompetisi Nasional Robotika Tahun 2025",
    author: "Panitia",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1000",
  },
  {
    id: 3,
    category: "Ekstrakurikuler",
    title:
      "Ekskul Pecinta Alam Lakukan Pendakian Gunung Cikuray Sebagai Latihan Dasar Survival",
    author: "Pembina Ekskul",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1000",
  },
]

const recentPosts = [
  {
    id: 1,
    title: "Pelatihan Jaringan Dasar Untuk Kelas X",
    image: "https://images.unsplash.com/photo-1581092334426-8ec1d06b2f65?q=80&w=400",
  },
  {
    id: 2,
    title: "Guru Tamu Dari Industri Berikan Materi Cybersecurity",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=400",
  },
  {
    id: 3,
    title: "Pentas Seni 2025: Ajang Kreativitas Siswa",
    image: "https://images.unsplash.com/photo-1515169067865-5387ec356754?q=80&w=400",
  },
  {
    id: 4,
    title: "Kantin Sehat Sekolah Resmi Dibuka",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=400",
  },
]

const categories = [
  "Kegiatan Sekolah",
  "Ekstrakurikuler",
  "Lomba",
  "Prestasi",
  "Pengumuman",
  "Artikel Umum",
]

const BlogPage = () => {
  return (
    <main className="w-full px-6 lg:px-20 pt-20 pb-12 flex gap-10">
      
      {/* LEFT CONTENT */}
      <div className="w-full lg:w-[70%] flex flex-col gap-10">

        {/* HERO POST */}
        <div className="rounded-3xl overflow-hidden bg-black text-white">
          <div className="relative h-80">
            <img
              src={dummyHero.image}
              alt={dummyHero.title}
              className="absolute inset-0 w-full h-full object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />
          </div>

          <div className="p-6 lg:p-8">
            <h2 className="text-2xl font-semibold">{dummyHero.title}</h2>

            <p className="text-sm text-gray-300 mt-2 flex items-center gap-2">
              <span>👤 {dummyHero.author}</span> •{" "}
              <span>{dummyHero.date}</span>
            </p>

            <p className="text-gray-200 mt-3 line-clamp-2">
              {dummyHero.description}
            </p>
          </div>
        </div>

        {/* POST LIST */}
        <div className="flex flex-col gap-10">
          {dummyPosts.map((post) => (
            <div
              key={post.id}
              className="flex gap-5 bg-white rounded-2xl p-4 shadow-sm hover:shadow-lg transition-all"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-44 h-32 rounded-xl object-cover"
              />

              <div className="flex flex-col justify-between">
                <span className="bg-green-600 text-white px-3 py-1 rounded-full text-xs w-fit">
                  {post.category}
                </span>

                <h3 className="text-lg font-semibold text-gray-900 leading-snug line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-sm text-gray-600 flex items-center gap-2">
                  👤 {post.author}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* RIGHT SIDEBAR */}
      <aside className="w-[30%] hidden lg:flex flex-col gap-10">

        {/* CATEGORIES */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Post Kategori</h3>
          <ul className="flex flex-col gap-3">
            {categories.map((cat, idx) => (
              <li
                key={idx}
                className="text-green-600 hover:text-green-700 cursor-pointer"
              >
                {cat}
              </li>
            ))}
          </ul>
        </div>

        {/* RECENT POSTS */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Post Terbaru</h3>
          <div className="flex flex-col gap-4">
            {recentPosts.map((post) => (
              <div key={post.id} className="flex items-center gap-3">
                <img
                  src={post.image}
                  className="w-14 h-14 rounded-lg object-cover"
                />
                <p className="text-sm font-medium text-gray-900 line-clamp-2">
                  {post.title}
                </p>
              </div>
            ))}
          </div>
        </div>

      </aside>
    </main>
  )
}

export default BlogPage
