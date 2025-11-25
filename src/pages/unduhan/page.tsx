import Footer from "@/components/footer";

const Unduhan = () => {
  return (
    <div className="bg-[#F7F7F7] min-h-screen text-gray-800">

      {/* HERO SECTION */}
      <section className="relative bg-[#1e3a8a] text-white py-20 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-2xl md:text-3xl font-semibold mb-6">
            SELAMAT DATANG <br /> DI PERATURAN SMK VOKASI KOTA BOGOR
          </h1>

          {/* SEARCH BAR STYLE BLOG */}
          <div className="bg-white rounded-2xl p-3 shadow-sm border border-gray-200 flex justify-between items-center max-w-2xl mx-auto">
            <input
              type="text"
              placeholder="Search"
              className="w-full px-4 py-2 rounded-xl text-gray-700 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-xl font-medium shadow-sm">
              Search
            </button>
          </div>

          <p className="mt-4 text-sm text-gray-200">
            Peraturan terpopuler 2 minggu terakhir
          </p>
        </div>
      </section>

      {/* KLASIFIKASI PERATURAN */}
      <section className="max-w-6xl mx-auto mt-[-3rem] bg-white rounded-2xl shadow-sm border border-gray-200 p-6 relative z-10">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-blue-600">Klasifikasi Peraturan</h2>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-xl text-sm shadow-sm">
            Lihat Statistik
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {[
            { title: "Peraturan BPK", desc: "Berisi kumpulan peraturan SMK se-Kota Bogor." },
            { title: "Peraturan Kementerian/Lembaga", desc: "Berisi kumpulan peraturan dari Dinas Pendidikan, dll." },
            { title: "Peraturan Pusat", desc: "Berisi kumpulan UU, PP, dan peraturan pusat lainnya." },
            { title: "Peraturan Daerah", desc: "Berisi kumpulan peraturan daerah setempat seperti Perda dan Pergub." },
          ].map((item, i) => (
            <div
              key={i}
              className="border border-gray-200 rounded-2xl p-4 bg-white shadow-sm hover:shadow-md transition"
            >
              <h3 className="font-semibold text-black">{item.title}</h3>
              <p className="text-sm mt-1 mb-3 text-gray-600">{item.desc}</p>
              <button className="text-sm text-blue-600 hover:underline">
                Lihat Peraturan
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* PERATURAN BPK */}
      <section className="max-w-6xl mx-auto mt-8 bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
        <div className="flex justify-between mb-4">
          <h2 className="text-xl font-bold text-blue-600">Peraturan BPK</h2>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-xl text-sm shadow-sm">
            Lihat Lebih
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {Array(4)
            .fill(0)
            .map((_, i) => (
              <div
                key={i}
                className="border border-gray-200 rounded-2xl p-4 bg-white shadow-sm hover:shadow-md transition"
              >
                <h3 className="font-semibold text-black">
                  Peraturan No. {i + 1} Tahun 2025
                </h3>
                <p className="text-sm text-gray-600 mt-2">
                  Tentang Penetapan dan Tata Kelola Sekolah Vokasi Kota Bogor
                </p>
                <p className="text-xs text-red-500 mt-2">
                  Diundangkan {i + 2} bulan yang lalu
                </p>
              </div>
            ))}
        </div>
      </section>

      {/* PERATURAN TERBARU */}
      <section className="max-w-6xl mx-auto mt-8 bg-white rounded-2xl shadow-sm border border-gray-200 p-6 grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-bold text-blue-600 mb-4">Peraturan Terbaru</h2>
          {Array(3)
            .fill(0)
            .map((_, i) => (
              <div
                key={i}
                className="border border-gray-200 rounded-2xl p-4 mb-3 bg-white shadow-sm hover:shadow-md transition"
              >
                <h3 className="font-semibold text-black">
                  Permendik No. {i + 10} Tahun 2025
                </h3>
                <p className="text-sm mt-1 text-gray-700">
                  Tentang Pembinaan dan Pengelolaan SMK se-Kota Bogor
                </p>
                <p className="text-xs text-red-500 mt-2">
                  Diundangkan {i + 5} hari lalu
                </p>
              </div>
            ))}
        </div>

        <div>
          <h2 className="text-xl font-bold text-blue-600 mb-4">Input Terbaru</h2>
          {Array(3)
            .fill(0)
            .map((_, i) => (
              <div
                key={i}
                className="border border-gray-200 rounded-2xl p-4 mb-3 bg-white shadow-sm hover:shadow-md transition"
              >
                <h3 className="font-semibold text-black">
                  Peraturan Daerah No. {i + 1} Tahun 2025
                </h3>
                <p className="text-sm mt-1 text-gray-700">
                  Tentang Rencana Pengembangan Sekolah Vokasi dan Kurikulum
                </p>
                <p className="text-xs text-red-500 mt-2">
                  Diinput {i + 1} jam lalu
                </p>
              </div>
            ))}
        </div>
      </section>

      {/* STANDAR LAYANAN */}
      <section className="max-w-6xl mx-auto mt-8 bg-white rounded-2xl shadow-sm border border-gray-200 p-6 grid md:grid-cols-2 gap-6">
        <div className="flex justify-center items-center">
          <img
            src="/logos/logo_delta.png"
            alt="Gedung BPK"
            className="rounded-2xl  w-80 object-cover"
          />
        </div>
        <div className="space-y-4">
          {[
            "Produk hukum yang diunggah berasal dari sumber resmi.",
            "Semua dokumen diklasifikasikan berdasarkan jenis, tema, dan asal.",
            "Dapat diakses publik tanpa syarat.",
            "Saran & kritik bisa dikirim ke kontak resmi kami.",
          ].map((text, i) => (
            <div
              key={i}
              className="bg-gray-100 p-3 rounded-xl hover:bg-gray-50 border border-gray-200 transition"
            >
              <p className="text-gray-700">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* VIDEO */}
      <section className="max-w-6xl mx-auto mt-8 bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
        <h2 className="text-xl font-bold text-blue-600 mb-6 text-center">
          VIDEO TUTORIAL
        </h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <p className="text-sm leading-relaxed text-gray-600">
            Video tutorial penggunaan website ini membantu pengguna memahami
            cara mencari dan mengakses peraturan SMK Kota Bogor.
          </p>
          <iframe
            className="rounded-2xl w-full h-64"
            src="https://www.youtube.com/embed/IFFOW8DlgTQ?si=DJueICSKZGI2N1rz"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      {/* FOOTER */}
    <Footer/>
    </div>
  );
};

export default Unduhan;
