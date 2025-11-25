"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */

interface Props {
  items: string[];
  onSelect?: (value: string) => void;
}

export default function SidebarKategori({ items, onSelect }: Props) {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="font-semibold text-lg text-gray-800">Post Kategori</h2>

      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <button
            key={item}
            onClick={() => onSelect?.(item)}
            className="
              px-3 py-1 
              rounded-full 
              border border-blue-400 
              text-blue-600 
              hover:bg-blue-600 
              hover:text-white 
              transition-all duration-200
              text-sm
            "
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}
