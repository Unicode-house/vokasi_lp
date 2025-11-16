"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
// Hapus import data.json, kita akan fetch
// import recentPosts from "@/pages/blog/data.json";

import Breadcrumb from "@/components/Breadcrumb";
import SearchBar from "@/components/SearchBar";
import Pagination from "@/components/Pagination";
import PostList from "@/components/PostList";
import SidebarKategori from "@/components/SidebarKategori";
import SidebarRecent from "@/components/SidebarRecent";

// Kita bisa ambil kategori dari API nanti, tapi untuk sekarang biarkan
const categories = [
  "Kegiatan Sekolah",
  "Ekstrakurikuler",
  "Lomba",
  "Prestasi",
  "Pengumuman",
  "Artikel Umum",
];

// =====================
// BLOG INDEX PAGE
// =====================

export default function BlogPage() {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [allPosts, setAllPosts] = useState([]); // State untuk semua post dari API
  const [loading, setLoading] = useState(true);

  const itemsPerPage = 6; // 1. Fetch data dari API saat komponen di-mount

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        // GANTI URL FETCH KE DUMMYJSON
        const res = await fetch(
          "https://dummyjson.com/products?limit=20" // Ambil 20 produk
        );
        const data = await res.json(); // Sesuaikan mapping data dari DummyJSON

        const postsWithExtras = data.products.map((post: any) => ({
          ...post,
          id: post.id,
          title: post.title,
          image: post.thumbnail, // Pakai thumbnail untuk gambar list
          author: post.brand, // Pakai 'brand' sebagai 'author'
          category: post.category, // Pakai kategori dari API
        }));

        setAllPosts(postsWithExtras);
      } catch (error) {
        console.error("Gagal fetch posts:", error);
      }
      setLoading(false);
    };

    fetchPosts();
  }, []); // Dijalankan sekali saat mount // 2. Logika filter dan pagination (TIDAK PERLU DIUBAH)

  const filteredPosts = allPosts.filter((post) =>
    (post.title || "").toLowerCase().includes(search.toLowerCase())
  );

  const start = (page - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const displayedPosts = filteredPosts.slice(start, end);

  return (
    <main className="w-full px-6 lg:px-30 pt-20 pb-16 flex gap-10 bg-white">
      {/* LEFT CONTENT */}{" "}
      <div className="w-full lg:w-[70%] flex flex-col gap-10">
        <Breadcrumb items={["Beranda", "Berita"]} />{" "}
        <h1 className="text-3xl font-bold">Semua Berita</h1>{" "}
        {loading ? (
          <p>Loading artikel...</p>
        ) : (
          <PostList posts={displayedPosts} />
        )}{" "}
        <Pagination
          currentPage={page}
          totalItems={filteredPosts.length}
          itemsPerPage={itemsPerPage}
          onPageChange={setPage}
        />{" "}
      </div>
      {/* RIGHT SIDEBAR */}{" "}
      <aside className="w-[30%] hidden lg:flex flex-col gap-10">
        <SearchBar onChange={setSearch} />
        <SidebarKategori items={categories} />
        {/* Kita pakai data 'allPosts' untuk recent posts */}
        <SidebarRecent items={allPosts.slice(0, 3)} />{" "}
      </aside>
      {" "}
    </main>
  );
}
