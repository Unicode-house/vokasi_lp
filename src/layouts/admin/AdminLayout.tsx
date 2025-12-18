import { Link, Outlet, useLocation } from "react-router-dom";
import { 
  LayoutDashboard, 
  FileText, 
  Newspaper, 
  Image, 
  Download, 
  MessageSquare, 
  LogOut, 
  Settings
} from "lucide-react";

export default function AdminLayout() {
  const location = useLocation();

  const menus = [
    { 
      title: "Dashboard", 
      path: "/admin", 
      icon: <LayoutDashboard size={20} /> 
    },
    { 
      title: "Manajemen Blog", 
      path: "/admin/posts", 
      icon: <FileText size={20} /> 
    },
    { 
      title: "Manajemen Berita", 
      path: "/admin/news", 
      icon: <Newspaper size={20} /> 
    },
    { 
      title: "Manajemen Galeri", 
      path: "/admin/gallery", 
      icon: <Image size={20} /> 
    },
    { 
      title: "Manajemen Unduhan", 
      path: "/admin/downloads", 
      icon: <Download size={20} /> 
    },
    { 
      title: "Pesan Masuk", 
      path: "/admin/messages", 
      icon: <MessageSquare size={20} /> 
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100 font-sans">
      {/* Sidebar */}
      <aside className="w-72 bg-slate-900 text-white min-h-screen fixed flex flex-col shadow-2xl z-50">
        
        {/* Header: Logo & Title */}
        <div className="p-6 border-b border-slate-800 flex items-center gap-3">
          <img 
            src="/assets/delta.png" 
            alt="Delta Logo" 
            className="w-10 h-10 object-contain bg-white rounded-full p-1" 
          />
          <div>
            <h1 className="text-lg font-bold tracking-wide">Delta Admin</h1>
            <p className="text-xs text-slate-400">Content Management</p>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2 px-3">
            Menu Utama
          </p>
          
          {menus.map((menu, index) => {
            // LOGIKA BARU:
            // Jika path menu adalah '/admin' (Dashboard), harus match persis (exact).
            // Jika tidak, gunakan startsWith untuk menangani sub-halaman (create/edit).
            const isActive = menu.path === '/admin' 
                ? location.pathname === '/admin'
                : location.pathname.startsWith(menu.path);

            return (
              <Link
                key={index}
                to={menu.path}
                className={`flex items-center gap-3 px-3 py-3 rounded-lg transition-all duration-200 group ${
                  isActive
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-900/50"
                    : "text-slate-300 hover:bg-slate-800 hover:text-white"
                }`}
              >
                <span className={`${isActive ? "text-white" : "text-slate-400 group-hover:text-white"}`}>
                  {menu.icon}
                </span>
                <span className="font-medium text-sm">{menu.title}</span>
              </Link>
            );
          })}

          <div className="mt-8">
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2 px-3">
              Lainnya
            </p>
            <Link
              to="/admin/settings"
              className={`flex items-center gap-3 px-3 py-3 rounded-lg transition-all duration-200 ${
                 location.pathname === '/admin/settings' 
                 ? "bg-blue-600 text-white shadow-lg shadow-blue-900/50" 
                 : "text-slate-300 hover:bg-slate-800 hover:text-white"
              }`}
            >
              <Settings size={20} className={location.pathname === '/admin/settings' ? "text-white" : "text-slate-400"} />
              <span className="font-medium text-sm">Pengaturan</span>
            </Link>
          </div>
        </nav>

        {/* Footer: Back to Web */}
        <div className="p-4 border-t border-slate-800">
          <Link
            to="/"
            className="flex items-center justify-center gap-2 w-full bg-slate-800 hover:bg-red-600 text-white py-2.5 rounded-lg transition-colors duration-300 group"
          >
            <LogOut size={18} />
            <span className="font-medium text-sm">Kembali ke Website</span>
          </Link>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="ml-72 w-full p-8 transition-all">
        {/* Header Content */}
        <header className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800">
             {location.pathname === '/admin/settings' 
                ? 'Pengaturan' 
                : menus.find(m => location.pathname.startsWith(m.path) && m.path !== '/admin')?.title || (location.pathname === '/admin' ? 'Dashboard' : 'Admin Panel')
             }
          </h2>
          <div className="flex items-center gap-4">
             <div className="text-right hidden sm:block">
                <p className="text-sm font-semibold text-gray-700">Administrator</p>
                <p className="text-xs text-gray-500">admin@delta.sch.id</p>
             </div>
             <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold">
                A
             </div>
          </div>
        </header>

        {/* Dynamic Content */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 min-h-[75vh]">
          <Outlet />
        </div>
      </main>
    </div>
  );
}