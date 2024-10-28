import { useSelector } from "react-redux";
import Card from "../../components/card/Card";
import { Link } from "react-router-dom";
import { Heart } from "lucide-react"; // Icono para el corazón

const FavouritePage = () => {
  const favourites = useSelector((state) => state.favourites);

  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <h1 className="mb-8 text-3xl font-bold text-center text-gray-800">Mis productos favoritos</h1>

      {favourites.length === 0 ? (
        <div className="flex flex-col items-center justify-center text-center text-gray-600">
          <Heart className="w-16 h-16 text-gray-400 mb-4" />

          <p className="mb-4 text-xl font-semibold">No tienes productos favoritos.</p>

          <p className="mb-6 text-gray-500">
            Para añadir, haz click en el corazón dentro del detalle del producto.
          </p>

          <Link to="/productos">
            <button className="px-6 py-3 text-white bg-blue-500 rounded-md shadow hover:bg-blue-700 transition-all duration-300">
              Explorar productos
            </button>
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {favourites.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default FavouritePage;
