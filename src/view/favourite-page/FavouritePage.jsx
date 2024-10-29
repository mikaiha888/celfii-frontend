import { useEffect } from "react";
import { Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { loadCartFavs } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

import Cards from "../../components/cards/Cards";

const FavouritePage = () => {
  const dispatch = useDispatch();
  const { favourites } = useSelector((state) => state.cartFavs);

  useEffect(() => {
    dispatch(loadCartFavs("favourites"));
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold">Mis productos favoritos</h1>
      {favourites.length === 0 ? (
        <div className="flex flex-col items-center justify-center text-center text-gray-600">
          <Heart className="w-16 h-16 mb-4 text-gray-400" />
          <p className="mb-4 text-xl font-semibold">No tienes productos favoritos.</p>
          <p className="mb-6 text-gray-500">
            Para añadir, haz click en el corazón dentro del detalle del producto.
          </p>
          <Link to="/productos">
            <button className="px-6 py-3 text-white transition-all duration-300 bg-blue-500 rounded-md shadow hover:bg-blue-700">
              Explorar productos
            </button>
          </Link>
        </div>
      ) : (
        <Cards products={favourites} favourites={favourites} />
      )}
    </div>
  );
};

export default FavouritePage;
