import { useEffect } from "react";
import { Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { loadCartFavs } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

import Cards from "../../components/cards/Cards";
import { saveToLocalStorage } from "../../helpers";

const FavouritePage = () => {
  const dispatch = useDispatch();
  const { favourites } = useSelector((state) => state.cartFavs);

  useEffect(() => {
    const storedFavs = localStorage.getItem("favourites");
    if (!storedFavs) saveToLocalStorage("favourites", []);
    dispatch(loadCartFavs("favourites"));
  }, []);

  return (
    <div className="container mt-10">
      <h1 className="text-2xl font-bold mb-10 text-center">Mis productos favoritos</h1>
      {favourites && favourites.length === 0 ? (
        <div className="flex flex-col items-center justify-center text-center text-gray-600">
          <Heart className="w-24 h-24 mb-4 text-red-400 animate-pulse" />{" "}
          <p className="mb-4 text-xl font-semibold">¡Aún no tienes favoritos!</p>{" "}
          <p className="mb-6 text-gray-500">
            Descubre productos increíbles y agrégalos a tu lista.
          </p>
          <Link to="/productos">
            <button className="px-6 py-3 text-white transition-all duration-300 bg-gray-500 rounded-full shadow hover:bg-gray-600">
              Explorar productos
            </button>
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-1 gap-4">
          {" "}
          <Cards products={favourites} favourites={favourites} />
        </div>
      )}
    </div>
  );
};

export default FavouritePage;
