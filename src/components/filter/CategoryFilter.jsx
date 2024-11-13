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
          <div
            key={category.id}
            className={`p-2 font-medium rounded-sm transition-colors duration-200 ${
              filters.category === category.name.toLowerCase() ? "bg-gray-100" : "hover:bg-gray-50"
            } flex items-center justify-between`}
          >
            <button className="flex-1 text-left" value={category.name} onClick={() => handleApply(category.name)}>
              {category.name}
            </button>
            {filters.category === category.name.toLowerCase() && (
              <button
                onClick={() => handleApply("")}
                className="text-gray-400 transform hover:text-gray-500"
              >
                <X size={16} aria-label="Remove category" />
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
