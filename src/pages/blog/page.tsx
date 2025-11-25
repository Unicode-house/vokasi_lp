/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useState, useEffect } from "react";

const API_KEY = "MASUKKAN_API_KEY_ASLI_DI_SINI"; // ← WAJIB GANTI

export default function BlogPage() {
  const [allPosts, setAllPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      setErrorMsg("");

      try {
        const res = await fetch(
          `https://newsdata.io/api/1/news?apikey=${API_KEY}&q=sekolah&language=id`
        );

        const data = await res.json();

        // ❗ CEK APakah API ERROR
        if (!data.results) {
          setErrorMsg(data.message || "API error. Cek API KEY Anda.");
          setLoading(false);
          return;
        }

        const formatted = data.results.map((post: any, i: number) => ({
          id: i + 1,
          title: post.title,
          image: post.image_url || "https://picsum.photos/seed/noimg/800/500",
          author: post.creator?.[0] || "Admin",
          category: post.category?.[0] || "Berita Umum",
          date: post.pubDate,
          content: post.description,
        }));

        setAllPosts(formatted);
      } catch (error) {
        setErrorMsg("Gagal mengambil data dari server.");
      }

      setLoading(false);
    };

    fetchPosts();
  }, []);

  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold mb-6">Berita Sekolah</h1>

      {loading && <p>Loading...</p>}

      {errorMsg && (
        <p className="text-red-600 font-medium bg-red-100 px-4 py-3 rounded-lg">
          ❌ {errorMsg}
        </p>
      )}

      {!loading && !errorMsg && allPosts.length === 0 && (
        <p className="text-gray-600 italic">Tidak ada berita...</p>
      )}

      {!loading && allPosts.length > 0 && (
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {allPosts.map((p) => (
            <li
              key={p.id}
              className="p-4 bg-white shadow rounded-xl border border-gray-200"
            >
              <img
                src={p.image}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h2 className="font-bold text-lg">{p.title}</h2>
              <p className="text-gray-600 mt-2 text-sm">{p.content}</p>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
