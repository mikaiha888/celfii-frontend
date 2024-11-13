import { Search } from "lucide-react";
import { useState } from "react";

const SearchBar = ({ onSearch, variant = "default" }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      onSearch(searchTerm);
    }
  };

  return (
    <>
      {variant === "card" ? (
        <div className="w-full relative flex gap-x-[10px] lg:w-fit">
          <span className="flex items-center justify-center">
            <Search />
          </span>
          <input
            type="text"
            placeholder="Buscar..."
            onKeyDown={(e) => handleKeyDown(e)}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full py-1 outline-none lg:w-[200px] focus:w-[300px] border-b-2 border-gray-100 focus:border-gray-200 placeholder:italic placeholder:text-base transition-all duration-200"
          />
        </div>
      ) : (
        <div className="w-full relative flex gap-x-[10px] lg:w-fit">
          <span className="flex items-center justify-center group">
            <Search />
          </span>
          <input
            type="text"
            placeholder="Buscar..."
            onKeyDown={(e) => handleKeyDown(e)}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full outline-none lg:w-[100px] focus:w-[180px] focus:border-b-2 focus:border-accent placeholder:italic placeholder:text-base transition-all duration-200"
          />
        </div>
      )}
    </>
  );
};

export default SearchBar;
