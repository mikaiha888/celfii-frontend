import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadCategories } from "../../redux/actions/categoriesActions";

const Selector = ({ onCategoryChange, selectedCategory }) => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(loadCategories());
  }, [dispatch]);

  return (
    <div className="relative inline-block text-left">
      <select
        value={selectedCategory}
        onChange={(e) => {
          onCategoryChange(e.target.value)
        }}
        className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
        <option value="">Seleccionar categoría</option>
        {categories.length > 0 ? (
          categories.map((category) => (
            <option key={category.id} value={category.name}>
              {category.name}
            </option>
          ))
        ) : (
          <option disabled>No hay categorías disponibles</option>
        )}
      </select>
    </div>
  );
};

export default Selector;
