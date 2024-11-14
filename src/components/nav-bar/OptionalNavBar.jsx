import { useSelector } from "react-redux";
import { removeFromLocalStorage } from "../../helpers";
import { useLocation, useNavigate } from "react-router-dom";

import SearchBar from "../searchbar/SearchBar";

const OptionalNavBar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { categories } = useSelector((state) => state.categories);

  const selectedCategories = categories ? categories.slice(0, 6) : [];

  const handleSearch = ({ name, category }) => {
    removeFromLocalStorage("filters");
    const param = name ? { name, page: 1 } : { page: 1 };
    const search = new URLSearchParams(param).toString();
    category
      ? navigate({ pathname: `/productos/${category}`, search })
      : navigate({ pathname: "/productos", search });
    window.scrollTo(0, 0);
  };

  return (
    pathname === "/" && (
      <div className="w-2/3 px-10 pb-5 absolute left-1/2 transform -translate-x-1/2 bg-white shadow-md h-16 rounded-b-[10px] hidden md:flex md:items-center md:justify-between z-50">
        <ul className="hidden lg:flex lg:gap-x-4">
          {selectedCategories.map((category, index) => (
            <li
              key={index}
              onClick={() => handleSearch({ category: category.name.toLowerCase() })}
              className="pr-4 font-medium transition-all duration-200 border-r text-md text-secondary hover:text-primary"
            >
              <button>{category.name}</button>
            </li>
          ))}
        </ul>
        <SearchBar onSearch={(name) => handleSearch({ name })} />
      </div>
    )
  );
};

export default OptionalNavBar;
