import { Link } from "react-router-dom";
import { categories } from "../contants";

const CategoriesGrid = () => (
  <section className="mt-10">
    <h2 className="mb-4 text-2xl font-bold">Categorías</h2>
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
      {categories.map((category) => (
        <Link key={category.name} to={category.link}>
          <div className="p-4 text-center transition-transform duration-300 transform bg-white rounded-lg shadow-md hover:scale-105">
            <img
              src={category.image}
              alt={category.name}
              className="object-cover w-full h-32 mb-2 rounded-md"
            />
            <h3 className="text-lg font-bold">{category.name}</h3>
          </div>
        </Link>
      ))}
    </div>
  </section>
);

export default CategoriesGrid;
