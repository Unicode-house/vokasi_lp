interface NewsItem {
  title: string
  link: string
  source_id: string
  pubDate: string
  image_url: string
  description: string
}

const NewsCard = ({ item }: { item: NewsItem }) => {
  return (
    <article className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all flex flex-col">
      {item.image_url ? (
        <img
          src={item.image_url}
          alt={item.title}
          className="w-full h-52 object-cover"
          loading="lazy"
        />
      ) : (
        <div className="w-full h-52 bg-gray-200 flex items-center justify-center text-gray-500">
          Tidak ada gambar
        </div>
      )}

      <div className="flex-1 flex flex-col justify-between p-5">
        <div>
          <h2 className="font-semibold text-lg text-gray-900 mb-2 line-clamp-2">
            {item.title}
          </h2>
          <p className="text-sm text-gray-600 mb-4 line-clamp-3">
            {item.description || "Tidak ada deskripsi"}
          </p>
        </div>

        <div className="flex justify-between items-center text-sm text-gray-500 mt-auto pt-2 border-t">
          <span className="capitalize">{item.source_id}</span>
          <span>{new Date(item.pubDate).toLocaleDateString("id-ID")}</span>
        </div>

        <a
          href={item.link}
          target="_blank"
          className="mt-3 inline-block text-center bg-blue-600 text-white font-semibold py-2 px-4 rounded-xl hover:bg-blue-700 transition-colors"
        >
          Baca Selengkapnya
        </a>
      </div>
    </article>
  )
}

export default NewsCard
