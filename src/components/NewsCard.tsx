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
    <article
      className="
        bg-white 
        rounded-3xl 
        overflow-hidden 
        border border-gray-200 
        hover:shadow-md 
        transition-all
      "
    >
      {/* IMAGE */}
      <div className="relative w-full h-72 overflow-hidden">
        <img
          src={item.image_url}
          alt={item.title}
          loading="lazy"
          className="w-full h-full object-cover"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).className =
              'w-full h-full object-contain p-10 bg-gray-100';
          }}
        />

        {/* CATEGORY BADGE */}
        <span
          className="
            absolute top-4 left-4 
            bg-purple-600 text-white 
            px-4 py-1 
            rounded-full text-xs font-semibold
            shadow-sm capitalize
          "
        >
          {item.source_id}
        </span>
      </div>

      {/* CONTENT */}
      <div className="p-5 flex flex-col h-full">

        {/* DATE */}
        <span className="text-sm text-gray-500 mb-1">
          {new Date(item.pubDate).toLocaleDateString("id-ID")}
        </span>

        {/* TITLE */}
        <h2 className="font-semibold text-xl text-gray-900 leading-snug mb-2 line-clamp-2">
          {item.title}
        </h2>

        {/* DESCRIPTION */}
        <p className="text-sm text-gray-600 leading-relaxed mb-4 line-clamp-3">
          {item.description || "Tidak ada deskripsi tersedia."}
        </p>

        {/* BUTTON */}
        <a
          href={item.link}
          target="_blank"
          className="
            block w-full text-center 
            bg-blue-600 text-white 
            font-semibold py-3 
            rounded-xl 
            hover:bg-blue-700 
            transition-colors
          "
        >
          Baca Selengkapnya
        </a>
      </div>
    </article>
  );
};

export default NewsCard;
