import { useState } from "react";

import Breadcrumb from "@/components/Breadcrumb";
import HeroPost from "@/components/HeroPost";
import SearchBar from "@/components/SearchBar";
import Pagination from "@/components/Pagination";

import PostList from "@/components/PostList";
import SidebarKategori from "@/components/SidebarKategori";
import SidebarRecent from "@/components/SidebarRecent";

// =====================
// DATA DUMMY
// =====================
const dummyHero = {
  title: "Kunjungan Industri Siswa Ke PT Nusantara Digital",
  author: "Admin Sekolah",
  date: "12 Oktober 2025",
  description:
    "Sebanyak 45 siswa SMK melakukan kunjungan industri untuk melihat langsung proses kerja di perusahaan digital ternama di Jakarta.",
  image:
    "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1200",
};

const dummyPosts = [
  {
    id: 1,
    category: "Kegiatan Sekolah",
    title:
      "Workshop Desain Grafis: Siswa Belajar Teknik Membuat Poster Profesional Menggunakan Canva & Figma",
    author: "Admin",
    image:
      "https://images.unsplash.com/photo-1581091870622-1ee0f9c8d011?q=80&w=1000",
  },
  {
    id: 2,
    category: "Lomba",
    title:
      "Tim Robotik SMK Meraih Juara Harapan di Kompetisi Nasional Robotika Tahun 2025",
    author: "Panitia",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1000",
  },
  {
    id: 3,
    category: "Ekstrakurikuler",
    title:
      "Ekskul Pecinta Alam Lakukan Pendakian Gunung Cikuray Sebagai Latihan Dasar Survival",
    author: "Pembina Ekskul",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1000",
  },
  {
    id: 4,
    category: "Pengumuman",
    title: "Libur Semester Dimulai 20 Desember 2025 – Cek Jadwalnya!",
    author: "Admin",
    image:
      "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=1000",
  },
  {
    id: 5,
    category: "Prestasi",
    title: "Siswa SMK Berhasil Meraih Juara Lomba Web Design Tingkat Provinsi",
    author: "Pembina",
    image:
      "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?q=80&w=1000",
  },
];

const categories = [
  "Kegiatan Sekolah",
  "Ekstrakurikuler",
  "Lomba",
  "Prestasi",
  "Pengumuman",
  "Artikel Umum",
];

const recentPosts = [
  {
    id: 1,
    title: "Pelatihan Jaringan Dasar Untuk Kelas X",
    image:
      "https://images.unsplash.com/photo-1581092334426-8ec1d06b2f65?q=80&w=400",
  },
  {
    id: 2,
    title: "Guru Tamu Dari Industri Berikan Materi Cybersecurity",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=400",
  },
  {
    id: 3,
    title: "Pentas Seni 2025: Ajang Kreativitas Siswa",
    image:
      "https://images.unsplash.com/photo-1515169067865-5387ec356754?q=80&w=400",
  },
];

// =====================
// BLOG PAGE
// =====================

const BlogPage = () => {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const itemsPerPage = 2;

  // search filter
  const filteredPosts = dummyPosts.filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase())
  );

  // pagination slice
  const start = (page - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const displayedPosts = filteredPosts.slice(start, end);

  return (
    <main className="w-full px-6 lg:px-80 pt-20 pb-16 flex gap-10">

      {/* LEFT CONTENT */}
      <div className="w-full lg:w-[70%] flex flex-col gap-10">

        <Breadcrumb items={["Beranda", "Berita"]} />

        <HeroPost post={dummyHero} />

        <PostList posts={displayedPosts} />

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

        <SidebarRecent items={recentPosts} />
      </aside>
    </main>
  );
};

export default BlogPage;
