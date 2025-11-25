import React from "react";

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
          <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* LOGO */}
        <div className="absolute top-[180px] left-1/2 transform -translate-x-1/2 z-[900]">
          <div className="bg-white rounded-full shadow-xl w-24 h-24 flex items-center justify-center ring-4 ring-white transition-all duration-300">
            <img
              src={logo}
              alt={`${name} logo`}
              className="w-20 h-20 object-contain select-none pointer-events-none"
            />
          </div>
        </div>

        {/* CONTENT */}
        <div className="pt-20 pb-7 px-6 text-center relative z-[10] bg-white rounded-b-2xl">

          <h3 className="font-bold text-gray-900 text-xl mb-2 group-hover:text-blue-600 transition-colors duration-200">
            {name}
          </h3>

          {location && (
            <div className="flex flex-col px-1.5 items-center justify-center gap-1 text-gray-600 text-sm mb-3">
              <span>{location}</span>
            </div>
          )}

          {categories.length > 0 && (
            <div className="flex flex-wrap gap-3 justify-center mt-3">
              {categories.map((cat, index) => (
                <span
                  key={index}
                  className="inline-flex items-center px-4 py-1 rounded-full text-sm font-medium bg-blue-50 text-blue-700 border border-blue-100"
                >
                  {cat}
                </span>
              ))}
            </div>
          )}

        </div>
      </div>
    </a>
  );
};

export default MemberCard;
