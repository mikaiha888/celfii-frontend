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
    <div
      className="relative max-w-sm overflow-hidden transition-shadow duration-300 bg-white rounded-lg shadow-lg hover:shadow-xl"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="block">
        {product.images && product.images[0] && (
          <img
            className="object-cover w-full rounded-t-lg h-60"
            src={product.images[0].url}
            alt={product.images[0].altText || product.name}
          />
        )}

        <div className="px-6 py-4">
          <h3 className="mb-2 text-xl font-bold">{product.name}</h3>
          <p className="text-gray-700">Precio: ARS {product.priceArs}</p>
          <p className="text-sm text-gray-600">{product.category.name}</p>
          <p className="text-sm text-gray-600">{product.view.counter} vistas</p>
        </div>
      </Link>
      <div className="px-6 pt-4 pb-2">
        <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
          Ver más
        </button>
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
