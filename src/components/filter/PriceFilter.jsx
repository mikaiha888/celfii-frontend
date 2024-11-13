import { useState } from "react";

const PriceFilter = ({ filters, handleApply }) => {
  const [price, setprice] = useState(filters.price || { min: "", max: "" });

  const handleClear = () => {
    setprice({ min: "", max: "" });
    handleApply({ min: "", max: "" });
  };

  return (
    <div className="flex flex-col w-full gap-4 px-5">
      <input
        type="number"
        value={price.min}
        onChange={(e) => setprice((prev) => ({ ...prev, min: e.target.value }))}
        placeholder="Precio mínimo"
        className="py-2 border-b-2 border-gray-200 focus:outline-none focus:border-gray-400"
      />
      <input
        type="number"
        value={price.max}
        onChange={(e) => setprice((prev) => ({ ...prev, max: e.target.value }))}
        placeholder="Precio máximo"
        className="py-2 border-b-2 border-gray-200 focus:outline-none focus:border-gray-400"
      />
      <div className="flex flex-col gap-4 mt-4 mb-2">
        <button
          onClick={() => handleApply(price)}
          className="w-full p-2 font-medium text-gray-500 border-2 border-gray-400 rounded-sm"
        >
          Aplicar
        </button>
        <button
          onClick={handleClear}
          className="w-full p-2 font-medium text-gray-500 border-2 border-gray-400 rounded-sm"
        >
          Borrar
        </button>
      </div>
    </div>
  );
};

export default PriceFilter;
