const NewsSkeleton = () => {
  return (
    <div className="animate-pulse grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col"
        >
          {/* Bagian gambar */}
          <div className="w-full h-52 bg-gray-200" />

          {/* Bagian konten */}
          <div className="p-5 flex-1 space-y-3">
            {/* Judul */}
            <div className="h-5 bg-gray-300 rounded w-3/4"></div>
            {/* Deskripsi */}
            <div className="h-4 bg-gray-300 rounded w-full"></div>
            <div className="h-4 bg-gray-300 rounded w-5/6"></div>
            {/* Footer meta */}
            <div className="h-3 bg-gray-300 rounded w-1/2 mt-4"></div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default NewsSkeleton
