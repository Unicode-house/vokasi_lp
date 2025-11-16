"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */

import { useState, useEffect } from "react";

import Breadcrumb from "@/components/Breadcrumb";
import SearchBar from "@/components/SearchBar";
import Pagination from "@/components/Pagination";
import PostList from "@/components/PostList";
import SidebarKategori from "@/components/SidebarKategori";
import SidebarRecent from "@/components/SidebarRecent";

// Kategori statis
const categories = [
  "Kegiatan Sekolah",
  "Ekstrakurikuler",
  "Lomba",
  "Prestasi",
  "Pengumuman",
  "Artikel Umum",
];

export default function BlogPage() {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [allPosts, setAllPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const itemsPerPage = 6;

  // Ambil data dari DummyJSON
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const res = await fetch("https://dummyjson.com/products?limit=20");
        const data = await res.json();

        const postsWithExtras = data.products.map((post: any) => ({
          ...post,
          id: post.id,
          title: post.title,
          image: post.thumbnail,
          author: post.brand,
          category: post.category,
        }));

        setAllPosts(postsWithExtras);
      } catch (error) {
        console.error("Gagal fetch posts:", error);
      }
      setLoading(false);
    };

    fetchPosts();
  }, []);

  // 🔎 Search berdasarkan title, brand, dan category
  const filteredPosts = allPosts.filter((post: any) => {
    const query = search.toLowerCase();

    return (
      post.title?.toLowerCase().includes(query) ||
      post.brand?.toLowerCase().includes(query) ||
      post.category?.toLowerCase().includes(query)
    );
  });

  const start = (page - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const displayedPosts = filteredPosts.slice(start, end);

  return (
    <main className="w-full px-6 lg:px-80 pt-20 pb-16 flex gap-10 bg-[#fcfaf4] min-h-screen ">

      {/* LEFT CONTENT */}
      <div className="w-full lg:w-[70%] flex flex-col gap-10">
        <Breadcrumb items={["Beranda", "Berita"]}  />
        <h1 className="text-3xl font-bold text-blue-600">Semua Berita</h1>

        {loading ? (
          <p className="text-blue-600">Loading artikel...</p>
        ) : (
          <PostList posts={displayedPosts} />
        )}

        <Pagination
          currentPage={page}
          totalItems={filteredPosts.length}
          itemsPerPage={itemsPerPage}
          onPageChange={setPage}
        />
      </div>

      {/* RIGHT SIDEBAR */}
      <aside className="w-[30%] hidden lg:flex flex-col gap-10">
        <SearchBar onChange={setSearch} />
        <SidebarKategori items={categories} />
        <SidebarRecent items={allPosts.slice(0, 3)} />
      </aside>

    </main>
  );
}
