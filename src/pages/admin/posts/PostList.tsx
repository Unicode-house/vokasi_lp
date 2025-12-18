import { useState } from "react";
import { Link } from "react-router-dom";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { blogService, type BlogPost } from "@/services/blogService";
import { Edit, Trash2, Plus, Search, ImageOff } from "lucide-react";

export default function PostList() {
  const queryClient = useQueryClient();
  const [searchTerm, setSearchTerm] = useState("");

  // Fetch data
  const { data: posts, isLoading, isError } = useQuery({
    queryKey: ['posts'],
    queryFn: blogService.getAll
  });

  // Delete mutation
  const deleteMutation = useMutation({
    mutationFn: blogService.delete,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['posts'] });
      // Gunakan toast notification library jika ada, untuk MVP alert cukup
      alert("Artikel berhasil dihapus");
    },
    onError: () => {
        alert("Gagal menghapus artikel");
    }
  });

  const handleDelete = (id: string) => {
    if (confirm("Apakah Anda yakin ingin menghapus artikel ini? Tindakan ini tidak dapat dibatalkan.")) {
      deleteMutation.mutate(id);
    }
  };

  // Filter Logic untuk pencarian client-side (MVP)
  const filteredPosts = posts?.filter((post: BlogPost) => 
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (isLoading) return <div className="p-8 text-center">Memuat data artikel...</div>;
  if (isError) return <div className="p-8 text-center text-red-600">Gagal mengambil data. Pastikan backend (port 5002) berjalan.</div>;

  return (
    <div>
      {/* Header & Actions */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <div>
            <h1 className="text-2xl font-bold text-gray-800">Manajemen Blog</h1>
            <p className="text-sm text-gray-500">Kelola artikel dan publikasi sekolah</p>
        </div>
        
        <div className="flex gap-2 w-full sm:w-auto">
            <div className="relative flex-1 sm:w-64">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input 
                    type="text" 
                    placeholder="Cari judul atau penulis..." 
                    className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
            <Link to="/admin/posts/create" className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                <Plus size={18} /> <span className="hidden sm:inline">Tambah</span>
            </Link>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white border rounded-lg overflow-hidden shadow-sm">
        <table className="w-full text-sm text-left">
          <thead className="bg-gray-50 border-b text-gray-600 font-medium">
            <tr>
              <th className="px-6 py-4 w-20">Cover</th>
              <th className="px-6 py-4">Judul Artikel</th>
              <th className="px-6 py-4">Kategori</th>
              <th className="px-6 py-4">Penulis</th>
              <th className="px-6 py-4">Tanggal</th>
              <th className="px-6 py-4 text-center">Aksi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {filteredPosts?.length === 0 ? (
                <tr>
                    <td colSpan={6} className="px-6 py-8 text-center text-gray-500">
                        Tidak ada artikel yang ditemukan.
                    </td>
                </tr>
            ) : (
                filteredPosts?.map((post: BlogPost) => (
                    <tr key={post.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-3">
                        <div className="w-12 h-12 bg-gray-100 rounded overflow-hidden flex items-center justify-center border">
                            {post.image ? (
                                <img src={post.image} alt="" className="w-full h-full object-cover" />
                            ) : (
                                <ImageOff size={16} className="text-gray-400" />
                            )}
                        </div>
                    </td>
                    <td className="px-6 py-3 font-medium text-gray-900 max-w-xs truncate" title={post.title}>
                        {post.title}
                    </td>
                    <td className="px-6 py-3">
                        <span className="bg-blue-50 text-blue-700 px-2 py-1 rounded text-xs border border-blue-100">
                            {post.category}
                        </span>
                    </td>
                    <td className="px-6 py-3 text-gray-600">{post.author}</td>
                    <td className="px-6 py-3 text-gray-500 text-xs whitespace-nowrap">{post.date}</td>
                    <td className="px-6 py-3 text-center">
                        <div className="flex items-center justify-center gap-2">
                        <Link 
                            to={`/admin/posts/edit/${post.id}`} 
                            className="p-2 text-blue-600 hover:bg-blue-50 rounded transition-colors"
                            title="Edit"
                        >
                            <Edit size={18} />
                        </Link>
                        <button 
                            onClick={() => handleDelete(post.id!)} 
                            className="p-2 text-red-600 hover:bg-red-50 rounded transition-colors"
                            title="Hapus"
                        >
                            <Trash2 size={18} />
                        </button>
                        </div>
                    </td>
                    </tr>
                ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}