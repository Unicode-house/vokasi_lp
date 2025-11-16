const SidebarKategori = ({ items }: { items: string[] }) => {
  return (
    <div>
      <h3 className="font-semibold text-lg mb-3">Post Kategori</h3>
      <ul className="flex flex-col gap-3">
        {items.map((cat, idx) => (
          <li
            key={idx}
            className="text-blue-600 hover:text-blue-800 cursor-pointer"
          >
            {cat}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SidebarKategori;
