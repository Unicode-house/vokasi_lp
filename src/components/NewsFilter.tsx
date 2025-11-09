interface NewsFilterProps {
  category: string
  setCategory: (value: string) => void
}

const NewsFilter = ({ category, setCategory }: NewsFilterProps) => {
  const categories = [
    { key: "all", label: "Semua" },
    { key: "science", label: "Sainstek" },
    { key: "religion", label: "Pojok Dakwah" },
  ]

  return (
    <div className="flex flex-wrap gap-3 mb-8">
      {categories.map((c) => (
        <button
          key={c.key}
          onClick={() => setCategory(c.key)}
          className={`px-4 py-2 rounded-xl font-medium transition-all ${
            category === c.key
              ? "bg-blue-600 text-white shadow-md"
              : "bg-gray-200 hover:bg-gray-300 text-gray-800"
          }`}
        >
          {c.label}
        </button>
      ))}
    </div>
  )
}

export default NewsFilter
