import { Search } from "lucide-react";
import { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      onSearch(searchTerm);
    }
  };

  const handleSearchClick = () => {
    onSearch(searchTerm);
  };

  return (
    <div className="relative flex items-center mt-4 mb-4">
      <input
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        className="w-full py-2 pl-10 pr-4 text-gray-800 transition-all duration-300 ease-in-out bg-white border border-gray-300 rounded-full focus:ring-2 focus:ring-red-500 focus:outline-none"
        placeholder="Buscar..."
      />
      <span className="absolute text-gray-400 left-3 top-2">
        <Search size={20} />
      </span>
      <button
        onClick={handleSearchClick}
        className="ml-2 px-4 py-2 bg-red-500 text-white font-semibold rounded-full hover:bg-red-600 transition-colors"
      >
        Buscar
      </button>
    </div>
  );
};

export default SearchBar;
