import { File, Download, Trash2, Upload } from "lucide-react";

export default function DownloadManager() {
  const files = [
    { id: 1, name: "Kalender Akademik 2024/2025.pdf", size: "2.4 MB", date: "10 Des 2024" },
    { id: 2, name: "Formulir Pendaftaran Ekskul.docx", size: "500 KB", date: "15 Nov 2024" },
  ];

  return (
    <div>
        <div className="flex justify-between items-center mb-6">
        <div>
           <h2 className="text-xl font-bold text-gray-800">Dokumen Unduhan</h2>
           <p className="text-sm text-gray-500">Kelola file publik untuk diunduh pengunjung</p>
        </div>
        <button className="flex items-center gap-2 bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition-colors">
          <Upload size={18} /> Upload File
        </button>
      </div>

      <div className="bg-white rounded-lg border border-gray-200">
        {files.map((file) => (
          <div key={file.id} className="flex items-center justify-between p-4 border-b last:border-0 hover:bg-gray-50">
            <div className="flex items-center gap-4">
              <div className="bg-red-100 p-3 rounded-lg text-red-600">
                <File size={24} />
              </div>
              <div>
                <h4 className="font-medium text-gray-800">{file.name}</h4>
                <p className="text-xs text-gray-500">{file.size} • Diupload {file.date}</p>
              </div>
            </div>
            <div className="flex gap-2">
               <button className="p-2 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-all" title="Download">
                 <Download size={18} />
               </button>
               <button className="p-2 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-full transition-all" title="Hapus">
                 <Trash2 size={18} />
               </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}