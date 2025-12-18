import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { blogService, type BlogPost } from "@/services/blogService";
import { Save, ArrowLeft, Image as ImageIcon } from "lucide-react";

export default function PostForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const isEditMode = !!id;

  const [formData, setFormData] = useState<BlogPost>({
    title: "",
    category: "",
    author: "",
    description: "",
    content: "",
    image: "", // Menambah field image
    date: new Date().toISOString().split('T')[0],
  });

  // Fetch data jika mode edit
  const { data: existingData, isLoading } = useQuery({
    queryKey: ['post', id],
    queryFn: () => blogService.getById(id!),
    enabled: isEditMode
  });

  useEffect(() => {
    if (existingData) {
      setFormData(existingData);
    }
  }, [existingData]);

  // Handle Input Change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Mutation
  const mutation = useMutation({
    mutationFn: (data: BlogPost) => {
      return isEditMode ? blogService.update(id!, data) : blogService.create(data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['posts'] });
      alert("Berhasil menyimpan artikel!");
      navigate("/admin/posts");
    },
    onError: (error) => {
        console.error(error);
        alert("Gagal menyimpan data.");
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate(formData);
  };

  if (isEditMode && isLoading) return <div>Loading...</div>;

  return (
    <form onSubmit={handleSubmit} className="max-w-6xl mx-auto pb-20">
      
      {/* Header Actions */}
      <div className="flex items-center justify-between mb-6 sticky top-0 bg-gray-100 z-10 py-4 backdrop-blur-sm bg-opacity-90">
        <div className="flex items-center gap-4">
            <button 
                type="button" 
                onClick={() => navigate("/admin/posts")}
                className="text-gray-500 hover:text-gray-800 transition-colors"
            >
                <ArrowLeft size={24} />
            </button>
            <h1 className="text-2xl font-bold text-gray-800">
                {isEditMode ? "Edit Artikel" : "Tulis Artikel Baru"}
            </h1>
        </div>
        <div className="flex gap-3">
            <button 
                type="button" 
                onClick={() => navigate("/admin/posts")}
                className="px-4 py-2 text-gray-600 hover:bg-white bg-transparent border border-transparent hover:border-gray-300 rounded-lg transition-all"
            >
                Batal
            </button>
            <button 
                type="submit" 
                disabled={mutation.isPending}
                className="flex items-center gap-2 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 shadow-sm disabled:opacity-50 transition-all"
            >
                <Save size={18} />
                {mutation.isPending ? "Menyimpan..." : "Simpan & Publish"}
            </button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Kolom Kiri: Konten Utama */}
        <div className="lg:col-span-2 space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <label className="block text-sm font-bold text-gray-700 mb-2">Judul Artikel</label>
                <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    placeholder="Masukkan judul yang menarik..."
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-lg font-medium focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                    required
                />
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <label className="block text-sm font-bold text-gray-700 mb-2">Isi Konten</label>
                <textarea
                    name="content"
                    value={formData.content}
                    onChange={handleChange}
                    placeholder="Mulai menulis cerita anda di sini..."
                    className="w-full border border-gray-300 rounded-lg p-4 h-[500px] font-mono text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all resize-y"
                    required
                />
                <p className="text-xs text-gray-400 mt-2 text-right">Mendukung format Markdown sederhana</p>
            </div>
        </div>

        {/* Kolom Kanan: Sidebar Settings */}
        <div className="space-y-6">
            
            {/* Metadata Card */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 space-y-4">
                <h3 className="font-bold text-gray-800 border-b pb-2">Pengaturan Publikasi</h3>
                
                <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1">Penulis</label>
                    <input
                        type="text"
                        name="author"
                        value={formData.author}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:ring-1 focus:ring-blue-500 outline-none"
                        required
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1">Tanggal</label>
                    <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:ring-1 focus:ring-blue-500 outline-none"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1">Kategori</label>
                    <select 
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:ring-1 focus:ring-blue-500 outline-none"
                        required
                    >
                        <option value="">Pilih Kategori</option>
                        <option value="Berita Sekolah">Berita Sekolah</option>
                        <option value="Prestasi">Prestasi</option>
                        <option value="Artikel Umum">Artikel Umum</option>
                        <option value="Kegiatan">Kegiatan</option>
                    </select>
                </div>
            </div>

            {/* Featured Image Card */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 space-y-4">
                <h3 className="font-bold text-gray-800 border-b pb-2">Gambar Sampul</h3>
                
                <div>
                    <label className="block text-sm font-medium text-gray-600 mb-2">URL Gambar</label>
                    <div className="flex gap-2">
                        <input
                            type="text"
                            name="image"
                            value={formData.image || ''}
                            onChange={handleChange}
                            placeholder="https://..."
                            className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:ring-1 focus:ring-blue-500 outline-none"
                        />
                    </div>
                    <p className="text-xs text-gray-400 mt-1">Masukkan URL gambar langsung.</p>
                </div>

                {/* Image Preview */}
                <div className="w-full aspect-video bg-gray-100 rounded-lg border border-dashed border-gray-300 flex items-center justify-center overflow-hidden relative group">
                    {formData.image ? (
                        <img 
                            src={formData.image} 
                            alt="Preview" 
                            className="w-full h-full object-cover"
                            onError={(e) => {
                                (e.target as HTMLImageElement).src = "https://placehold.co/600x400?text=Error+Image";
                            }}
                        />
                    ) : (
                        <div className="text-center text-gray-400">
                            <ImageIcon className="mx-auto mb-2 opacity-50" />
                            <span className="text-xs">Preview gambar akan muncul di sini</span>
                        </div>
                    )}
                </div>
            </div>

            {/* Short Description */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <label className="block text-sm font-bold text-gray-700 mb-2">Deskripsi Singkat (Excerpt)</label>
                <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded px-3 py-2 text-sm h-24 focus:ring-1 focus:ring-blue-500 outline-none"
                    placeholder="Ringkasan artikel untuk ditampilkan di halaman depan..."
                    required
                />
            </div>

        </div>
      </div>
    </form>
  );
}