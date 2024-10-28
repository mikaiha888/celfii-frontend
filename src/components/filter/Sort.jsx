import { useState } from "react";
import { ArrowUpDown } from "lucide-react";

const Sort = ({ onSortChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSortChange = (sortOrder) => {
    onSortChange(sortOrder);
    setIsOpen(false); // Cierra el menú después de seleccionar
  };

  return (
    <div className="relative inline-block text-left">
      <div
        className="flex items-center space-x-2 cursor-pointer bg-gray-200 hover:bg-gray-300 px-3 py-2 rounded-md shadow-sm"
        onClick={toggleDropdown}>
        <ArrowUpDown size={20} strokeWidth={2} className="text-gray-600" />
        <span className="font-semibold text-gray-700">Ordenar por</span>
      </div>

      {isOpen && (
        <ul className="absolute z-10 mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg">
          <li>
            <button
              className="block w-full px-4 py-2 text-left text-gray-600 hover:bg-gray-100 hover:text-blue-600 transition-colors"
              onClick={() => handleSortChange("most popular")}>
              Más popular
            </button>
          </li>
          <li>
            <button
              className="block w-full px-4 py-2 text-left text-gray-600 hover:bg-gray-100 hover:text-blue-600 transition-colors"
              onClick={() => handleSortChange("highest price")}>
              Mayor precio
            </button>
          </li>
          <li>
            <button
              className="block w-full px-4 py-2 text-left text-gray-600 hover:bg-gray-100 hover:text-blue-600 transition-colors"
              onClick={() => handleSortChange("lowest price")}>
              Menor precio
            </button>
          </li>
          <li>
            <button
              className="block w-full px-4 py-2 text-left text-gray-600 hover:bg-gray-100 hover:text-blue-600 transition-colors"
              onClick={() => handleSortChange("newest")}>
              Más reciente
            </button>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Sort;
