import { useState } from "react";

import Sort from "./Sort";
import PriceFilter from "./PriceFilter";
import CategoryFilter from "./CategoryFilter";
import AccordionFilter from "./AccordionFilter";

import { loadFromLocalStorage, saveToLocalStorage } from "../../helpers";

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
    localStorage.removeItem("filters");
  };

  return (
    <div>
      <div>
        <PriceFilter
          filters={filters}
          handleApply={(value) => updateFilters({ price: value })}
        />

        <AccordionFilter
          title="Categorías"
          expanded={isAccordionOpen.category}
          onToggle={() => toggleAccordion("category")}
        >
          <CategoryFilter
            filters={filters}
            handleApply={(value) => updateFilters({ category: value })}
          />
        </AccordionFilter>

        <AccordionFilter
          title="Ordenar por"
          expanded={isAccordionOpen.sort}
          onToggle={() => toggleAccordion("sort")}
        >
          <Sort filters={filters} handleApply={(value) => updateFilters({ sort: value })} />
        </AccordionFilter>

        <button
          onClick={clearAllFilters}
          className="px-4 py-3 mt-6 text-white transition-all bg-red-500 rounded-full shadow-lg hover:bg-red-600"
        >
          Limpiar filtros
        </button>
      </div>
    </div>
  );
};

export default Filter;
