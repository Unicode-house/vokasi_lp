interface SearchBarProps {
  onChange: (value: string) => void;
}

const SearchBar = ({ onChange }: SearchBarProps) => {
  return (
    <div className="flex w-full">
      
      <input
        type="text"
        placeholder="Cari berita..."
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:border-blue-600 focus:ring-1 focus:ringblue-600 outline-none"
      />
    </div>
  );
};

export default SearchBar;
