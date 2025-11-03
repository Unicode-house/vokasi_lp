/* eslint-disable @typescript-eslint/no-explicit-any */
import { useParams, Link } from 'react-router-dom'
import { useEffect, useMemo } from 'react'
import useNewsModule from '@/hooks/useNewsModule'
import Sidebar from '@/components/sidebarCategory'

const DetailsNews = () => {
  const { id } = useParams()
  const { useGetGNews } = useNewsModule()
  const { data } = useGetGNews()

  // helper: ambil n item random tanpa mengubah array asli (Fisher–Yates)
  const randomSample = <T,>(arr: T[], n: number): T[] => {
    const copy = arr.slice()
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[copy[i], copy[j]] = [copy[j], copy[i]]
    }
    return copy.slice(0, n)
  }

  // Cari berita yang id-nya sama dengan param; fallback ke item pertama jika tidak ditemukan
  const news = data?.find((item: any) => String(item.id) === String(id)) || data?.[0] || null

  // Ambil berita lainnya secara random (maks 3) — gunakan useMemo supaya tidak berubah saat scroll/rehydrate
  const relatedNews = useMemo(() => {
    if (!data || data.length <= 1) return []
    const others = data.filter((item: any) => String(item.id) !== String(id))
    return randomSample(others, Math.min(3, others.length))
  }, [data, id])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [id, data])

  if (!data) return <div className="text-center py-10">Memuat berita...</div>
  if (!news) return <div className="text-center py-10">Berita tidak ditemukan</div>

  return (
    <div className="w-full min-h-screen  pt-20">
      <div className="w-full mx-auto grid grid-cols-12 gap-8 py-10 px-8">
        {/* Sidebar kiri */}
        <aside className="col-span-12 md:col-span-3">
          <Sidebar
            categories={[
              'Politics',
              'National',
              'International',
              'Regulation',
              'Business',
              'Finance',
              'Health Care',
              'Technology',
              'Jobs'
            ]}
          />
        </aside>

        {/* Konten utama */}
        <main className="col-span-12 md:col-span-6">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <button
              onClick={() => window.history.back()}
              className="mb-4 px-4 py-1 text-blue-700 rounded font-semibold text-sm"
            >
              &larr; Kembali
            </button>

            <h1 className="text-3xl font-bold mb-2">{news.title}</h1>
            <div className="flex items-center text-gray-500 text-sm mb-4 gap-4">
              <span>{news.publishedAt || news.date}</span>
              <span>{news.source?.name || news.location}</span>
            </div>
            <img
              src={news.image || news.urlToImage}
              alt={news.title}
              className="w-full max-h-[480px] object-cover rounded-lg mb-6"
            />
            <p className="text-gray-700 text-lg mb-6">{news.description || news.content}</p>

            {/* jika ada konten tambahan */}
            {news.content && (
              <div className="prose max-w-none text-gray-700">
                {/* gunakan dangerouslySetInnerHTML bila content berformat HTML */}
                <div>{news.content}</div>
              </div>
            )}
          </div>
        </main>

        {/* Rekomendasi kanan */}
        <aside className="col-span-12 md:col-span-3">
          <div className="sticky top-28 space-y-4">
            <div className="bg-white rounded-lg shadow p-4">
              <h2 className="text-lg font-bold mb-3">Berita Lainnya</h2>
              <div className="flex flex-col gap-3">
                {relatedNews.map((item: any) => (
                  <Link
                    to={`/saintek/news/${item.id}`}
                    key={item.id}
                    className="flex gap-3 items-start hover:bg-gray-50 p-2 rounded"
                  >
                    <img
                      src={item.image || item.urlToImage}
                      alt={item.title}
                      className="w-20 h-14 object-cover rounded"
                    />
                    <div className="flex-1">
                      <div className="text-xs text-gray-400">{item.publishedAt || item.date}</div>
                      <div className="font-semibold text-sm">{item.title}</div>
                      <div className="text-xs text-gray-500">{(item.description || item.content || '').slice(0, 60)}...</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-4 text-sm text-gray-500">
              <div className="font-semibold mb-2">More</div>
              <div>Link/teaser lain boleh ditaruh di sini.</div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  )
}

export default DetailsNews
