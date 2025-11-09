import NewsCard from "./NewsCard"

interface NewsItem {
  title: string
  link: string
  source_id: string
  pubDate: string
  image_url: string
  description: string
}

const NewsGrid = ({ news }: { news: NewsItem[] }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {news.map((item, i) => (
        <NewsCard key={i} item={item} />
      ))}
    </div>
  )
}

export default NewsGrid
