/* eslint-disable @typescript-eslint/no-explicit-any */
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import useNewsModule from "@/hooks/useNewsModule";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeInOut" },
  },
};

const HeroSection = () => {
  return (
    <section className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 px-4 md:px-20 h-auto md:h-[90vh] py-10">
      {/* Left Feature */}
      <div className="md:col-span-2 relative rounded-3xl overflow-hidden group">
        <img
          src="https://asset.kompas.com/crops/01JNoXR_OzJfy-94LkVRZthWi_0=/0x2:800x536/1200x800/data/photo/2024/09/19/66ebca0e60f61.jpg"
          alt="Pendiri dan mantan CEO Marvell Technology"
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent rounded-3xl"></div>
        <div className="absolute inset-0 flex flex-col justify-end p-8 text-white gap-3">
          <span className="py-1 px-4 bg-red-200 w-fit rounded-full text-red-600 font-semibold text-sm">
            News
          </span>
          <h1 className="text-3xl md:text-4xl font-bold leading-snug">
            Pendiri dan mantan CEO Marvell Technology, Meninggal Dunia
          </h1>
          <p className="text-sm md:text-base max-w-3xl opacity-90">
            Sehat Sutardja, meninggal dunia di usia 63 tahun. Kepergiannya
            meninggalkan duka mendalam di dunia teknologi dan bisnis.
          </p>
        </div>
      </div>

      {/* Right Stack */}
      <div className="flex flex-col gap-4">
        {[
          {
            img: "https://akcdn.detik.net.id/community/media/visual/2025/03/14/ilustrasi-data-center-1741939204417_169.jpeg?w=700&q=90",
            source: "www.detik.com",
            title:
              "Ekonomi Digital Melonjak, Indonesia Berebut Jadi Pusat Data Center ASEAN",
          },
          {
            img: "https://akcdn.detik.net.id/community/media/visual/2020/10/28/ilustrasi-koneksi-internet_169.jpeg?w=700&q=90",
            source: "www.detik.com",
            title:
              "Isu Koneksi dan Infrastruktur: Dampak terhadap Transformasi Digital",
          },
        ].map((item, idx) => (
          <div
            key={idx}
            className="relative rounded-3xl overflow-hidden group h-64 md:h-1/2"
          >
            <img
              src={item.img}
              alt={item.title}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent rounded-3xl flex items-end p-4">
              <div className="text-white">
                <span className="px-3 py-1 rounded-full bg-[#8054f3] text-sm">
                  {item.source}
                </span>
                <h4 className="mt-2 font-semibold text-sm md:text-base leading-snug">
                  {item.title}
                </h4>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const NewsIntro = () => (
  <motion.div
    variants={fadeInUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
    className="flex flex-col items-center text-center gap-4 py-10"
  >
    <div className="px-4 py-1 rounded-full bg-[#8054f3] text-white text-sm font-semibold">
      Blog
    </div>
    <h2 className="text-4xl md:text-6xl font-bold text-gray-900">
      Berita Terbaru
    </h2>
    <p className="text-gray-600 max-w-2xl text-base md:text-lg leading-snug">
      Baca berita terkini seputar sains dan teknologi — mulai dari inovasi,
      penelitian, hingga tren digital global yang sedang berkembang.
    </p>
  </motion.div>
);

const NewsGrid = ({ data, navigator }: any) => (
  <motion.div
    variants={fadeInUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
  >
    {data?.map((i: any, index: number) => (
      <div
        key={index}
        onClick={() => navigator(`/saintek/news/${i.id}`)}
        className="group w-full h-[450px] rounded-2xl overflow-hidden bg-[#f4f3f2] hover:bg-[#171719] transition-all duration-500 cursor-pointer flex flex-col"
      >
        <div className="h-2/3 relative">
          <img
            src={i.image}
            alt={i.title}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute top-4 left-4 px-4 py-1 bg-[#8054f3] text-white text-xs rounded-full shadow-md">
            {i.source?.name || "News"}
          </div>
        </div>
        <div className="h-1/3 flex flex-col gap-2 p-4 text-gray-900 group-hover:text-white transition-colors">
          <span className="text-sm opacity-70">{i.publishedAt}</span>
          <h3 className="text-lg font-semibold line-clamp-2 leading-snug">
            {i.title}
          </h3>
        </div>
      </div>
    ))}
  </motion.div>
);

const SaintekPage = () => {
  const navigator = useNavigate();
  const { useGetGNews } = useNewsModule();
  const { data, isLoading } = useGetGNews();

  return (
    <main className="w-full min-h-screen bg-[#fcf9f5] pt-20">
      <HeroSection />

      <section className="px-4 md:px-24 mt-10 mb-24 flex flex-col gap-12">
        <NewsIntro />

        {isLoading && (
          <div className="w-full flex justify-center py-20 text-gray-500">
            Memuat berita...
          </div>
        )}

        {!isLoading && data && <NewsGrid data={data} navigator={navigator} />}
      </section>
    </main>
  );
};

export default SaintekPage;
