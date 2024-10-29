import { Search } from "lucide-react";

const SearchBar = ({ value, onChange }) => {
  return (
    <div className="relative mb-4">
      <input
        type="text"
        name="search"
        value={value}
        onChange={onChange}
        className="w-full py-2 pl-10 pr-4 text-gray-800 transition-all duration-300 ease-in-out bg-white rounded-full border border-gray-300 focus:ring-2 focus:ring-red-500 focus:outline-none"
        placeholder="Buscar..."
      />
      <span className="absolute left-3 top-2 text-gray-400">
        <Search size={20} />
      </span>
    </div>
  );
};

export default SearchBar;
