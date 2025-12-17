import { motion } from "framer-motion";

export default function AboutPage() {
  // Variansi Animasi untuk penggunaan berulang
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  return (
    <div className="min-h-screen w-full bg-[#F7F7F7] px-6 md:px-16 lg:px-24 py-20 md:py-32 flex flex-col gap-24 md:gap-32 overflow-hidden">
      {/* === Section 1: Pendahuluan === */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
        className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-20"
      >
        <div className="md:w-1/2 flex justify-center">
          <img
            src="/assets/Meeting.png"
            alt="Tentang Delta Team"
            className="w-full max-w-[820px] object-contain rounded-2xl shadow-lg"
          />
        </div>
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Tentang Kami
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Delta Team merupakan komunitas profesional Kepala Sekolah Menengah Kejuruan (SMK) di Kabupaten Bogor. Wadah kolaboratif ini dikembangkan untuk meningkatkan mutu pendidikan kejuruan secara terarah, inovatif, dan berstandar global.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Diinisiasi oleh Ibu Dina Martha Tiraswati, M.Pd., tim ini berperan sebagai jaringan strategis yang menghubungkan sekolah, perguruan tinggi, dan dunia industri nasional maupun internasional.
          </p>
        </div>
      </motion.section>

      {/* === Section 2: Filosofi === */}
      <motion.section
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-white p-8 md:p-16 rounded-3xl shadow-sm border border-gray-100"
      >
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4 italic">
            "Bersama Kita Bisa, Bermitra Kita Juara"
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            Filosofi Delta Team merepresentasikan perubahan, pertumbuhan, dan pertemuan berbagai aliran dalam ekosistem pendidikan vokasi.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            <div className="flex gap-4">
              <span className="text-blue-600 font-bold">01.</span>
              <p className="text-gray-700">
                Perubahan yang bermakna lahir dari kerja bersama, bukan usaha individu.
              </p>
            </div>
            <div className="flex gap-4">
              <span className="text-blue-600 font-bold">02.</span>
              <p className="text-gray-700">
                Kepala SMK harus menjadi agen transformasi yang terhubung dengan jaringan global.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* === Section 3: Visi === */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="flex flex-col md:flex-row-reverse items-center justify-between gap-12 md:gap-20"
      >
        <div className="md:w-1/2 flex justify-center">
          <img
            src="/assets/visi.png"
            alt="Visi Delta Team"
            className="w-full max-w-[820px] object-contain"
          />
        </div>
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Visi
          </h2>
          <blockquote className="text-2xl font-medium text-blue-800 leading-relaxed italic border-l-4 border-blue-600 pl-6">
            "Terwujudnya sekolah menengah kejuruan yang unggul, kolaboratif, dan berdaya saing global melalui kepemimpinan pendidikan yang profesional, inovatif, dan berorientasi pada kebutuhan dunia kerja."
          </blockquote>
        </div>
      </motion.section>

      {/* === Section 4: Misi === */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="flex flex-col md:flex-row items-start justify-between gap-12 md:gap-20"
      >
        <div className="md:w-1/2">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            Misi Kami
          </h2>
          <div className="space-y-6">
            {[
              "Mengembangkan kolaborasi strategis antar Kepala SMK dan perguruan tinggi nasional/internasional.",
              "Membangun kemitraan berkelanjutan dengan DUDI untuk menjamin keterserapan lulusan.",
              "Meningkatkan kapasitas kepemimpinan melalui program Entrepreneurship Leader.",
              "Meningkatkan kompetensi guru melalui pelatihan bersama tutor terbaik.",
              "Mendorong transformasi SMK agar adaptif terhadap teknologi dan tantangan global.",
            ].map((misi, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="flex items-start gap-4 text-gray-700 text-lg"
              >
                <div className="h-2 w-2 mt-3 rounded-full bg-blue-600 flex-shrink-0" />
                <span>{misi}</span>
              </motion.div>
            ))}
          </div>
        </div>
        <motion.div
          variants={fadeInUp}
          className="md:w-1/2 flex justify-center"
        >
          <img
            src="/assets/misi.png"
            alt="Misi Delta Team"
            className="w-full max-w-[500px] object-contain"
          />
        </motion.div>
      </motion.section>

      {/* === Section 5: Tujuan Strategis === */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Tujuan Strategis
            </h2>
            <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
            <p className="text-gray-600 mt-6 text-lg max-w-2xl mx-auto">
              Langkah nyata Delta Team dalam mentransformasi ekosistem pendidikan vokasi di Kabupaten Bogor.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            {/* Card 01 */}
            <motion.div
              variants={fadeInUp}
              className="group flex items-start gap-6 p-8 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-300"
            >
              <div className="flex-shrink-0 w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                <span className="text-2xl font-bold text-blue-600 group-hover:text-white">
                  01
                </span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Jejaring Kolaborasi
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Mewujudkan jejaring kolaborasi kuat antar SMK sebagai komunitas belajar dan berbagi praktik baik.
                </p>
              </div>
            </motion.div>

            {/* Card 02 */}
            <motion.div
              variants={fadeInUp}
              className="group flex items-start gap-6 p-8 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-300"
            >
              <div className="flex-shrink-0 w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                <span className="text-2xl font-bold text-blue-600 group-hover:text-white">
                  02
                </span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Standar Internasional
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Meningkatkan kualitas lulusan agar memiliki kompetensi teknis dan karakter sesuai standar industri global.
                </p>
              </div>
            </motion.div>

            {/* Card 03 */}
            <motion.div
              variants={fadeInUp}
              className="group flex items-start gap-6 p-8 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-300"
            >
              <div className="flex-shrink-0 w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                <span className="text-2xl font-bold text-blue-600 group-hover:text-white">
                  03
                </span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Peluang Kerja
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Memperluas peluang kerja lulusan melalui kerja sama konkret dengan perusahaan dalam dan luar negeri.
                </p>
              </div>
            </motion.div>

            {/* Card 04 */}
            <motion.div
              variants={fadeInUp}
              className="group flex items-start gap-6 p-8 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-300"
            >
              <div className="flex-shrink-0 w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                <span className="text-2xl font-bold text-blue-600 group-hover:text-white">
                  04
                </span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Kepemimpinan Agen Perubahan
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Menghasilkan kepala sekolah yang berjiwa pemimpin, wirausahawan, dan agen perubahan di vokasi.
                </p>
              </div>
            </motion.div>

            {/* Card 05 - Highlight */}
            <motion.div
              variants={fadeInUp}
              className="group flex items-start gap-6 p-8 bg-blue-600 rounded-3xl shadow-lg lg:col-span-2 hover:bg-blue-700 transition-all duration-300"
            >
              <div className="flex-shrink-0 w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                <span className="text-2xl font-bold text-white">05</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Inovasi Pembelajaran
                </h3>
                <p className="text-blue-50 leading-relaxed">
                  Meningkatkan mutu pembelajaran melalui penguatan kompetensi guru dan inovasi pengajaran berbasis kebutuhan nyata dunia kerja.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}