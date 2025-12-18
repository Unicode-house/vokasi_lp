import { Edit, Trash2, Plus } from "lucide-react";

export default function NewsManager() {
  // Mock Data
  const news = [
    { id: 1, title: "Prestasi Siswa di LKS Nasional", category: "Prestasi", date: "2024-12-10", status: "Published" },
    { id: 2, title: "Jadwal Ujian Semester Ganjil", category: "Akademik", date: "2024-12-05", status: "Draft" },
    { id: 3, title: "Kunjungan Industri ke Jakarta", category: "Kegiatan", date: "2024-11-28", status: "Published" },
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div>
           <h2 className="text-xl font-bold text-gray-800">Daftar Berita</h2>
           <p className="text-sm text-gray-500">Kelola berita sekolah terkini</p>
        </div>
        <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
          <Plus size={18} /> Tambah Berita
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 border-b">
            <tr>
              <th className="px-6 py-3">Judul Berita</th>
              <th className="px-6 py-3">Kategori</th>
              <th className="px-6 py-3">Tanggal</th>
              <th className="px-6 py-3">Status</th>
              <th className="px-6 py-3 text-center">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {news.map((item) => (
              <tr key={item.id} className="bg-white border-b hover:bg-gray-50">
                <td className="px-6 py-4 font-medium text-gray-900">{item.title}</td>
                <td className="px-6 py-4">
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">{item.category}</span>
                </td>
                <td className="px-6 py-4 text-gray-500">{item.date}</td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold ${item.status === 'Published' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                    {item.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-center">
                  <div className="flex justify-center gap-3">
                    <button className="text-blue-600 hover:text-blue-800"><Edit size={18} /></button>
                    <button className="text-red-600 hover:text-red-800"><Trash2 size={18} /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}