interface GalleryGridProps {
  images: string[]
  onSelect: (src: string) => void
}

const GalleryGrid = ({ images, onSelect }: GalleryGridProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {images.map((src, idx) => (
        <div
          key={idx}
          className="relative overflow-hidden rounded-xl group cursor-pointer"
          onClick={() => onSelect(src)}
        >
          <img
            src={src}
            alt={`Gallery ${idx + 1}`}
            className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center text-white text-lg font-semibold">
            Lihat Gambar
          </div>
        </div>
      ))}
    </div>
  )
}

export default GalleryGrid
