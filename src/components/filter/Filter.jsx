import { useState } from "react";

import Sort from "./Sort";
import PriceFilter from "./PriceFilter";
import CategoryFilter from "./CategoryFilter";
import AccordionFilter from "./AccordionFilter";

import { loadFromLocalStorage, saveToLocalStorage, removeFromLocalStorage } from "../../helpers";

const Filter = ({ updateFilters, filters }) => {
  const [isAccordionOpen, setIsAccordionOpen] = useState(
    loadFromLocalStorage("isAccordionOpen") || { category: false, sort: false }
  );

  const toggleAccordion = (type) => {
    setIsAccordionOpen((prev) => ({ ...prev, [type]: !isAccordionOpen[type] }));
    saveToLocalStorage("isAccordionOpen", { ...isAccordionOpen, [type]: !isAccordionOpen[type] });
  };

  const clearAllFilters = () => {
    const resetFilters = {
      price: { min: "", max: "" },
      sort: "newest",
      category: "",
      name: "",
      page: 1,
    };
    updateFilters(resetFilters);
    removeFromLocalStorage("filters");
  };

  return (
    <div className="flex flex-col items-center h-full pb-2 pr-6 mr-8 overflow-y-scroll">
      <AccordionFilter
        title="Categorías"
        expanded={isAccordionOpen.category}
        onToggle={() => toggleAccordion("category")}
        filter={filters.category}
      >
        <CategoryFilter
          filters={filters}
          handleApply={(value) => updateFilters({ category: value.toLowerCase() })}
        />
      </AccordionFilter>
      <hr />
      <AccordionFilter
        title="Precio"
        expanded={isAccordionOpen.price}
        onToggle={() => toggleAccordion("price")}
        filter={filters.price}
      >
        <PriceFilter filters={filters} handleApply={(value) => updateFilters({ price: value })} />
      </AccordionFilter>
      <hr />
      <AccordionFilter
        title="Ordenar por"
        expanded={isAccordionOpen.sort}
        onToggle={() => toggleAccordion("sort")}
      >
        <Sort filters={filters} handleApply={(value) => updateFilters({ sort: value })} />
      </AccordionFilter>
      <hr />
      <button
        onClick={clearAllFilters}
        className="w-full p-2 mt-6 font-medium text-gray-500 border-2 border-gray-400 rounded-sm"
      >
        Limpiar filtros
      </button>
    </div>
  );
};

export default Filter;
