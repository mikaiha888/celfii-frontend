import { useState } from "react";

const PriceFilter = ({ filters, handleApply }) => {
  const [price, setprice] = useState(filters.price || { min: "", max: "" });

  const handleClear = () => {
    setprice({ min: "", max: "" });
    handleApply({ min: "", max: "" });
  };

  return (
    <div>
      <input
        type="number"
        value={price.min}
        onChange={(e) => setprice((prev) => ({ ...prev, min: e.target.value }))}
        placeholder="Precio mínimo"
        className="px-4 py-2 text-gray-700 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-red-500"
      />
      <input
        type="number"
        value={price.max}
        onChange={(e) => setprice((prev) => ({ ...prev, max: e.target.value }))}
        placeholder="Precio máximo"
        className="px-4 py-2 text-gray-700 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-red-500"
      />
      <div className="flex gap-4">
        <button
          onClick={() => handleApply(price)}
          className="flex-1 px-4 py-2 text-white transition-all bg-red-500 rounded-full shadow-md hover:bg-red-600"
        >
          Aplicar
        </button>
        <button
          onClick={handleClear}
          className="flex-1 px-4 py-2 text-gray-800 transition-all bg-gray-300 rounded-full shadow-md hover:bg-gray-400"
        >
          Limpiar
        </button>
      </div>
    </div>
  );
};

export default PriceFilter;
