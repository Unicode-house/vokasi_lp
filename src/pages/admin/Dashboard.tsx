import { Users, FileText, Eye, MessageCircle } from "lucide-react";

export default function Dashboard() {
  const stats = [
    { label: "Total Artikel", value: "24", icon: <FileText size={24} className="text-blue-600" />, color: "bg-blue-100" },
    { label: "Total Pengunjung", value: "1,204", icon: <Users size={24} className="text-green-600" />, color: "bg-green-100" },
    { label: "Pesan Baru", value: "5", icon: <MessageCircle size={24} className="text-purple-600" />, color: "bg-purple-100" },
    { label: "Total Views", value: "8.5k", icon: <Eye size={24} className="text-orange-600" />, color: "bg-orange-100" },
  ];

  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4 hover:shadow-md transition-shadow">
            <div className={`p-3 rounded-lg ${stat.color}`}>
              {stat.icon}
            </div>
            <div>
              <p className="text-sm text-gray-500 font-medium">{stat.label}</p>
              <h3 className="text-2xl font-bold text-gray-800">{stat.value}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Activity Section */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-bold text-gray-800 mb-4">Aktivitas Terbaru</h3>
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-center justify-between border-b border-gray-50 pb-4 last:border-0 last:pb-0">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                <p className="text-sm text-gray-600">Admin <b>Rizky</b> memposting artikel baru <i>"Kegiatan MPLS 2025"</i></p>
              </div>
              <span className="text-xs text-gray-400">2 jam yang lalu</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}