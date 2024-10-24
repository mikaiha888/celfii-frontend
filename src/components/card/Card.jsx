import { Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addCartFavs, removeCartFavs } from "../../redux/actions";

const Card = ({ product, favourites }) => {
  const dispatch = useDispatch();
  const isFavourite = favourites?.some((fav) => fav.id === product.id);

  const toggleFavourite = () => {
    isFavourite
      ? dispatch(removeCartFavs("favourites", product))
      : dispatch(addCartFavs("favourites", product));
  };

  return (
    <div className="relative max-w-sm overflow-hidden bg-white rounded shadow-lg">
      <Link to={`/product/${product.id}`}>
        {product.images &&
          product.images.map((image, index) => (
            <img
              key={index}
              className="object-cover w-full h-60"
              src={image.url}
              alt={image.altText}
            />
          ))}

        <div className="px-6 py-4">
          <div className="mb-2 text-xl font-bold">{product.name}</div>
          <p className="text-base text-gray-700">Precio: ARS {product.priceArs}</p>
          <p className="text-base text-gray-700"> {product.category.name}</p>
        </div>
      </Link>
      <div className="px-6 pt-4 pb-2">
        <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
          Ver más
        </button>
        <button className="px-4 py-2" onClick={toggleFavourite}>
          <Heart stroke={0} fill={isFavourite ? "#de3f3f" : "#d6d6d6"} />
        </button>
      </div>
    </div>
  );
};

export default Card;
