import { Upload, Trash2 } from "lucide-react";

export default function GalleryManager() {
  const images = [
    "https://placehold.co/600x400/png?text=Kegiatan+1",
    "https://placehold.co/600x400/png?text=Kegiatan+2",
    "https://placehold.co/600x400/png?text=Gedung+A",
    "https://placehold.co/600x400/png?text=Lab+RPL",
    "https://placehold.co/600x400/png?text=Upacara",
  ];

  return (
    <div>
       <div className="flex justify-between items-center mb-6">
        <div>
           <h2 className="text-xl font-bold text-gray-800">Galeri Foto</h2>
           <p className="text-sm text-gray-500">Upload dokumentasi kegiatan sekolah</p>
        </div>
        <button className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
          <Upload size={18} /> Upload Foto
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((src, idx) => (
          <div key={idx} className="group relative rounded-lg overflow-hidden shadow-sm aspect-video bg-gray-100">
            <img src={src} alt="Gallery" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <button className="bg-white/20 backdrop-blur p-2 rounded-full text-white hover:bg-red-600 transition-colors">
                <Trash2 size={20} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}