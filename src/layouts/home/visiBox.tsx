import React, { useEffect, useRef, useState } from "react";

const data = [
  {
    title: "Visi",
    content:
      "Membentuk generasi thalibul ilmi yang bermanhaj salaf dalam beraqidah, beribadah, berakhlak, bermu'amalah dan berdakwah.",
  },
  {
    title: "Misi",
    content:
      "Menyelenggarakan pendidikan Islam berbasis pesantren yang unggul dalam tahfizh, bahasa Arab, dan pembinaan akhlak.",
  },
  {
    title: "Tujuan",
    content:
      "Menjadi pusat dakwah Islam dan mencetak alumni yang berilmu, beramal, dan berakhlak mulia.",
  },
];

const VisiBox: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
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

  const handleToggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div
      ref={sectionRef}
      className={`bg-white rounded-2xl shadow p-0 max-w-md w-full visi-section ${
        visible ? "fade-in" : "fade-out"
      }`}
    >
      <div className="px-6 pt-5 pb-3 border-b">
        <h2 className="text-xl font-bold text-blue-600">Visi, Misi, & Tujuan</h2>
      </div>
      <div className="px-2 py-4 bg-[#f8fbfd] rounded-b-2xl">
        {data.map((item, idx) => (
          <div key={item.title} className="mb-2">
            <button
              className="flex items-center justify-between w-full px-4 py-3 text-left font-medium focus:outline-none hover:bg-blue-50 rounded transition"
              onClick={() => handleToggle(idx)}
            >
              <span>{item.title}</span>
              <svg
                className={`w-5 h-5 ml-2 transition-transform ${
                  openIndex === idx ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {openIndex === idx && (
              <div className="bg-white rounded shadow px-4 py-3 mt-2 text-sm text-gray-700 animate-fadeIn">
                {item.content}
              </div>
            )}
          </div>
        ))}
      </div>
      <style>
        {`
          .visi-section {
            opacity: 0;
            transform: translateY(40px);
            transition: opacity 0.8s ease, transform 0.8s cubic-bezier(.4,0,.2,1);
            will-change: opacity, transform;
          }
          .visi-section.fade-in {
            opacity: 1;
            transform: translateY(0);
          }
          .visi-section.fade-out {
            opacity: 0;
            transform: translateY(40px);
          }
          .animate-fadeIn {
            animation: fadeIn 0.3s;
          }
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px);}
            to { opacity: 1; transform: translateY(0);}
          }
        `}
      </style>
    </div>
  );
};

export default VisiBox;