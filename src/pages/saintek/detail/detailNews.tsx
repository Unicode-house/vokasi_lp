/* eslint-disable @typescript-eslint/no-explicit-any */
import { useParams, Link } from 'react-router-dom'
import { useEffect, useMemo } from 'react'
import useNewsModule from '@/hooks/useNewsModule'

// Fungsi seeded shuffle (Fisher-Yates dengan seed)
function seededShuffle<T>(array: T[], seed: number): T[] {
  const result = array.slice()
  let m = result.length, t, i

  function random() {
    // Xorshift, cukup untuk shuffle
    seed ^= seed << 13
    seed ^= seed >> 17
    seed ^= seed << 5
    return Math.abs(seed) / 0x7fffffff
  }

  while (m) {
    i = Math.floor(random() * m--)
    t = result[m]
    result[m] = result[i]
    result[i] = t
  }
  return result
}

// Helper untuk format tanggal
function formatDate(dateStr: string) {
  if (!dateStr) return ''
  const date = new Date(dateStr)
  if (isNaN(date.getTime())) return dateStr // fallback jika gagal parse
  return date.toLocaleDateString('id-ID', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

const DetailsNews = () => {
  const { id } = useParams()
  const { useGetGNews } = useNewsModule()
  const { data } = useGetGNews()

  // Cari berita yang id-nya sama dengan param; fallback ke item pertama jika tidak ditemukan
  const news = data?.find((item: any) => String(item.id) === String(id)) || data?.[0] || null

  // Ambil berita lainnya secara random (maks 3) — seed pakai id+timestamp agar selalu acak tiap buka
  const relatedNews = useMemo(() => {
    if (!data || data.length <= 1) return []
    const others = data.filter((item: any) => String(item.id) !== String(id))
    // Ubah angka di bawah untuk jumlah berita lainnya (misal: 6)
    const seed = Number(
      String(id)
        .split('')
        .reduce((acc, c) => acc + c.charCodeAt(0), 0)
    ) + Date.now()
    return seededShuffle(others, seed).slice(0, Math.min(6, others.length))
  }, [data, id])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [id, data])

  if (!data) return <div className="text-center py-10">Memuat berita...</div>
  if (!news) return <div className="text-center py-10">Berita tidak ditemukan</div>

  return (
    <div className="w-full min-h-screen pt-20 bg-[#fcfaf4]">
      <div className="max-w-full mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 py-10 px-4">
        {/* Konten utama: lebar 8/12 */}
        <main className="col-span-1 md:col-span-8">
          <div className="bg-[fcfaf4] rounded-xl p-8">
            <button
              onClick={() => window.history.back()}
              className="mb-4 px-4 py-1 text-blue-700 rounded font-semibold text-sm"
            >
              &larr; Kembali
            </button> 
            <h1 className="text-3xl font-bold mb-2">{news.title}</h1>
            <div className="flex items-center text-gray-500 text-sm mb-4 gap-4">
              <span>{formatDate(news.publishedAt || news.date)}</span>
              <span>{news.source?.name || news.location}</span>
            </div>
            <img
              src={news.image || news.urlToImage}
              alt={news.title}
              className="w-full max-h-[480px] object-cover rounded-lg mb-6"
            />
            <p className="text-gray-700 text-lg mb-6">{news.description || news.content}</p>
            {news.content && (
              <div className="prose max-w-none text-gray-700">
                <div>{news.content}</div>
              </div>
            )}
          </div>
        </main>

        {/* Rekomendasi kanan: lebar 4/12 */}
        <aside className="col-span-1 md:col-span-4">
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
                      <div className="text-xs text-gray-400">{formatDate(item.publishedAt || item.date)}</div>
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
