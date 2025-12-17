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
    <article className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
      <div className="relative w-full h-64 overflow-hidden">
        <img src={item.image_url} alt={item.title} className="w-full h-full object-cover" />
        {/* Badge diubah dari purple ke blue */}
        <span className="absolute top-4 left-4 bg-blue-600 text-white px-4 py-1 rounded-full text-xs font-bold shadow-md">
          {item.source_id}
        </span>
      </div>

      <div className="p-6 flex flex-col gap-3">
        <span className="text-sm text-gray-400 font-medium">
          {new Date(item.pubDate).toLocaleDateString("id-ID")}
        </span>
        <h2 className="font-bold text-xl text-gray-900 line-clamp-2 leading-tight">
          {item.title}
        </h2>
        <p className="text-gray-600 text-sm line-clamp-3">
          {item.description || "Tidak ada deskripsi tersedia."}
        </p>
        <a
          href={item.link}
          target="_blank"
          className="mt-2 w-full text-center bg-blue-600 text-white font-bold py-3 rounded-2xl hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200"
        >
          Baca Selengkapnya
        </a>
      </div>
    </article>
  );
};
export default NewsCard;
