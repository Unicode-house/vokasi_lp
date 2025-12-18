import { blogService, type BlogPost } from "@/services/blogService";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Link } from "react-router-dom";

export default function PostList() {
  const queryClient = useQueryClient();

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
      alert("Artikel berhasil dihapus");
    },
    onError: () => {
        alert("Gagal menghapus artikel");
    }
  });

  const handleDelete = (id: string) => {
    if (confirm("Apakah Anda yakin ingin menghapus artikel ini?")) {
      deleteMutation.mutate(id);
    }
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error mengambil data. Pastikan backend berjalan.</div>;

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Daftar Artikel</h1>
        <Link to="/admin/posts/create" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          + Tambah Artikel
        </Link>
      </div>

      <table className="w-full border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-50">
            <th className="border p-2 text-left">Judul</th>
            <th className="border p-2 text-left">Penulis</th>
            <th className="border p-2 text-left">Kategori</th>
            <th className="border p-2 text-center">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {posts?.map((post: BlogPost) => (
            <tr key={post.id} className="hover:bg-gray-50">
              <td className="border p-2">{post.title}</td>
              <td className="border p-2">{post.author}</td>
              <td className="border p-2">{post.category}</td>
              <td className="border p-2 text-center space-x-2">
                <Link 
                  to={`/admin/posts/edit/${post.id}`} 
                  className="text-blue-600 hover:underline"
                >
                  Edit
                </Link>
                <button 
                  onClick={() => handleDelete(post.id!)} 
                  className="text-red-600 hover:underline"
                >
                  Hapus
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}