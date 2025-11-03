// /* eslint-disable @typescript-eslint/no-unused-vars */
import React, {
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
  type JSX,
} from "react";
// import { motion } from "framer-motion";
import DynamicTextBox from "./dynamicTextBox";

type Side = "left" | "right";
const RED_SIDE_BY_ROW: Side[] = ["left", "right", "left", "right"];
const ROWS = RED_SIDE_BY_ROW.length;
const BLUE_IMAGES = [
  "/assets/Meeting.png",
  "/assets/Teaching.png",
  "/assets/Meeting.png",
  "/assets/Teaching.png",
];
// const GRID_WIDTH = 1100;

const TITLES = ["Tentang Kami", "Visi", "Misi", "Tujuan"];
const BODIES = [
  // Tentang Kami
  "Kami adalah sekelompok orang yang percaya bahwa belajar dan bertumbuh adalah perjalanan bersama. Kami bekerja dengan hati, menghargai perbedaan, dan berusaha menciptakan ruang yang nyaman, ramah, dan terasa dekat. Di sini, setiap ide didengar, setiap orang dihargai, dan setiap langkah kecil dirayakan. Kami ingin hadir sebagai teman yang siap menyimak, membantu, dan menemani.",
  
  // Visi
  "Menjadi tempat yang membangkitkan harapan serta keberanian untuk mencoba hal baru. Kami membayangkan lingkungan yang aman dan inklusif, di mana siapa pun merasa pantas untuk belajar, berkembang, dan berkontribusi. Kami ingin menjadi jembatan yang menghubungkan keinginan baik dengan tindakan sederhana yang berdampak—pelan tapi pasti, manusiawi, dan berkelanjutan.",
  
  // Misi
  "Mendengarkan lebih dulu sebelum menawarkan jawaban. Menyederhanakan hal yang rumit agar mudah dipahami. Menghadirkan panduan yang jernih, praktik yang realistis, serta dukungan yang konsisten. Kami berupaya menjaga kualitas—rapi, teliti, dan dapat diandalkan—seraya tetap hangat dan rendah hati dalam setiap interaksi.",
  
  // Tujuan
  "Membantu lebih banyak orang merasa mampu, diterima, dan diberdayakan. Kami berharap setiap pertemuan meninggalkan kesan baik: lebih tenang, lebih paham, dan lebih siap melangkah. Dengan langkah yang tertata dan niat yang tulus, kami ingin memberi manfaat yang nyata—bukan sekadar hasil, tetapi juga rasa: rasa aman, dihargai, dan punya arah.",
];

export default function TwoColFourRowScrollPublic(): JSX.Element {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const placeholderRefs = useMemo<React.RefObject<HTMLDivElement | null>[]>(
    () => Array.from({ length: ROWS }, () => React.createRef<HTMLDivElement>()),
    []
  );

  const [activeRow, setActiveRow] = useState(0);
  const [redBoxPos, setRedBoxPos] = useState({ x: 0, y: 0 });

  const offsetIn = (
    el: HTMLDivElement | null,
    parent: HTMLDivElement | null
  ) => {
    if (!el || !parent) return { x: 0, y: 0 };
    const a = el.getBoundingClientRect();
    const b = parent.getBoundingClientRect();
    return { x: a.left - b.left, y: a.top - b.top };
  };

  const recalc = () => {
    const el = placeholderRefs[activeRow]?.current;
    setRedBoxPos(offsetIn(el, containerRef.current));
  };

  useLayoutEffect(() => {
    recalc();
    const onResize = () => recalc();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeRow]);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const idx = placeholderRefs.findIndex((r) => r.current === e.target);
          if (idx !== -1) setActiveRow(idx);
        });
      },
      { root: null, rootMargin: "-50% 0px -50% 0px", threshold: 0 }
    );
    placeholderRefs.forEach((r) => r.current && io.observe(r.current));
    return () => {
      placeholderRefs.forEach((r) => r.current && io.unobserve(r.current));
      io.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useLayoutEffect(() => {
    const t = setTimeout(recalc, 0);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="min-h-screen w-full flex justify-center py-24 bg-[#fdfaf6]">
      <div
        ref={containerRef}
        className="relative w-full max-w-[1600px] grid grid-cols-2 gap-x-24 gap-y-40 px-16"
      >
        {Array.from({ length: ROWS }).map((_, row) => {
          const redSide = RED_SIDE_BY_ROW[row];
          const isLeftRed = redSide === "left";
          const blueImage = BLUE_IMAGES[row];
          return (
            <div key={row} className="contents">
              {/* KIRI */}
              <div
                ref={isLeftRed ? placeholderRefs[row] : undefined}
                className={` overflow-hidden ${
                  isLeftRed ? "bg-transparent" : "bg-transparent"
                } flex items-center justify-center`}
              >
                {!isLeftRed && (
                  <img
                    src={blueImage}
                    alt={`Blue Box ${row + 1}`}
                    className="h-full w-full object-contain rounded-2xl shadow-lg"
                    loading="lazy"
                  />
                )}
              </div>
              {/* KANAN */}
              <div
                ref={!isLeftRed ? placeholderRefs[row] : undefined}
                className={`rounded-2xl overflow-hidden ${
                  !isLeftRed ? "bg-transparent" : "bg-transparent"
                } flex items-center justify-center`}
              >
                {isLeftRed && (
                  <img
                    src={blueImage}
                    alt={`Blue Box ${row + 1}`}
                    className="h-full w-full object-contain rounded-2xl shadow-lg"
                    loading="lazy"
                  />
                )}
              </div>
            </div>
          );
        })}
        <DynamicTextBox
          x={redBoxPos.x}
          y={redBoxPos.y}
          title={TITLES[activeRow]}
          body={BODIES[activeRow]}
        />
      </div>
    </div>
  );
}
