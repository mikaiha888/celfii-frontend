import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addFavourite, removeFavourite } from "../../redux/actions/favouritesActions";
import { useState } from "react";

const Card = ({ product }) => {
  const dispatch = useDispatch();
  const favourites = useSelector((state) => state.favourites);
  const isFavourite = favourites.some((fav) => fav.id === product.id);

  const [hovered, setHovered] = useState(false);

  const toggleFavourite = (e) => {
    e.stopPropagation();
    if (isFavourite) {
      dispatch(removeFavourite(product));
    } else {
      dispatch(addFavourite(product));
    }
  };

  return (
    <div
      className="relative max-w-sm overflow-hidden bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}>
      <Link to={`/product/${product.id}`} className="block">
        {product.images && product.images[0] && (
          <img
            className="object-cover w-full h-60 rounded-t-lg"
            src={product.images[0].url}
            alt={product.images[0].altText || product.name}
          />
        )}

        <div className="px-6 py-4">
          <h3 className="mb-2 text-xl font-bold">{product.name}</h3>
          <p className="text-gray-700">Precio: ARS {product.priceArs}</p>
          <p className="text-gray-600 text-sm">{product.category.name}</p>
          <p className="text-gray-600 text-sm">{product.view.counter} vistas</p>
        </div>
      </Link>

      <button
        onClick={toggleFavourite}
        className={`absolute top-2 right-2 text-2xl transition-all duration-300 transform ${
          hovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
        }`}
        style={{ transitionProperty: "opacity, transform" }}
      >
        {isFavourite ? (
          <span className="text-red-500">❤️</span>
        ) : (
          <span className="text-gray-500">🤍</span>
        )}
      </button>
    </div>
  );
};

export default Card;
