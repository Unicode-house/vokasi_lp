import { useState } from "react"
import GalleryGrid from "@/components/GalleryGrid"
import LightboxModal from "@/components/LightboxModal"

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [activeCategory, setActiveCategory] = useState("semua")

  const categories = [
    { key: "semua", label: "Semua" },
    { key: "kegiatan", label: "Kegiatan" },
    { key: "acara", label: "Acara" },
    { key: "ekstrakurikuler", label: "Ekstrakurikuler" },
  ]

  // Dummy images dari Unsplash dengan kategori
  const allImages = Array.from({ length: 9 }, (_, i) => ({
    src: `https://source.unsplash.com/random/800x600?sig=${i}&school,activity`,
    category: categories[Math.floor(Math.random() * (categories.length - 1)) + 1].key,
  }))

  // Filter images berdasarkan kategori aktif
  const images = activeCategory === "semua" 
    ? allImages 
    : allImages.filter(img => img.category === activeCategory)

  return (
    <main className="min-h-screen bg-[#fdfcfb] pt-20">
      <section className="max-w-7xl mx-auto px-4 py-10">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
          Galeri Kegiatan
        </h1>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-3 mb-8 justify-center">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-4 py-2 rounded-xl font-medium transition-all ${
                activeCategory === cat.key
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-gray-200 hover:bg-gray-300 text-gray-800"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <GalleryGrid 
          images={images.map(img => img.src)} 
          onSelect={setSelectedImage} 
        />

        {selectedImage && (
          <LightboxModal
            image={selectedImage}
            onClose={() => setSelectedImage(null)}
          />
        )}
      </section>
    </main>
  )
}

export default GalleryPage
