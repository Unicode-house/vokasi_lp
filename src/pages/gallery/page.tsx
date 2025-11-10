import { useState } from "react"
import GalleryGrid from "@/components/GalleryGrid"
import LightboxModal from "@/components/LightboxModal"

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  // Dummy images dari Unsplash
  const images = Array.from({ length: 9 }, (_, i) => 
    `https://source.unsplash.com/random/800x600?sig=${i}&school,activity`
  )

  return (
    <main className="min-h-screen bg-[#fdfcfb] pt-20">
      <section className="max-w-7xl mx-auto px-4 py-10">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
          Galeri Kegiatan
        </h1>

        <GalleryGrid images={images} onSelect={setSelectedImage} />

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
