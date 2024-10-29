import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadCategories } from "../../redux/actions/categoriesActions";
import { X } from "lucide-react";

const Selector = ({ onCategoryChange, selectedCategory }) => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(loadCategories());
  }, [dispatch]);

  const handleCategoryClick = (categoryName) => {
    if (selectedCategory === categoryName) {
      onCategoryChange("");
    } else {
      onCategoryChange(categoryName);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      {categories.length > 0 ? (
        categories.map((category) => (
          <div key={category.id} className="relative">
            <button
              onClick={() => handleCategoryClick(category.name)}
              className={`p-2 rounded-md text-left transition-colors duration-200 ${
                selectedCategory === category.name
                  ? "bg-red-500 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-200"
              } w-full flex justify-between items-center`}
            >
              <span>{category.name}</span>
              {selectedCategory === category.name && (
                <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-red-500">
                  <X size={20} aria-label="Remove category" />
                </span>
              )}
            </button>
          </div>
        ))
      ) : (
        <p>No hay categorías disponibles</p>
      )}
    </div>
  );
};

export default Selector;
