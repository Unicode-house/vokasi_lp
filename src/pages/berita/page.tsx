import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { useNewsData } from "@/hooks/useNewsData";
import NewsGrid from "@/components/NewsGrid";
import NewsFilter from "@/components/NewsFilter";
import NewsSkeleton from "@/components/NewsSkeleton";

const BeritaPage = () => {
  const [category, setCategory] = useState("all");

  // 🔹 Inisialisasi AOS hanya di halaman ini
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-in-out",
      once: true,
      offset: 100,
    });
  }, []);

  // Gunakan keyword search untuk kategori
  const searchQuery =
    category === "science"
      ? "sains OR teknologi OR ilmu"
      : category === "religion"
      ? "dakwah OR islam OR agama"
      : undefined;

  const {
    data: news,
    isLoading,
    isError,
  } = useNewsData(undefined, searchQuery);

  if (isLoading)
    return (
      <main className="min-h-screen bg-[#fcfaf4] px-6 py-10">
        <div className="flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold mb-6 text-gray-900">
          📰 Berita Terkini
        </h1>
        <NewsFilter category={category} setCategory={setCategory} />
            
        </div>
        <NewsSkeleton />
      </main>
    );

  if (isError)
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-red-500 text-lg">Gagal memuat data berita.</p>
      </div>
    );

  return (
    <main className="min-h-screen bg-[#fcfaf4] px-6 py-10">
      <div className="flex flex-col mt-10">
        <div className="flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold mb-6 text-gray-900">
          📰 Berita Terkini
        </h1>
 
         <NewsFilter category={category} setCategory={setCategory} />
 
         </div>
 
         <section data-aos="fade-up">
           <NewsGrid news={news || []} />
         </section>
      </div>
    </main>
  );
};

export default BeritaPage;
