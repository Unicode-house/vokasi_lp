/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { localPosts } from "../localpost";
import Breadcrumb from "@/components/Breadcrumb";
import SidebarRecent from "@/components/SidebarRecent";

// =====================
// BLOG DETAIL PAGE (Versi Vite + React Router)
// =====================

// 2. Ini adalah komponen React biasa, BUKAN 'async'
export default function BlogDetailPage() {
  // 3. Ambil 'id' dari URL menggunakan 'useParams'
  const { id } = useParams();
  console.log(id);

  // 4. Buat state untuk post, recent posts, dan loading
  const [post, setPost] = useState<any>(null);
  const [recentPosts, setRecentPosts] = useState<[]>([]);
  const [loading, setLoading] = useState(true);

  // 5. Gunakan useEffect untuk fetch data saat komponen dimuat
  useEffect(() => {
    if (!id) return;

    // 1. CARI DI LOKAL POSTS
    let found = localPosts.find((p) => p.id === id);

    // 2. Jika tidak ada, ambil dari sessionStorage (data dari BlogPage)
    if (!found) {
      const allPosts = JSON.parse(sessionStorage.getItem("allPosts") || "[]");
      found = allPosts.find((p: any) => p.id === id);
    }

    setPost(found || null);

    // ambil recent posts (3 post pertama)
    const recent = localPosts.slice(0, 3);
    setRecentPosts(recent as any);

    setLoading(false);
  }, [id]);

  // =====================
  // RENDER LOGIC
  // =====================

  if (loading) {
    return (
      <main className="w-full px-6 lg:px-80 pt-40 pb-16 text-center">
        Memuat artikel...
      </main>
    );
  }

  if (!post) {
    return (
      <main className="w-full px-6 lg:px-80 pt-40 pb-16 text-center">
        Artikel tidak ditemukan.
      </main>
    );
  }

  return (
    <main className="w-full px-6 lg:px-30 pt-20 pb-16 flex gap-10 bg-white">
      {/* LEFT CONTENT */}
      <div className="w-full lg:w-[70%] flex flex-col gap-6">
        <Breadcrumb items={["Beranda", "Berita", post.title]} />

        <h1 className="text-4xl font-bold text-gray-800">{post.title}</h1>
        <p className="text-gray-500">
          Kategori:{" "}
          <span className="font-medium text-blue-600">{post.category}</span>|
          Brand: <span className="font-medium text-blue-600">{post.brand}</span>
        </p>

        <div className="w-full h-full relative rounded-lg overflow-hidden shadow-lg">
          <img
            src={post.images || post.thumbnail}
            alt={post.title}
            className="object-cover object-center"
          />
        </div>

        <article className="prose prose-lg max-w-none text-gray-700 flex flex-col gap-8 leading-relaxed mt-4">
          <p className="text-xl leading-relaxed">{post.description}</p>
          <p>
            Stok: {post.stock} | Rating: {post.rating} / 5
          </p>
          <div
            className="prose prose-lg max-w-none text-justify"
            dangerouslySetInnerHTML={{
              __html: `
      <embed
        src="/assets/gurubadut.pdf"
        type="application/pdf"
        style="width:100%; height:100vh;"
      />
    `,
            }}
          />
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
