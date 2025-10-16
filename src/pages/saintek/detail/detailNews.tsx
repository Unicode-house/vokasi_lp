/* eslint-disable @typescript-eslint/no-explicit-any */
import { useParams, Link } from 'react-router-dom'
import useNewsModule from '@/hooks/useNewsModule'
import { useEffect } from 'react'

const DetailsNews = () => {
  const { id } = useParams()
  const { useGetGNews } = useNewsModule()
  const { data, isLoading } = useGetGNews()

  // Cari berita berdasarkan id
  const news = data?.find((item: any) => String(item.id) === String(id))
  const relatedNews = data?.filter((item: any) => String(item.id) !== String(id)).slice(0, 3)

  // Scroll ke atas setiap kali id berubah
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [id])

  if (isLoading) return <div className="text-center py-10">Loading...</div>
  if (!news) return <div className="text-center py-10">Berita tidak ditemukan</div>

  return (
    <div className="w-full min-h-screen bg-[#f7f9fb] flex justify-center py-10 px-2">
      <div className="flex flex-col md:flex-row gap-8 w-full max-w-6xl">
        {/* Kiri: Detail Berita */}
        <div className="flex-1 bg-white rounded-xl shadow-lg p-8 max-w-3xl mx-auto">
          <button
            onClick={() => window.history.back()}
            className="mb-4 px-4 py-1 bg-blue-100 text-blue-700 rounded font-semibold text-sm"
          >
            &larr; Kembali ke Beranda
          </button>
          <h1 className="text-3xl font-bold mb-2">{news.title}</h1>
          <div className="flex items-center text-gray-500 text-sm mb-4 gap-4">
            <span>{news.date}</span>
            <span>{news.location}</span>
          </div>
          <img src={news.image} alt={news.title} className="w-full max-h-[400px] object-cover rounded-lg mb-6" />
          <p className="text-gray-700 text-lg mb-6">{news.description}</p>
          {/* Bagikan */}
          <div className="flex gap-2 mt-4">
            <button className="bg-blue-600 text-white px-3 py-1 rounded">Facebook</button>
            <button className="bg-sky-400 text-white px-3 py-1 rounded">Twitter</button>
            <button className="bg-green-500 text-white px-3 py-1 rounded">Whatsapp</button>
          </div>
        </div>
        {/* Kanan: Berita Lainnya */}
        <div className="w-full md:w-[350px]">
          <h2 className="text-xl font-bold mb-4">Berita Lainnya</h2>
          <div className="flex flex-col gap-4">
            {relatedNews?.map((item: any) => (
              <Link
                to={`/saintek/news/${item.id}`}
                key={item.id}
                className="bg-white rounded-lg shadow p-3 flex flex-col hover:shadow-lg transition"
              >
                <img src={item.image} alt={item.title} className="w-full h-32 object-cover rounded mb-2" />
                <span className="text-xs text-gray-400 mb-1">{item.date}</span>
                <span className="font-semibold">{item.title}</span>
                <span className="text-sm text-gray-500">{item.description?.slice(0, 60)}...</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailsNews
