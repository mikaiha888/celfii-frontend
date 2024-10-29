import { useDispatch } from "react-redux";
import Selector from "./Selector";
import { useEffect, useState } from "react";
import { loadCategories } from "../../redux/actions/categoriesActions";
import Sort from "./Sort";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Filter = ({ updateSearchParams }) => {
  const dispatch = useDispatch();
  const [selectedCategory, setSelectedCategories] = useState("");
  const [sortOrder, setSortOrder] = useState("newest");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  useEffect(() => {
    dispatch(loadCategories());
  }, [dispatch]);

  const handleCategoryChange = (select) => {
    setSelectedCategories(select);
    updateSearchParams({
      category: select,
      sort: sortOrder,
    });
  };

  const handleSortChange = (sort) => {
    setSortOrder(sort);
    updateSearchParams({
      category: selectedCategory,
      sort: sort,
    });
  };

  const handlePriceChange = (setter) => (e) => {
    setter(e.target.value);
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
    updateSearchParams({
      category: selectedCategory,
      sort: sortOrder,
      minPrice: undefined,
      maxPrice: undefined,
    });
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <Accordion className="rounded-lg border border-gray-300">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <h2 className="font-bold text-black">Categorías</h2>
        </AccordionSummary>
        <AccordionDetails className="bg-gray-100 rounded-b-lg">
          <Selector onCategoryChange={handleCategoryChange} selectedCategory={selectedCategory} />
        </AccordionDetails>
      </Accordion>

      <Accordion className="rounded-lg border border-gray-300 mt-2">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <h2 className="font-bold text-black">Ordenar por</h2>
        </AccordionSummary>
        <AccordionDetails className="bg-gray-100 rounded-b-lg">
          <Sort onSortChange={handleSortChange} />
        </AccordionDetails>
      </Accordion>

      <div className="flex flex-col gap-4 mt-4">
        <input
          type="number"
          value={minPrice}
          onChange={handlePriceChange(setMinPrice)}
          placeholder="Precio mínimo"
          className="border border-gray-300 px-4 py-2 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500"
        />
        <input
          type="number"
          value={maxPrice}
          onChange={handlePriceChange(setMaxPrice)}
          placeholder="Precio máximo"
          className="border border-gray-300 px-4 py-2 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500"
        />
        <div className="flex gap-2">
          <button
            onClick={applyPriceFilter}
            className="flex-1 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
          >
            Aplicar
          </button>
          <button
            onClick={clearPriceFilter}
            className="flex-1 px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400 transition-colors"
          >
            Limpiar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
