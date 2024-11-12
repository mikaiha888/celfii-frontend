import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadCategories } from "../../redux/actions/categoriesActions";
import { X } from "lucide-react";

const CategoryFilter = ({ handleApply, filters }) => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(loadCategories());
  }, [dispatch]);

  return (
    <div className="flex flex-col gap-4">
      {categories.length > 0 ? (
        categories.map((category) => (
          <div key={category.id} className="relative">
            <button
              value={category.name}
              onClick={() => handleApply(category.name)}
              className={`p-2 rounded-md text-left transition-colors duration-200 ${
                filters.category === category.name
                  ? "bg-red-500 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-200"
              } w-full flex justify-between items-center`}
            >
              {category.name}
            </button>
            {filters.category === category.name && (
              <button
                onClick={() => handleApply("")}
                className="absolute text-gray-400 transform -translate-y-1/2 right-2 top-1/2 hover:text-red-500"
              >
                <X size={20} aria-label="Remove category" />
              </button>
            )}
          </div>
        ))
      ) : (
        <p>No hay categorías disponibles</p>
      )}
    </div>
  );
};

export default CategoryFilter;
