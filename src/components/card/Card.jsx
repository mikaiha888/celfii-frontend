import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Heart, ChevronLeft, ChevronRight } from "lucide-react";
import { addCartFavs, removeCartFavs } from "../../redux/actions";

const Card = ({ product, favourites }) => {
  const dispatch = useDispatch();
  const isFavourite = favourites?.some((fav) => fav.id === product.id);
  const [hovered, setHovered] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleToggleFavourite = (e) => {
    e.stopPropagation();
    if (isFavourite) {
      dispatch(removeCartFavs("favourites", product));
      toast.info("Producto eliminado de favoritos", {
        position: "top-right",
        autoClose: 2000,
      });
    } else {
      dispatch(addCartFavs("favourites", product));
      toast.success("Producto agregado a favoritos", {
        position: "top-right",
        autoClose: 2000,
      });
    }
  };

  const handlePreviousImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? product.images.length - 1 : prevIndex - 1
    );
  };

  const handleNextImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prevIndex) =>
      prevIndex === product.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative overflow-hidden transition-all duration-300 ease-in-out cursor-pointer"
    >
      <Link to={`/product/${product.id}`}>
        <div className="relative w-full overflow-hidden transition-all duration-300 transform bg-gray-100 border aspect-square">
          {product.images && product.images[0] && (
            <img
              className="object-cover w-full h-full"
              src={product.images[currentImageIndex].url}
              alt={product.images[currentImageIndex].altText || product.name}
            />
          )}
        </div>
      </Link>
      {product.images && product.images.length > 1 && (
        <>
          {currentImageIndex > 0 && (
            <button
              onClick={handlePreviousImage}
              className={`absolute top-1/2 left-0 transform -translate-y-10 bg-gray-800 p-1 rounded-e-full transition-opacity duration-300 ${
                hovered ? "opacity-100" : "opacity-0"
              }`}
            >
              <ChevronLeft className="text-white" />
            </button>
          )}
          {currentImageIndex < product.images.length - 1 && (
            <button
              onClick={handleNextImage}
              className={`absolute top-1/2 right-0 transform -translate-y-10 bg-gray-800 p-1 rounded-l-full transition-opacity duration-300 ${
                hovered ? "opacity-100" : "opacity-0"
              }`}
            >
              <ChevronRight className="text-white" />
            </button>
          )}
        </>
      )}
      <div className="flex justify-between gap-8 mt-3">
        <h3 className="flex-1 text-lg font-semibold text-gray-800 truncate">{product.name}</h3>
        <p className="font-semibold text-gray-900 text-md">ARS {product.priceArs}</p>
      </div>

      <div className="flex items-center justify-between mt-1">
        <span className="font-medium text-red-500">
          {product.category.name}
        </span>
      </div>
      <div
        className={`absolute top-0 right-4 w-10 h-12 transition-transform duration-300 overflow-hidden flex items-center ${
          hovered ? "translate-y-0" : "-translate-y-12"
        }`}
      >
        <div
          onClick={handleToggleFavourite}
          className={`h-full w-full rounded-bl-md rounded-br-md flex items-center cursor-pointer justify-center ${
            hovered ? "bg-red-600 hover:bg-red-600" : "bg-red-600"
          }`}
        >
          <Heart
            className="transition-transform duration-300"
            fill={isFavourite ? "#7f1d1d" : "white"}
            stroke={0}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
