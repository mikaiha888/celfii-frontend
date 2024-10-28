import { useDispatch } from "react-redux";
import Selector from "./Selector";
import SearchBar from "./SearchBar";
import { useEffect, useState } from "react";
import { loadCategories } from "../../redux/actions/categoriesActions";
import Sort from "./Sort";

const Filter = ({ updateSearchParams }) => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategories] = useState("");
  const [sortOrder, setSortOrder] = useState("newest");

  useEffect(() => {
    dispatch(loadCategories());
  }, [dispatch]);

  const handleCategoryChange = (select) => {
    setSelectedCategories(select);
    updateSearchParams({
      name: search,
      category: select,
      sort: sortOrder,
    });
  };

  const handleSortChange = (sort) => {
    setSortOrder(sort);
    updateSearchParams({
      name: search,
      category: selectedCategory,
      sort: sort,
    });
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    updateSearchParams({
      name: e.target.value,
      category: selectedCategory,
      sort: sortOrder,
    });
  };

  return (
    <div>
      <div className="flex flex-col sm:flex-row items-center gap-4 p-4 bg-gray-100 rounded-md shadow-lg">
        <Selector onCategoryChange={handleCategoryChange} selectedCategory={selectedCategory} />
        <Sort onSortChange={handleSortChange} />
        <div className="ml-auto">
        <SearchBar value={search} onChange={handleSearchChange} />
        </div>
      </div>
    </div>
  );
};

export default Filter;
