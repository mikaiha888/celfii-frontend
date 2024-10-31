import { Link } from "react-router-dom";
import { categories } from "../contants";

const CategoriesGrid = () => (
  <section className="container flex justify-between mt-20">
    {categories.map((category) => (
      <Link
        key={category.name}
        to="/productos"
        onClick={() => {
          localStorage.setItem("selectedCategory", category.name);
          window.scrollTo(0, 0);
        }}
      >
        <div className="text-center transition-transform duration-300 hover:text-primary hover:scale-105">
          <img
            src={category.image}
            alt={category.name}
            className="w-48 h-48 border rounded-full shadow-md border-gray-50"
          />
          <h3 className="mt-5 font-medium">{category.name}</h3>
        </div>
      </Link>
    ))}
  </section>
);

export default CategoriesGrid;
