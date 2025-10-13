import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ✅ Drop-in component: a single sticky box whose content (title + text)
// swaps as you scroll through 4 sections: Tentang Kami, Visi, Misi, Tujuan.
// TailwindCSS required. No external CSS needed.

const sectionsData = [
  {
    id: "tentang",
    title: "Tentang Kami",
    text:
      "Pondok Pesantren Imam Bukhari berdiri sejak 1999 di Karanganyar, Jawa Tengah. Berfokus pada tahfizh, bahasa Arab, dan pembinaan akhlak, kami berkomitmen melahirkan generasi thalibul ilmi yang bermanhaj salaf dan berdampak luas bagi dakwah Islam di Indonesia.",
  },
  {
    id: "visi",
    title: "Visi",
    text:
      "Menjadi lembaga pendidikan Islam berbasis pesantren yang unggul dalam ilmu, amal, dan akhlak; melahirkan generasi Qur’ani yang kokoh aqidah dan lurus manhajnya.",
  },
  {
    id: "misi",
    title: "Misi",
    text:
      "(1) Menyelenggarakan pendidikan tahfizh dan bahasa Arab yang bertahap dan terukur. (2) Membina akhlak dan adab santri melalui teladan dan pembiasaan. (3) Memperluas kegiatan dakwah dan pengabdian masyarakat.",
  },
  {
    id: "tujuan",
    title: "Tujuan",
    text:
      "Mencetak lulusan yang berilmu syar’i, berakhlak mulia, dan mampu berkontribusi positif bagi masyarakat serta dakwah Islam.",
  },
];

function useActiveOnScroll(sectionIds: string[], rootMargin = "-40% 0px -40% 0px") {
  const [activeId, setActiveId] = useState(sectionIds[0]);
  const refs = useRef<Record<string, HTMLDivElement | null>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Ambil entry dengan intersectionRatio tertinggi dalam viewport
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) setActiveId(visible.target.id);
      },
      { root: null, threshold: [0, 0.25, 0.5, 0.75, 1], rootMargin }
    );

    sectionIds.forEach((id) => {
      const el = refs.current[id];
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sectionIds, rootMargin]);

  return { activeId, refs } as const;
}

const AboutSection: React.FC = () => {
  const ids = useMemo(() => sectionsData.map((s) => s.id), []);
  const { activeId, refs } = useActiveOnScroll(ids);
  const active = sectionsData.find((s) => s.id === activeId) ?? sectionsData[0];

  // Apakah posisi harus ditukar? (Visi & Tujuan swap, Misi kembali normal)
  const isSwapped = activeId === "visi" || activeId === "tujuan";

  return (
    <section className="relative w-full bg-gradient-to-b from-slate-50 to-white">
      <div className="mx-auto max-w-6xl px-4 py-24 md:py-32">
        {/* Grid dengan motion.div agar transisi posisi smooth */}
        <motion.div
          className={
            "grid gap-8 md:grid-cols-2 md:gap-12" +
            (isSwapped
              ? " md:[&>*:first-child]:order-2 md:[&>*:last-child]:order-1"
              : "")
          }
          layout
          transition={{ type: "spring", stiffness: 400, damping: 40 }}
        >
          {/* Left: Sticky box */}
          <motion.div
            className="md:sticky md:top-24 self-start"
            layout
            transition={{ type: "spring", stiffness: 400, damping: 40 }}
          >
            <div className="rounded-2xl border bg-white shadow-sm">
              <div className="p-6 md:p-8">
                {/* Title + content with crossfade */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                  >
                    <h3 className="text-xl font-semibold text-blue-700 md:text-2xl">
                      {active.title}
                    </h3>
                    <p className="mt-3 text-slate-700 leading-relaxed">
                      {active.text}
                    </p>
                    <button className="mt-6 inline-flex items-center rounded-xl border px-4 py-2 text-sm font-medium text-blue-600 hover:bg-blue-50">
                      Selengkapnya…
                    </button>
                  </motion.div>
                </AnimatePresence>

                {/* Dots/steps indicator */}
                <div className="mt-6 flex items-center gap-2">
                  {sectionsData.map((s) => (
                    <span
                      key={s.id}
                      className={
                        "h-2 w-2 rounded-full transition-all " +
                        (active.id === s.id
                          ? "bg-blue-600 scale-125"
                          : "bg-slate-300")
                      }
                      aria-label={s.title}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Scroller triggers */}
          <motion.div
            className="relative"
            style={{ scrollSnapType: "y mandatory" }}
            layout
            transition={{ type: "spring", stiffness: 400, damping: 40 }}
          >
            {sectionsData.map((s, idx) => (
              <div
                key={s.id}
                id={s.id}
                ref={(el) => (refs.current[s.id] = el)}
                className="mb-16 h-[75vh] rounded-2xl border bg-gradient-to-br from-slate-100 to-slate-50 p-6 md:p-8"
                style={{ scrollSnapAlign: idx === 0 ? "start" : "center" }}
              >
                <div className="flex h-full flex-col justify-end">
                  <div className="text-sm font-medium text-slate-500">
                    0{idx + 1}
                  </div>
                  <div className="mt-1 text-lg font-semibold text-slate-800">
                    {s.title}
                  </div>
                  <p className="mt-2 max-w-xl text-slate-600">
                    Geser/scroll ke bawah untuk mengganti isi kotak di kiri.
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
