/* eslint-disable @typescript-eslint/no-explicit-any */

import SidebarRecent from "@/components/SidebarRecent";
import Breadcrumb from "@/components/Breadcrumb";

const API_KEY = import.meta.env.VITE_API_NEWS_IO_KEY;

const mapEducationCategory = (title = "", description = "") => {
  const text = `${title} ${description}`.toLowerCase();

  if (/lomba|kompetisi|festival/.test(text)) return "Lomba";
  if (/ekskul|ekstrakurikuler|pramuka/.test(text)) return "Ekstrakurikuler";
  if (/pengumuman|info penting/.test(text)) return "Pengumuman";
  if (/prestasi|juara|penghargaan/.test(text)) return "Prestasi";
  if (/sekolah|guru|siswa|kampus|pendidikan/.test(text))
    return "Kegiatan Sekolah";

  return "Artikel Umum";
};

export default async function BlogDetailPage({ params }: any) {
  const id = params.id;

  // Query berita edukasi
  const baseQuery =
    "pendidikan OR sekolah OR siswa OR guru OR universitas OR kampus OR pelajar";

  const url = new URL("https://newsdata.io/api/1/news");
  url.searchParams.set("apikey", API_KEY || "");
  url.searchParams.set("q", baseQuery);
  url.searchParams.set("country", "id");
  url.searchParams.set("language", "id");
  url.searchParams.set("category", "education");

  const res = await fetch(url.toString(), { cache: "no-store" });
  const data = await res.json();

  const posts =
    (data.results || []).map((p: any) => ({
      ...p,
      id: p.article_id,
      title: p.title,
      image: p.image_url,
      author: p.source_id,
      category: mapEducationCategory(p.title, p.description),
    })) || [];

  const post = posts.find((p: any) => p.id === id);
  const recentPosts = posts
    .filter((p: any) => p.id !== id)
    .slice(0, 3)
    .map((p: any) => ({
      id: p.id,
      title: p.title,
      image: p.image,
    }));

  if (!post) {
    return (
      <main className="p-10 text-center text-gray-600">
        Artikel tidak ditemukan.
      </main>
    );
  }

  return (
    <main className="w-full px-6 lg:px-50 pt-20 pb-16 flex gap-10 bg-[#F7F7F7] min-h-screen">
      {/* LEFT */}
      <div className="w-full lg:w-[70%] flex flex-col gap-6">
        <Breadcrumb items={["Beranda", "Berita", post.title]} />

        <h1 className="text-3xl md:text-4xl font-bold">{post.title}</h1>

        <p className="text-gray-600">
          Sumber: <span className="text-blue-600">{post.author}</span> |{" "}
          Kategori: <span className="text-blue-600">{post.category}</span>
        </p>

        <div className="rounded-xl overflow-hidden shadow bg-gray-200 aspect-video">
          <img
            src={post.image || "/placeholder.jpg"}
            alt={post.title}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Isi */}
        <article className="prose max-w-none text-gray-700">
          {post.description && <p>{post.description}</p>}
          {post.content && <p>{post.content}</p>}
        </article>
      </div>

      {/* RIGHT */}
      <aside className="hidden lg:flex w-[34%] bg-white p-4 rounded-xl shadow flex-col gap-6">
        <SidebarRecent items={recentPosts} />
      </aside>
    </main>
  );
}
