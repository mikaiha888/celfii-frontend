import { useState } from "react";
import { Search } from "lucide-react";

const SearchBar = ({ value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSearchBar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleSearchBar}
        className="text-gray-400 hover:text-black focus:outline-none">
        <Search size={24} className="mt-1" />
      </button>

      {isOpen && (
        <div className="absolute top-0 bottom-0 flex items-center right-7">
          <input
            type="text"
            name="search"
            value={value}
            onChange={onChange}
            className="w-64 py-2 pl-8 pr-4 text-white transition-all duration-300 ease-in-out bg-gray-700 rounded-full sm:w-48 md:w-72 lg:w-80 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Buscar..."
          />
        </div>
      )}
    </div>
  );
};

export default SearchBar;
