import React, { useState } from "react";

interface Member {
  name: string;
  image: string;
  logo: string;
  location?: string;
  categories?: string[];
  url?: string;
}

const MemberCard: React.FC<Member> = ({
  name,
  image,
  logo,
  location,
  categories = [],
  url = "#",
}) => {
  const [expanded, setExpanded] = useState(false);

  const visibleCategories = expanded ? categories : categories.slice(0, 3);

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block"
    >
      <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-visible w-[420px] max-w-full mx-auto">

        {/* IMAGE */}
        <div className="relative w-full h-52 rounded-t-2xl overflow-hidden z-0">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* LOGO */}
        <div className="absolute top-[180px] left-1/2 transform -translate-x-1/2 z-[900]">
          <div className="bg-white rounded-full shadow-xl w-24 h-24 flex items-center justify-center ring-4 ring-white">
            <img
              src={logo}
              alt={`${name} logo`}
              className="w-20 h-20 object-contain"
            />
          </div>
        </div>

        {/* CONTENT */}
        <div className="pt-20 pb-7 px-6 text-center relative z-[10] bg-white rounded-b-2xl">

          <h3 className="font-bold text-gray-900 text-xl mb-2 group-hover:text-blue-600 transition-colors">
            {name}
          </h3>

          {location && (
            <div className="text-gray-600 text-sm mb-3">
              {location}
            </div>
          )}

          {/* Categories */}
          {categories.length > 0 && (
            <>
              <div className="flex flex-wrap gap-3 justify-center mt-3 transition-all">
                {visibleCategories.map((cat, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center px-4 py-1 rounded-full text-sm font-medium bg-blue-50 text-blue-700 border border-blue-100"
                  >
                    {cat}
                  </span>
                ))}
              </div>

              {categories.length > 3 && (
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setExpanded(!expanded);
                  }}
                  className="
                    mt-4
                    px-4 py-2
                    bg-blue-100
                    text-blue-700
                    font-semibold
                    rounded-full
                    hover:bg-blue-200
                    transition-all
                    duration-200
                  "
                >
                  {expanded ? "Tutup" : "Selengkapnya"}
                </button>
              )}
            </>
          )}
        </div>
      </div>
    </a>
  );
};

export default MemberCard;
