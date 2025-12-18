import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { blogService, type BlogPost } from "@/services/blogService";

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
    date: new Date().toISOString().split('T')[0],
  });

  // Fetch data jika mode edit
  const { data: existingData } = useQuery({
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

  // Mutation untuk Save/Update
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

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">{isEditMode ? "Edit Artikel" : "Tambah Artikel Baru"}</h1>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Judul</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full border rounded p-2"
            required
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
            <div>
            <label className="block text-sm font-medium mb-1">Penulis</label>
            <input
                type="text"
                name="author"
                value={formData.author}
                onChange={handleChange}
                className="w-full border rounded p-2"
                required
            />
            </div>
            <div>
            <label className="block text-sm font-medium mb-1">Kategori</label>
            <input
                type="text"
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full border rounded p-2"
                required
            />
            </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Deskripsi Singkat</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full border rounded p-2 h-20"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Konten Lengkap</label>
          <textarea
            name="content"
            value={formData.content}
            onChange={handleChange}
            className="w-full border rounded p-2 h-64 font-mono"
            required
          />
          <p className="text-xs text-gray-500 mt-1">*Bisa menggunakan format Markdown atau HTML sederhana.</p>
        </div>

        <div className="flex justify-end gap-2 pt-4">
            <button 
                type="button" 
                onClick={() => navigate("/admin/posts")}
                className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded"
            >
                Batal
            </button>
            <button 
                type="submit" 
                disabled={mutation.isPending}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
            >
                {mutation.isPending ? "Menyimpan..." : "Simpan"}
            </button>
        </div>
      </form>
    </div>
  );
}