import { Mail } from "lucide-react";

export default function InboxManager() {
  const messages = [
    { id: 1, name: "Budi Santoso", email: "budi@gmail.com", subject: "Info PPDB", preview: "Selamat siang, saya ingin bertanya mengenai jadwal pendaftaran...", time: "Baru saja", unread: true },
    { id: 2, name: "Siti Aminah", email: "siti@yahoo.com", subject: "Kerjasama Magang", preview: "Kami dari PT Teknologi Maju ingin mengajukan penawaran...", time: "2 hari lalu", unread: false },
  ];

  return (
    <div className="flex h-[calc(100vh-200px)] bg-white border rounded-xl overflow-hidden shadow-sm">
      {/* Sidebar List Pesan */}
      <div className="w-1/3 border-r border-gray-100 overflow-y-auto">
        <div className="p-4 border-b border-gray-100 bg-gray-50">
          <h3 className="font-bold text-gray-700">Kotak Masuk</h3>
        </div>
        {messages.map((msg) => (
          <div key={msg.id} className={`p-4 border-b cursor-pointer hover:bg-blue-50 transition-colors ${msg.unread ? 'bg-blue-50/50' : ''}`}>
            <div className="flex justify-between items-start mb-1">
              <h4 className={`text-sm ${msg.unread ? 'font-bold text-black' : 'font-medium text-gray-600'}`}>{msg.name}</h4>
              <span className="text-xs text-gray-400">{msg.time}</span>
            </div>
            <p className="text-xs font-semibold text-gray-800 mb-1">{msg.subject}</p>
            <p className="text-xs text-gray-500 truncate">{msg.preview}</p>
          </div>
        ))}
      </div>

      {/* Detail Pesan View */}
      <div className="w-2/3 p-8 flex flex-col justify-center items-center text-center text-gray-400">
        <Mail size={48} className="mb-4 text-gray-300" />
        <p>Pilih pesan di samping untuk membaca detailnya</p>
      </div>
    </div>
  );
}