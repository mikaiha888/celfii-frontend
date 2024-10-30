import { useState } from "react";
import { X } from "lucide-react";

const Sort = ({ onSortChange }) => {
  const [selectedSort, setSelectedSort] = useState("");
  const sortOptions = [
    { value: "most popular", label: "Más popular" },
    { value: "highest price", label: "Mayor precio" },
    { value: "lowest price", label: "Menor precio" },
    { value: "newest", label: "Más reciente" },
  ];

  const handleSortClick = (sortValue) => {
    if (selectedSort === sortValue) {
      setSelectedSort("");
      onSortChange("");
    } else {
      setSelectedSort(sortValue);
      onSortChange(sortValue);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      {sortOptions.map((option) => (
        <div key={option.value} className="relative">
          <button
            onClick={() => handleSortClick(option.value)}
            className={`p-2 rounded-md text-left transition-colors duration-200 ${
              selectedSort === option.value
                ? "bg-red-500 text-white"
                : "bg-white text-gray-700 hover:bg-gray-200"
            } w-full flex justify-between items-center`}
          >
            <span>{option.label}</span>
            {selectedSort === option.value && (
              <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white">
                <X size={20} aria-label="Remove sort option" />
              </span>
            )}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Sort;
