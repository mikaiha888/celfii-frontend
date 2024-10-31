import { useState } from "react";
import { Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addCartFavs, removeCartFavs } from "../../redux/actions";

const Card = ({ product, favourites }) => {
  const dispatch = useDispatch();
  const isFavourite = favourites?.some((fav) => fav.id === product.id);
  const [hovered, setHovered] = useState(false);

  const toggleFavourite = (e) => {
    e.stopPropagation();
    isFavourite
      ? dispatch(removeCartFavs("favourites", product))
      : dispatch(addCartFavs("favourites", product));
  };

  return (
    <div onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      <Link to={`/product/${product.id}`}>
        {product.images && product.images[0] && (
          <img
            className="object-cover w-60 h-80 border-gray-50"
            src={product.images[0].url}
            alt={product.images[0].altText || product.name}
          />
        )}
        <span className="px-2 py-1 mt-3 text-xs font-semibold text-white bg-red-500 border rounded-full">
          {product.category.name}
        </span>
        <h3 className="text-sm text-gray-500 w-60">{product.name}</h3>
        <p className="text-sm font-semibold font-poppins">ARS {product.priceArs}</p>
      </Link>
      <div>
        <button>Agregar al carrito</button>
        <button
          onClick={toggleFavourite}
          className={`absolute top-2 right-2 text-2xl transition-all duration-300 transform ${
            hovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
          }`}
          style={{ transitionProperty: "opacity, transform" }}
        >
          <Heart stroke={0} fill={isFavourite ? "#de3f3f" : "#d6d6d6"} />
        </button>
      </div>
    </div>
  );
};

export default Card;
