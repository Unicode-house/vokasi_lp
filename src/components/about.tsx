import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AboutPage() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      easing: "ease-in-out",
    });
  }, []);


  return (
    <div className="min-h-screen w-full bg-[#faf8f2] px-6 md:px-16 lg:px-24 py-20 md:py-32 flex flex-col gap-24 md:gap-32">
      {/* === Section 1: Tentang Kami === */}
      <section className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-20">
        {/* Gambar */}
        <div
          data-aos="fade-up"
          className="md:w-1/2 flex justify-center"
        >
          <img
            src="/assets/Meeting.png"
            alt="Tentang Kami"
            className="w-full max-w-[820px] object-contain"
          />
        </div>

        {/* Teks */}
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          className="md:w-1/2 text-center md:text-left"
        >
          <h2 className="text-4xl md:text-5xl text-center font-bold text-gray-900 mb-6">
            Tentang Kami
          </h2>
          <p className="text-gray-700 text-lg leading-snug md:leading-normal text-center max-w-prose mx-auto">
            Kami adalah sekelompok orang yang percaya bahwa belajar dan
            bertumbuh adalah perjalanan bersama. Kami bekerja dengan hati,
            menghargai perbedaan, dan berusaha menciptakan ruang yang nyaman,
            ramah, dan terasa dekat. Di sini, setiap ide didengar, setiap orang
            dihargai, dan setiap langkah kecil dirayakan. Kami ingin hadir
            sebagai teman yang siap menyimak, membantu, dan menemani.
          </p>
        </div>
      </section>

      {/* === Section 2: Visi === */}
      <section className="flex flex-col md:flex-row-reverse items-center justify-between gap-12 md:gap-20">
        {/* Gambar */}
        <div
          data-aos="fade-up"
          className="md:w-1/2 flex justify-center"
        >
          <img
            src="/assets/visi.png"
            alt="Visi"
            className="w-full max-w-[820px] object-contain"
          />
        </div>

        {/* Teks */}
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          className="md:w-1/2 text-center md:text-left"
        >
          <h2 className="text-4xl md:text-5xl text-center font-bold text-gray-900 mb-6">
            Visi
          </h2>
          <p className="text-gray-700 text-lg leading-snug md:leading-normal text-center max-w-prose mx-auto">
            Menjadi tempat yang membangkitkan harapan serta keberanian untuk
            mencoba hal baru. Kami membayangkan lingkungan yang aman dan
            inklusif, di mana siapa pun merasa pantas untuk belajar, berkembang,
            dan berkontribusi. Kami ingin menjadi jembatan yang menghubungkan
            keinginan baik dengan tindakan sederhana yang berdampak—pelan tapi
            pasti, manusiawi, dan berkelanjutan.
          </p>
        </div>
      </section>

      {/* === Section 3: Misi === */}
      <section className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-20">
        {/* Gambar */}
        <div
          data-aos="fade-up"
          className="md:w-1/2 flex justify-center"
        >
          <img
            src="/assets/misi.png"
            alt="Misi"
            className="w-[70%] max-w-[820px] object-contain"
          />
        </div>

        {/* Teks */}
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          className="md:w-1/2 text-center md:text-left"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-6">
            Misi
          </h2>
          <p className="text-gray-700 text-lg leading-snug md:leading-normal text-center max-w-prose mx-auto">
            Mendengarkan lebih dulu sebelum menawarkan jawaban. Menyederhanakan
            hal yang rumit agar mudah dipahami. Menghadirkan panduan yang
            jernih, praktik yang realistis, serta dukungan yang konsisten. Kami
            berupaya menjaga kualitas—rapi, teliti, dan dapat diandalkan—seraya
            tetap hangat dan rendah hati dalam setiap interaksi.
          </p>
        </div>
      </section>

      {/* === Section 4: Tujuan === */}
      <section className="flex flex-col md:flex-row-reverse items-center justify-between gap-12 md:gap-20">
        {/* Gambar */}
        <div
          data-aos="fade-up"
          className="md:w-1/2 flex justify-center"
        >
          <img
            src="/assets/tujuan.png"
            alt="Tujuan"
            className="w-[70%] max-w-[820px] object-contain"
          />
        </div>

        {/* Teks */}
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          className="md:w-1/2 text-center md:text-left"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-6">
            Tujuan
          </h2>
          <p className="text-gray-700 text-lg leading-snug text-center md:leading-normal max-w-prose mx-auto">
            Membantu lebih banyak orang merasa mampu, diterima, dan
            diberdayakan. Kami berharap setiap pertemuan meninggalkan kesan
            baik: lebih tenang, lebih paham, dan lebih siap melangkah. Dengan
            langkah yang tertata dan niat yang tulus, kami ingin memberi manfaat
            yang nyata—bukan sekadar hasil, tetapi juga rasa: rasa aman,
            dihargai, dan punya arah.
          </p>
        </div>
      </section>
    </div>
  );
}
