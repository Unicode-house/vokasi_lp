import { useState } from "react";
import { Link } from "react-router-dom";
import { Edit, Trash2, Plus, Search, ImageOff } from "lucide-react";

// Definisi tipe data lokal (tanpa import dari service)
interface BlogPost {
  id: string;
  title: string;
  category: string;
  author: string;
  content: string;
  image?: string;
  description: string;
  date: string;
}

export default function PostList() {
  const [searchTerm, setSearchTerm] = useState("");

  // DUMMY DATA: Data ini menggantikan response dari backend
  const [posts, setPosts] = useState<BlogPost[]>([
    {
      id: "1",
      title: "Kegiatan MPLS Tahun Ajaran 2024/2025",
      category: "Kegiatan",
      author: "Humas Delta",
      content: "Isi konten dummy...",
      description: "Dokumentasi kegiatan masa pengenalan lingkungan sekolah.",
      date: "2024-07-15",
      image: "https://placehold.co/600x400?text=MPLS+2024"
    },
    {
      id: "2",
      title: "Prestasi Siswa di LKS Tingkat Provinsi",
      category: "Prestasi",
      author: "Kesiswaan",
      content: "Isi konten dummy...",
      description: "Siswa SMK Delta berhasil menyabet juara 2.",
      date: "2024-08-20",
      image: "" // Contoh tanpa gambar
    },
    {
      id: "3",
      title: "Penerimaan Peserta Didik Baru Gelombang 2",
      category: "Berita Sekolah",
      author: "Panitia PPDB",
      content: "Isi konten dummy...",
      description: "Informasi lengkap mengenai pendaftaran gelombang kedua.",
      date: "2024-05-10",
      image: "https://placehold.co/600x400?text=PPDB"
    }
  ]);

  // Fungsi Delete Dummy
  const handleDelete = (id: string) => {
    if (confirm("Apakah Anda yakin ingin menghapus artikel ini? (Hanya simulasi)")) {
      // Hapus dari state lokal saja
      setPosts(posts.filter(post => post.id !== id));
      alert("Artikel berhasil dihapus (Simulasi)");
    }
  };

  // Filter Logic Client-side
  const filteredPosts = posts.filter((post) => 
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      {/* Header & Actions */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <div>
            <h1 className="text-2xl font-bold text-gray-800">Manajemen Blog</h1>
            <p className="text-sm text-gray-500">Kelola artikel dan publikasi sekolah (Mode Dummy)</p>
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
            {filteredPosts.length === 0 ? (
                <tr>
                    <td colSpan={6} className="px-6 py-8 text-center text-gray-500">
                        Tidak ada artikel yang ditemukan.
                    </td>
                </tr>
            ) : (
                filteredPosts.map((post) => (
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
                            onClick={() => handleDelete(post.id)} 
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