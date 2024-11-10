import Selector from "./Selector";
import { useEffect, useState } from "react";
import Sort from "./Sort";
import { Accordion, AccordionSummary, AccordionDetails, Badge } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Filter = ({ updateSearchParams, searchParams }) => {
  const [refreshKey, setRefreshKey] = useState(0);

  const [selectedCategory, setSelectedCategories] = useState(searchParams.category || "");
  const [sortOrder, setSortOrder] = useState(searchParams.sort || "newest");
  const [minPrice, setMinPrice] = useState(searchParams.minPrice || "");
  const [maxPrice, setMaxPrice] = useState(searchParams.maxPrice || "");
  const [isCategoryAccordionOpen, setIsCategoryAccordionOpen] = useState(
    JSON.parse(localStorage.getItem("isCategoryAccordionOpen")) || false
  );
  const [isSortAccordionOpen, setIsSortAccordionOpen] = useState(
    JSON.parse(localStorage.getItem("isSortAccordionOpen")) || false
  );

  const [resetSortCount, setResetSortCount] = useState(0);

  useEffect(() => {
    setSelectedCategories(searchParams.category || "");
    setSortOrder(searchParams.sort || "newest");
    setMinPrice(searchParams.minPrice || "");
    setMaxPrice(searchParams.maxPrice || "");
  }, [searchParams]);

  const handleCategoryChange = (select) => {
    setSelectedCategories(select);
    localStorage.setItem("selectedCategory", select);
    updateSearchParams({
      category: select,
      sort: sortOrder,
      minPrice,
      maxPrice,
    });
  };

  const handleSortChange = (sort) => {
    setSortOrder(sort);
    localStorage.setItem("sortOrder", sort);
    updateSearchParams({
      category: selectedCategory,
      sort: sort,
      minPrice,
      maxPrice,
    });
  };

  const handlePriceChange = (setter, storageKey) => (e) => {
    const value = e.target.value;
    setter(value);
    localStorage.setItem(storageKey, value);
  };

  const applyPriceFilter = () => {
    updateSearchParams({
      category: selectedCategory,
      sort: sortOrder,
      minPrice,
      maxPrice,
    });
  };

  const clearPriceFilter = () => {
    setMinPrice("");
    setMaxPrice("");
    localStorage.removeItem("minPrice");
    localStorage.removeItem("maxPrice");
    updateSearchParams({
      category: selectedCategory,
      sort: sortOrder,
      minPrice: undefined,
      maxPrice: undefined,
    });
  };

  const clearAllFilters = () => {
    setSelectedCategories("");
    setSortOrder("newest");
    setMinPrice("");
    setMaxPrice("");
    setResetSortCount((prev) => prev + 1);

    localStorage.removeItem("selectedCategory");
    localStorage.removeItem("sortOrder");
    localStorage.removeItem("minPrice");
    localStorage.removeItem("maxPrice");

    setRefreshKey((prevKey) => prevKey + 1);

    updateSearchParams({
      category: undefined,
      sort: "newest",
      minPrice: undefined,
      maxPrice: undefined,
    });
  };

  const toggleCategoryAccordion = () => {
    const newState = !isCategoryAccordionOpen;
    setIsCategoryAccordionOpen(newState);
    localStorage.setItem("isCategoryAccordionOpen", JSON.stringify(newState));
  };

  const toggleSortAccordion = () => {
    const newState = !isSortAccordionOpen;
    setIsSortAccordionOpen(newState);
    localStorage.setItem("isSortAccordionOpen", JSON.stringify(newState));
  };

  const isCategoryFilterActive = selectedCategory !== "";
  const isSortFilterActive = sortOrder !== "newest";

  return (
    <div key={refreshKey} className="mr-5 overflow-hidden">
      <div className="flex flex-col gap-6">
        <input
          type="number"
          value={minPrice}
          onChange={handlePriceChange(setMinPrice, "minPrice")}
          placeholder="Precio mínimo"
          className="border border-gray-300 px-4 py-2 rounded-full text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500"
        />
        <input
          type="number"
          value={maxPrice}
          onChange={handlePriceChange(setMaxPrice, "maxPrice")}
          placeholder="Precio máximo"
          className="border border-gray-300 px-4 py-2 rounded-full text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500"
        />
        <div className="flex gap-4">
          <button
            onClick={applyPriceFilter}
            className="flex-1 px-4 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-all shadow-md"
          >
            Aplicar
          </button>
          <button
            onClick={clearPriceFilter}
            className="flex-1 px-4 py-2 bg-gray-300 text-gray-800 rounded-full hover:bg-gray-400 transition-all shadow-md"
          >
            Limpiar
          </button>
        </div>

        <Accordion
          expanded={isCategoryAccordionOpen}
          onChange={toggleCategoryAccordion}
          sx={{
            borderRadius: "30px",
            boxShadow: "none",      
            border: "none",         
            "&.MuiAccordion-root:before": { display: "none" },
            "&:hover": {
              backgroundColor: "#f5f5f5",
            },
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            sx={{
              borderRadius: "30px",
            }}
          >
            <h2 className="font-semibold text-gray-800">Categorías</h2>
            <Badge
              color="error"
              variant="dot"
              invisible={!isCategoryFilterActive}
              sx={{ marginLeft: 3, marginTop: 1 }}
            />
          </AccordionSummary>
          <AccordionDetails
            sx={{
              padding: "16px",
              borderRadius: "30px",
            }}
          >
            <Selector onCategoryChange={handleCategoryChange} selectedCategory={selectedCategory} />
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={isSortAccordionOpen}
          onChange={toggleSortAccordion}
          sx={{
            borderRadius: "30px",
            boxShadow: "none",       
            border: "none",         
            "&.MuiAccordion-root:before": { display: "none" },
            "&:hover": {
              backgroundColor: "#f5f5f5",
            },
          }}
        
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
            sx={{
              borderRadius: "30px",
            }}
          >
            <h2 className="font-semibold text-gray-800 text-center">Ordenar por</h2>
            <Badge
              color="error"
              variant="dot"
              invisible={!isSortFilterActive}
              sx={{ marginLeft: 2, marginTop: 1 }}
            />
          </AccordionSummary>
          <AccordionDetails
            sx={{
              padding: "16px",
              borderRadius: "30px",
            }}
          >
            <Sort onSortChange={handleSortChange} resetSortCount={resetSortCount} />
          </AccordionDetails>
        </Accordion>

        <button
          onClick={clearAllFilters}
          className="mt-6 px-4 py-3 bg-red-500 text-white rounded-full hover:bg-red-600 transition-all shadow-lg"
        >
          Limpiar todos los filtros
        </button>
      </div>
    </div>
  );
};

export default Filter;
