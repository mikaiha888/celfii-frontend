import { useState } from "react";
import { Search } from "lucide-react";

const SearchBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleSearchBar = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
  };

  return (
    <div className="relative">
      <button
        onClick={toggleSearchBar}
        className="text-gray-400 hover:text-white focus:outline-none">
        <Search size={24} className="mt-1" />
      </button>

      {isOpen && (
        <form onSubmit={handleSearch} className="absolute top-0 bottom-0 right-7 flex items-center">
          <input
            type="text"
            value={searchQuery}
            onChange={handleInputChange}
            className="bg-gray-700 text-white rounded-full pl-8 pr-4 py-2 w-64 sm:w-48 md:w-72 lg:w-80 transition-all duration-300 ease-in-out focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Buscar..."
          />
        </form>
      )}
    </div>
  );
};

export default SearchBar;
