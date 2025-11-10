import React from 'react'

interface Member {
  name: string
  image: string
  logo: string
  location?: string
  category1?: string
  category2?: string
}

const MemberCard: React.FC<Member> = ({
  name,
  image,
  logo,
  location,
  category1,
  category2
}) => {
  return (
    // 🔹 Lebar maksimum besar, tinggi tetap proporsional
    <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-visible w-[420px] max-w-full mx-auto">
      
      {/* Gambar utama */}
      <div className="relative w-full h-52 rounded-t-2xl overflow-hidden z-0">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* Gradient lembut */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* LOGO di tengah batas gambar dan konten */}
      <div className="absolute top-[180px] left-1/2 transform -translate-x-1/2 z-[9999]">
        <div className="bg-white rounded-full shadow-xl w-24 h-24 flex items-center justify-center ring-4 ring-white  transition-all duration-300">
          <img
            src={logo}
            alt={`${name} logo`}
            className="w-20 h-20 object-contain select-none pointer-events-none"
          />
        </div>
      </div>

      {/* Konten bawah */}
      <div className="pt-20 pb-7 px-6 text-center relative z-[10] bg-white rounded-b-2xl">
        <h3 className="font-bold text-gray-900 text-xl mb-2 group-hover:text-blue-600 transition-colors duration-200">
          {name}
        </h3>

        {location && (
          <div className="flex items-center justify-center gap-1 text-gray-600 text-sm mb-3">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <span>{location}</span>
          </div>
        )}

        {(category1 || category2) && (
          <div className="flex flex-wrap gap-3 justify-center mt-3">
            {category1 && (
              <span className="inline-flex items-center px-4 py-1 rounded-full text-sm font-medium bg-blue-50 text-blue-700 border border-blue-100">
                {category1}
              </span>
            )}
            {category2 && (
              <span className="inline-flex items-center px-4 py-1 rounded-full text-sm font-medium bg-purple-50 text-purple-700 border border-purple-100">
                {category2}
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default MemberCard
