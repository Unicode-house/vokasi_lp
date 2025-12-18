import { useState } from "react";
import { User, Lock, Globe, Save } from "lucide-react";

export default function Settings() {
  const [activeTab, setActiveTab] = useState("profile");

  return (
    <div>
      {/* Tabs Navigation */}
      <div className="flex border-b border-gray-200 mb-6">
        <button
          onClick={() => setActiveTab("profile")}
          className={`flex items-center gap-2 px-6 py-3 font-medium text-sm transition-colors border-b-2 ${
            activeTab === "profile"
              ? "border-blue-600 text-blue-600"
              : "border-transparent text-gray-500 hover:text-gray-700"
          }`}
        >
          <User size={18} /> Profil Akun
        </button>
        <button
          onClick={() => setActiveTab("security")}
          className={`flex items-center gap-2 px-6 py-3 font-medium text-sm transition-colors border-b-2 ${
            activeTab === "security"
              ? "border-blue-600 text-blue-600"
              : "border-transparent text-gray-500 hover:text-gray-700"
          }`}
        >
          <Lock size={18} /> Keamanan
        </button>
        <button
          onClick={() => setActiveTab("website")}
          className={`flex items-center gap-2 px-6 py-3 font-medium text-sm transition-colors border-b-2 ${
            activeTab === "website"
              ? "border-blue-600 text-blue-600"
              : "border-transparent text-gray-500 hover:text-gray-700"
          }`}
        >
          <Globe size={18} /> Konfigurasi Website
        </button>
      </div>

      {/* Tab Content */}
      <div className="max-w-4xl">
        
        {/* --- Tab Profil --- */}
        {activeTab === "profile" && (
          <div className="space-y-6 animate-fade-in">
            <div className="flex items-center gap-6 mb-8">
              <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center text-4xl text-gray-400 font-bold border-4 border-white shadow">
                A
              </div>
              <div>
                <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
                  Ganti Foto
                </button>
                <p className="text-xs text-gray-500 mt-2">JPG atau PNG, maks 2MB.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nama Lengkap</label>
                <input type="text" defaultValue="Administrator" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input type="email" defaultValue="admin@delta.sch.id" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Bio Singkat</label>
                <textarea rows={3} className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"></textarea>
              </div>
            </div>
            <div className="flex justify-end pt-4">
               <button className="flex items-center gap-2 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  <Save size={18} /> Simpan Profil
               </button>
            </div>
          </div>
        )}

        {/* --- Tab Keamanan --- */}
        {activeTab === "security" && (
          <div className="space-y-6 max-w-lg animate-fade-in">
             <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Password Lama</label>
                <input type="password" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none" />
             </div>
             <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Password Baru</label>
                <input type="password" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none" />
             </div>
             <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Konfirmasi Password Baru</label>
                <input type="password" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none" />
             </div>
             <div className="pt-4">
               <button className="flex items-center gap-2 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  <Save size={18} /> Update Password
               </button>
            </div>
          </div>
        )}

        {/* --- Tab Website --- */}
        {activeTab === "website" && (
           <div className="space-y-6 animate-fade-in">
              <div className="p-4 bg-yellow-50 text-yellow-800 rounded-lg border border-yellow-200 text-sm mb-6">
                Pengaturan ini akan mempengaruhi tampilan publik website sekolah.
              </div>

              <div className="grid grid-cols-1 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Judul Website (Title)</label>
                  <input type="text" defaultValue="SMK Delta Vokasi" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Deskripsi Meta (SEO)</label>
                  <textarea rows={2} defaultValue="Official website SMK Delta Vokasi..." className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"></textarea>
                </div>
                <div>
                   <label className="block text-sm font-medium text-gray-700 mb-1">Alamat Sekolah</label>
                   <input type="text" defaultValue="Jl. Pendidikan No. 123" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email Kontak</label>
                    <input type="email" defaultValue="info@delta.sch.id" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Nomor Telepon</label>
                    <input type="text" defaultValue="(021) 1234-5678" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none" />
                  </div>
                </div>
              </div>
              <div className="flex justify-end pt-4">
               <button className="flex items-center gap-2 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  <Save size={18} /> Simpan Konfigurasi
               </button>
            </div>
           </div>
        )}

      </div>
    </div>
  );
}