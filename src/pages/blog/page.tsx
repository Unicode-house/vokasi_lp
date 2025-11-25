"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */

import { useState, useEffect } from "react";

import { localPosts } from "./localpost";
import Breadcrumb from "@/components/Breadcrumb";
import SearchBar from "@/components/SearchBar";
import Pagination from "@/components/Pagination";
import PostList from "@/components/PostList";
import SidebarKategori from "@/components/SidebarKategori";
import SidebarRecent from "@/components/SidebarRecent";

// API key NewsData.io (sesuaikan dengan env milikmu)
const API_KEY = import.meta.env.VITE_API_NEWS_IO_KEY as string;

// Kategori statis
const categories = [
  "Kegiatan Sekolah",
  "Ekstrakurikuler",
  "Lomba",
  "Prestasi",
  "Pengumuman",
  "Artikel Umum",
];

// Helper untuk memetakan berita edukasi ke kategori sidebar
const mapEducationCategory = (title?: string, description?: string): string => {
  const text = `${title || ""} ${description || ""}`.toLowerCase();

  if (/lomba|kompetisi|olimpiade|turnamen|festival/.test(text)) {
    return "Lomba";
  }
  if (/ekstrakurikuler|ekskul|pramuka|paskibra|osis|club|klub/.test(text)) {
    return "Ekstrakurikuler";
  }
  if (/pengumuman|diberitahukan|pemberitahuan|info penting/.test(text)) {
    return "Pengumuman";
  }
  if (/prestasi|juara|pemenang|penghargaan|award/.test(text)) {
    return "Prestasi";
  }
  if (
    /sekolah|kelas|guru|siswa|mahasiswa|kampus|universitas|kuliah|pendidikan/.test(
      text
    )
  ) {
    return "Kegiatan Sekolah";
  }

  return "Artikel Umum";
};

export default function BlogPage() {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [allPosts, setAllPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const itemsPerPage = 6;

  // Ambil data berita edukasi dari NewsData.io
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        // Base query hanya seputar EDUKASI
        const baseQuery =
          "pendidikan OR sekolah OR siswa OR guru OR universitas OR kampus OR pelajar";

        const url = new URL("https://newsdata.io/api/1/news");
        url.searchParams.set("apikey", API_KEY);
        url.searchParams.set("q", baseQuery);
        url.searchParams.set("country", "id");
        url.searchParams.set("language", "id");
        url.searchParams.set("category", "education");

        const res = await fetch(url.toString());
        const data = await res.json();

        const postsWithExtras =
          (data.results || []).map((post: any) => {
            const categoryLabel = mapEducationCategory(
              post.title,
              post.description
            );

            return {
              ...post,
              id: post.article_id,
              title: post.title,
              image: post.image_url,
              author: post.source_id,
              // brand dipakai di filter, samakan dengan source
              brand: post.source_id,
              // kategori disesuaikan ke kategori sidebar
              category: categoryLabel,
            };
          }) ?? [];

        setAllPosts([...localPosts, ...postsWithExtras]);
        sessionStorage.setItem("allPosts", JSON.stringify([...localPosts, ...postsWithExtras]));
      } catch (error) {
        console.error("Gagal fetch posts:", error);
      }
      setLoading(false);
    };

    fetchPosts();
  }, []);

  // 🔎 Search berdasarkan title, brand (source_id), dan category lokal
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
    <main className="w-full px-6 lg:px-50 pt-20 pb-16 flex gap-10 bg-[#F7F7F7] min-h-screen ">

      {/* LEFT CONTENT */}
      <div className="w-full lg:w-[70%] flex flex-col gap-10">
        <Breadcrumb items={["Beranda", "Berita"]} />
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
      <aside className="w-[34%] mt-30 p-[2%] h-[100%] rounded-2xl shadow bg-white hidden lg:flex flex-col gap-10">
        <SearchBar onChange={setSearch} />
        <SidebarKategori items={categories} />
        <SidebarRecent items={allPosts.slice(0, 3)} />
      </aside>

    </main>
  );
}
