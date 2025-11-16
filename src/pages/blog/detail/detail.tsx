/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; 

import Breadcrumb from "@/components/Breadcrumb";
import SidebarRecent from "@/components/SidebarRecent";

// =====================
// BLOG DETAIL PAGE (Versi Vite + React Router)
// =====================

// 2. Ini adalah komponen React biasa, BUKAN 'async'
export default function BlogDetailPage() {
  // 3. Ambil 'id' dari URL menggunakan 'useParams'
  const { id } = useParams(); 
  console.log(id)

  // 4. Buat state untuk post, recent posts, dan loading
  const [post, setPost] = useState<any>(null);
  const [recentPosts, setRecentPosts] = useState<[]>([]);
  const [loading, setLoading] = useState(true);

  // 5. Gunakan useEffect untuk fetch data saat komponen dimuat
  useEffect(() => {
    // Hanya fetch jika 'id' ada
    if (!id) return;

    // Fungsi untuk mengambil detail post
    const fetchPostDetails = async () => {
      try {
        const res = await fetch(`https://dummyjson.com/products/${id}`);
        if (!res.ok) {
          throw new Error("Post not found");
        }
        const data = await res.json();
        setPost(data);
      } catch (error) {
        console.error("Gagal fetch detail post:", error);
        setPost(null); // Set post jadi null jika error
      }
    };

    // Fungsi untuk mengambil recent posts
    const fetchRecentPosts = async () => {
       try {
        const res = await fetch("https://dummyjson.com/products?limit=3&skip=5");
        const data = await res.json();
        // Map data agar sesuai dengan SidebarRecent
        const mappedPosts = data.products.map((p: any) => ({
           id: p.id,
           title: p.title,
           image: p.thumbnail,
        }));
        setRecentPosts(mappedPosts);
      } catch (error) {
         console.error("Gagal fetch recent posts:", error);
      }
    };

    // Panggil kedua fungsi
    const loadData = async () => {
      setLoading(true);
      await Promise.all([
        fetchPostDetails(),
        fetchRecentPosts()
      ]);
      setLoading(false);
    };

    loadData();

  }, [id]); // 6. 'id' sebagai dependency array

  // =====================
  // RENDER LOGIC
  // =====================

  if (loading) {
    return <main className="w-full px-6 lg:px-80 pt-40 pb-16 text-center">Memuat artikel...</main>;
  }

  if (!post) {
    return <main className="w-full px-6 lg:px-80 pt-40 pb-16 text-center">Artikel tidak ditemukan.</main>;
  }

 return (
  <main className="w-full px-6 lg:px-30 pt-20 pb-16 flex gap-10 bg-white">
   {/* LEFT CONTENT */}
   <div className="w-full lg:w-[70%] flex flex-col gap-6">
    <Breadcrumb items={["Beranda", "Berita", post.title]} />

    <h1 className="text-4xl font-bold text-gray-800">{post.title}</h1>
    <p className="text-gray-500">
     Kategori: <span className="font-medium text-blue-600">{post.category}</span>
     | Brand: <span className="font-medium text-blue-600">{post.brand}</span>
    </p>

    <div className="w-full h-full relative rounded-lg overflow-hidden shadow-lg">
     <img
      src={post.images[0] || post.thumbnail} 
      alt={post.title}
      className="object-cover object-center"
     />
    </div>

    <article className="prose prose-lg max-w-none text-gray-700 leading-relaxed mt-4">
     <p className="text-xl leading-relaxed">
      {post.description}
     </p>
     <p>Stok: {post.stock} | Rating: {post.rating} / 5</p>
    </article>
   </div>

   {/* RIGHT SIDEBAR */}
   <aside className="w-[30%] hidden lg:flex flex-col gap-10">
    {/* <SidebarKategori items={...} /> */}
    <SidebarRecent items={recentPosts} />
   </aside>
  </main>
 );
}