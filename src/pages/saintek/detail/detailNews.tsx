/* eslint-disable @typescript-eslint/no-explicit-any */
import { useParams, Link } from "react-router-dom";
import { useEffect, useMemo } from "react";
import useNewsModule from "@/hooks/useNewsModule";

// Fungsi seeded shuffle (Fisher-Yates dengan seed)
function seededShuffle<T>(array: T[], seed: number): T[] {
  const result = array.slice();
  let m = result.length,
    t,
    i;

  function random() {
    seed ^= seed << 13;
    seed ^= seed >> 17;
    seed ^= seed << 5;
    return Math.abs(seed) / 0x7fffffff;
  }

  while (m) {
    i = Math.floor(random() * m--);
    t = result[m];
    result[m] = result[i];
    result[i] = t;
  }
  return result;
}

// Helper format tanggal
function formatDate(dateStr: string) {
  if (!dateStr) return "";
  const date = new Date(dateStr);
  if (isNaN(date.getTime())) return dateStr;
  return date.toLocaleDateString("id-ID", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

const DetailsNews = () => {
  const { id } = useParams();
  const { useGetGNews } = useNewsModule();
  const { data } = useGetGNews();

  const news =
    data?.find((item: any) => String(item.id) === String(id)) ||
    data?.[0] ||
    null;

  const relatedNews = useMemo(() => {
    if (!data || data.length <= 1) return [];
    const others = data.filter((item: any) => String(item.id) !== String(id));
    const seed =
      Number(
        String(id)
          .split("")
          .reduce((acc, c) => acc + c.charCodeAt(0), 0)
      ) + Date.now();
    return seededShuffle(others, seed).slice(0, Math.min(6, others.length));
  }, [data, id]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id, data]);

  if (!data)
    return (
      <div className="text-center py-20 text-gray-500 animate-pulse">
        Memuat berita...
      </div>
    );
  if (!news)
    return <div className="text-center py-10">Berita tidak ditemukan</div>;

  return (
    <div className="w-full min-h-screen pt-24 bg-[#fcfaf4]">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 py-12">
        {/* === Konten utama === */}
        <main className="col-span-1 md:col-span-8 px-0 md:px-0">
          <div className="p-6 md:p-12">
            {/* Tombol kembali */}
            <button
              onClick={() => window.history.back()}
              className="mb-6 px-4 py-2 text-sm text-blue-700 font-semibold rounded hover:text-blue-800 transition-all"
            >
              ← Kembali
            </button>

            {/* Judul */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              {news.title}
            </h1>

            {/* Meta */}
            <div className="flex flex-wrap items-center text-gray-500 text-sm mb-6 gap-4">
              <span>{formatDate(news.publishedAt || news.date)}</span>
              {news.source?.name && (
                <span className="font-medium text-gray-600">
                  {news.source.name}
                </span>
              )}
            </div>

            {/* Gambar utama */}
            <img
              src={news.image || news.urlToImage || "/assets/default-news.jpg"}
              alt={news.title}
              className="w-full max-h-[600px] object-cover mb-8"
            />

            {/* Konten */}
            <div className="max-w-[900px] mx-auto px-4">
              <p className="text-gray-700 text-[17px] leading-relaxed tracking-wide mb-6">
                {news.description || news.content}
              </p>

              {news.content && (
                <div className="prose prose-lg max-w-none text-gray-700">
                  <p>{news.content}</p>
                </div>
              )}
            </div>

            {/* Share */}
            <div className="flex flex-wrap items-center gap-3 mt-10 text-sm text-gray-500">
              <span className="font-medium">Bagikan:</span>
              <a
                href={`https://twitter.com/share?url=${window.location.href}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-600"
              >
                Twitter
              </a>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 hover:text-blue-800"
              >
                Facebook
              </a>
              <a
                href={`https://wa.me/?text=${window.location.href}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 hover:text-green-700"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </main>

        {/* === Sidebar === */}
        <aside className="col-span-1 md:col-span-4 px-6 md:px-10">
          <div className="sticky top-28 space-y-6">
            {/* Berita Lainnya */}
            <div className="bg-white rounded-lg shadow p-5">
              <h2 className="text-lg font-bold mb-4 text-gray-800">
                Berita Lainnya
              </h2>
              <div className="flex flex-col gap-3">
                {relatedNews.map((item: any) => (
                  <Link
                    to={`/saintek/news/${item.id}`}
                    key={item.id}
                    className="flex gap-3 items-start hover:bg-gray-50 hover:shadow-sm transition-all duration-200 p-2 rounded"
                  >
                    <img
                      src={item.image || item.urlToImage || "/assets/default-news.jpg"}
                      alt={item.title}
                      className="w-20 h-14 object-cover rounded"
                    />
                    <div className="flex-1">
                      <div className="text-xs text-gray-400">
                        {formatDate(item.publishedAt || item.date)}
                      </div>
                      <div className="font-semibold text-sm line-clamp-2">
                        {item.title}
                      </div>
                      <div className="text-s text-gray-500">
                        {(item.description || item.content || "").slice(0)}...
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Box Tambahan */}
            <div className="bg-white rounded-lg shadow p-5 text-sm text-gray-500">
              <div className="font-semibold mb-2 text-gray-700">More</div>
              <p>Link atau konten tambahan bisa ditaruh di sini.</p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default DetailsNews;
