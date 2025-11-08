import React from "react";

const Unduhan = () => {
  return (
    <div className="bg-gray-100 min-h-screen text-gray-800">
      {/* HERO SECTION */}
      <section className="relative bg-[#455b8a] text-white py-20 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-2xl md:text-3xl font-semibold mb-6">
            SELAMAT DATANG <br /> DI PERATURAN SMK VOKASI KOTA BOGOR
          </h1>
          <div className="bg-white rounded-xl p-2 shadow-lg flex justify-between items-center max-w-2xl mx-auto">
            <input
              type="text"
              placeholder="Search"
              className="w-full px-3 py-2 rounded-md text-gray-700 focus:outline-none"
            />
            <button className="bg-[#1e3a8a] hover:bg-blue-800 text-white px-6 py-2 rounded-md font-medium">
              Search
            </button>
          </div>
          <p className="mt-4 text-sm text-gray-200">
            Peraturan terpopuler 2 minggu terakhir
          </p>
        </div>
      </section>

      {/* KLASIFIKASI PERATURAN */}
      <section className="max-w-6xl mx-auto mt-[-3rem] bg-white rounded-2xl shadow-md p-6 relative z-10">
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-semibold text-lg">
            KLASIFIKASI <span className="text-blue-700">PERATURAN</span>
          </h2>
          <button className="bg-[#1e3a8a] text-white px-4 py-1.5 rounded-md text-sm">
            Lihat Statistik
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {[
            {
              title: "Peraturan BPK",
              desc: "Berisi kumpulan peraturan SMK se-Kota Bogor.",
            },
            {
              title: "Peraturan Kementerian/Lembaga",
              desc: "Berisi kumpulan peraturan dari Dinas Pendidikan, dll.",
            },
            {
              title: "Peraturan Pusat",
              desc: "Berisi kumpulan UU, PP, dan peraturan pusat lainnya.",
            },
            {
              title: "Peraturan Daerah",
              desc: "Berisi kumpulan peraturan daerah setempat seperti Perda dan Pergub.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="border rounded-lg p-4 shadow-sm hover:shadow-md transition"
            >
              <h3 className="font-semibold text-blue-700">{item.title}</h3>
              <p className="text-sm mt-1 mb-3">{item.desc}</p>
              <button className="text-sm text-blue-600 hover:underline">
                Lihat Peraturan
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* PERATURAN BPK */}
      <section className="max-w-6xl mx-auto mt-8 bg-white rounded-2xl shadow-md p-6">
        <div className="flex justify-between mb-4">
          <h2 className="font-semibold text-lg">
            PERATURAN <span className="text-blue-700">BPK</span>
          </h2>
          <button className="bg-[#1e3a8a] text-white px-4 py-1.5 rounded-md text-sm">
            Lihat Lebih
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {Array(4)
            .fill(0)
            .map((_, i) => (
              <div
                key={i}
                className="border rounded-lg p-4 hover:shadow-md transition"
              >
                <h3 className="font-semibold text-blue-700">
                  Peraturan No. {i + 1} Tahun 2025
                </h3>
                <p className="text-sm mt-1">
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
      <section className="max-w-6xl mx-auto mt-8 bg-white rounded-2xl shadow-md p-6 grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="font-semibold text-lg mb-4">
            PERATURAN <span className="text-blue-700">TERBARU</span>
          </h2>
          {Array(3)
            .fill(0)
            .map((_, i) => (
              <div
                key={i}
                className="border rounded-lg p-4 mb-3 hover:shadow-md transition"
              >
                <h3 className="font-semibold text-blue-700">
                  Permendik No. {i + 10} Tahun 2025
                </h3>
                <p className="text-sm mt-1">
                  Tentang Pembinaan dan Pengelolaan SMK se-Kota Bogor
                </p>
                <p className="text-xs text-red-500 mt-2">
                  Diundangkan {i + 5} hari lalu
                </p>
              </div>
            ))}
        </div>

        <div>
          <h2 className="font-semibold text-lg mb-4">
            INPUT <span className="text-blue-700">TERBARU</span>
          </h2>
          {Array(3)
            .fill(0)
            .map((_, i) => (
              <div
                key={i}
                className="border rounded-lg p-4 mb-3 hover:shadow-md transition"
              >
                <h3 className="font-semibold text-blue-700">
                  Peraturan Daerah No. {i + 1} Tahun 2025
                </h3>
                <p className="text-sm mt-1">
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
      <section className="max-w-6xl mx-auto mt-8 bg-white rounded-2xl shadow-md p-6 grid md:grid-cols-2 gap-6">
        <div className="flex justify-center items-center">
          <img
            src="/logos/logo_unicode.png"
            alt="Gedung BPK"
            className="rounded-xl shadow-md w-80 object-cover"
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
              className="bg-gray-100 p-3 rounded-lg hover:bg-gray-50 transition"
            >
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* VIDEO & STATISTIK */}
      <section className="max-w-6xl mx-auto mt-8 bg-white rounded-2xl shadow-md p-6">
        <h2 className="font-semibold text-lg mb-6 text-center">
          VIDEO <span className="text-blue-700">TUTORIAL</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <p className="text-sm leading-relaxed text-gray-600">
            Video tutorial penggunaan website ini membantu pengguna memahami
            cara mencari dan mengakses peraturan SMK se-Kota Bogor dengan mudah
            dan cepat.
          </p>
          <iframe
            className="rounded-lg w-full h-64"
            src="https://www.youtube.com/embed/DVgtrPCdSCM?si=BClTCmMf6GKk7XEM"
            title="Tutorial Database Peraturan"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#1e3a8a] text-white mt-10">
        <div className="max-w-6xl mx-auto px-6 py-8 grid md:grid-cols-4 gap-6 text-sm">
          <div>
            <h3 className="font-semibold mb-2">TENTANG DATABASE</h3>
            <p>
              Website ini digunakan untuk menyebarluaskan informasi peraturan SMK
              Vokasi se-Kota Bogor.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">KONTAK</h3>
            <p>Email: info@smkvokasi-bogor.sch.id</p>
            <p>Telp: (0251) 123456</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">LINK TERKAIT</h3>
            <ul className="space-y-1">
              <li><a href="#" className="hover:underline">Dinas Pendidikan</a></li>
              <li><a href="#" className="hover:underline">SMK Vokasi Bogor</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">MEDIA SOSIAL</h3>
            <div className="flex space-x-3">
              <a href="#"><i className="fa-brands fa-instagram"></i></a>
              <a href="#"><i className="fa-brands fa-tiktok"></i></a>
            </div>
          </div>
        </div>
        <div className="text-center py-3 text-xs bg-[#152a58]">
          © 2025 Komunitas SMK Vokasi Kota Bogor. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Unduhan;
