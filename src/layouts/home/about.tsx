import React, { useEffect, useRef, useState } from "react";
import "../effect/about.css"

const AboutSection: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`about-section ${visible ? "fade-in" : "fade-out"}`}
    >
      <h2 className="text-xl font-bold mb-2 text-blue-700">Tentang Pondok</h2>
      <span className="inline-block bg-red-200 text-red-700 text-xs px-3 py-1 rounded-full mb-2">Islamic School</span>
      <p className="mb-4">
        Pondok Pesantren Imam Bukhari berdiri sejak 1999 di Karanganyar, Jawa Tengah, sebagai lembaga pendidikan Islam berbasis pesantren dengan program unggulan tahfizh, bahasa Arab, dan pembinaan akhlak. Pondok ini berkomitmen membentuk generasi thalibul ilmi yang bermanhaj salaf dan menjadi pusat dakwah Islam di Indonesia.
      </p>
      <button className="border border-blue-400 text-blue-600 px-3 py-1 rounded mb-4 hover:bg-blue-50 transition">Selengkapnya...</button>
      <div className="flex gap-4">
        <div className="bg-white rounded-xl shadow p-4 flex-1 text-center">
          <div className="text-2xl mb-2">—</div>
          <div className="text-gray-600">Jumlah Pengajar</div>
        </div>
        <div className="bg-white rounded-xl shadow p-4 flex-1 text-center">
          <div className="text-2xl mb-2">—</div>
          <div className="text-gray-600">Alumni</div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;