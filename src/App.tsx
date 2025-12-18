/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
  Link,
} from "react-router-dom";
import "./App.css";
import HomePage from "./pages/home";
import { useEffect, useState } from "react";
import Contact from "./pages/contact";
import Profile from "./pages/profile/page";
import BlogPage from "./pages/blog/page";
import PageNews from "./pages/berita/page";
import GalleryPage from "./pages/gallery/page";
import Unduhan from "./pages/unduhan/page";
import BlogDetailPage from "./pages/blog/detail/detail";
import Footer from "./components/footer";
import AdminLayout from "./layouts/admin/AdminLayout";
import Dashboard from "./pages/admin/Dashboard";
import NewsManager from "./pages/admin/news/NewsManager";
import GalleryManager from "./pages/admin/gallery/GalleryManager";
import DownloadManager from "./pages/admin/downloads/DownloadManager";
import InboxManager from "./pages/admin/message/InboxManager";
import Settings from "./pages/admin/Settings";
import PostForm from "./pages/admin/posts/PostForm";
import PostList from "./pages/admin/posts/PostList";

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      console.log("Scroll Y:", scrollY);
      if (scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const [activeIndex, setActiveIndex] = useState(0);
  // indicator/menuRefs removed to keep navbar simple

  const menus = [
    "Beranda",
    "Profile",
    "Blog",
    "Berita",
    "Unduhan",
    "Gallery",
    "Kontak",
  ];
  const menuPaths = [
    "/",
    "/profile",
    "/blog",
    "/berita",
    "/unduhan",
    "/gallery",
    "/contact",
  ];

  const location = useLocation();
  useEffect(() => {
    const idx = menuPaths.findIndex(
      (path) =>
        location.pathname === path ||
        (path !== "/" && location.pathname.startsWith(path))
    );
    setActiveIndex(idx === -1 ? 0 : idx);
  }, [location.pathname]);

  // close mobile menu on navigation
  const [mobileOpen, setMobileOpen] = useState(false);
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  // close mobile menu when resizing to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <>
      {/* disable navbar di route admin */}
      {location.pathname.startsWith("/admin") ? null : (
        <nav className="w-full fixed h-20 z-[999] flex justify-center items-center">
          <div
            className={`h-full transition-all flex justify-between items-center relative ${
              isScrolled
                ? "w-4/5 h-16 bg-white/50 top-4 rounded-2xl shadow-xl backdrop-blur-md"
                : "w-full bg-transparent top-0"
            } px-6 py-4`}
          >
            <div className="w-1/3 h-full flex items-center gap-2">
              <img
                src="/assets/delta.png"
                alt="Delta Logo"
                className="w-12 h-12 object-contain"
              />
              <span className="text-2xl font-bold text-gray-900">Delta</span>
            </div>

            <div className="w-2/3 flex items-center justify-end gap-6 relative">
              <div className="hidden md:flex items-center gap-8">
                {menus.map((menu, index) => (
                  <Link
                    to={menuPaths[index]}
                    key={index}
                    className={`relative z-10 px-2 py-1 font-semibold transition-colors duration-200 ${
                      activeIndex === index
                        ? "text-blue-600"
                        : "text-gray-600 hover:text-blue-600"
                    }`}
                  >
                    {menu}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </nav>
      )}

      <Routes>
        <Route path={"/"} element={<HomePage />} />
        <Route path={"/profile"} element={<Profile />} />
        <Route path={"/blog"} element={<BlogPage />} />
        <Route path={"/blog/:id"} element={<BlogDetailPage />} />

        <Route path={"/berita"} element={<PageNews />} />
        <Route path={"/unduhan"} element={<Unduhan />} />
        <Route path={"/gallery"} element={<GalleryPage />} />
        <Route path={"/contact"} element={<Contact />} />
        
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="posts" element={<PostList />} />
          <Route path="posts/create" element={<PostForm />} />
          <Route path="posts/edit/:id" element={<PostForm />} />
          <Route path="news" element={<NewsManager />} />
          <Route path="gallery" element={<GalleryManager />} />
          <Route path="downloads" element={<DownloadManager />} />
          <Route path="messages" element={<InboxManager />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </>
  );
}

// Ubah BrowserRouter jadi Router agar useLocation bisa dipakai di App
export default function WrappedApp() {
  return (
    <Router>
      <App />

      {/* disable footer di route admin */}
      {!location.pathname.startsWith("/admin") && <Footer />}
    </Router>
  );
}
