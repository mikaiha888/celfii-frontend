import { Heart, Plus } from "lucide-react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addCartFavs, removeCartFavs } from "../../redux/actions";

const Card = ({ product, favourites }) => {
  const dispatch = useDispatch();
  const isFavourite = favourites?.some((fav) => fav.id === product.id);

  const toggleFavourite = (e) => {
    e.stopPropagation();
    isFavourite
      ? dispatch(removeCartFavs("favourites", product))
      : dispatch(addCartFavs("favourites", product));
  };

  return (
    <div>
      <Link to={`/product/${product.id}`}>
        {product.images && product.images[0] && (
          <img
            className={"object-cover border border-gray-100 shadow-sm w-60 h-80 "}
            src={product.images[0].url}
            alt={product.images[0].altText || product.name}
          />
        )}
        <div className="flex items-center justify-between mt-1">
          <h3 className="w-40 text-sm text-gray-500 truncate">{product.name}</h3>
          <div className="flex items-center justify-between text-gray-400">
            <button className="p-1 rounded-full hover:text-red-600 hover:bg-red-100">
              <Plus size={18} />
            </button>
            <button onClick={toggleFavourite} className="p-1 rounded-full">
              <Heart stroke={0} size={18} fill={isFavourite ? "#de3f3f" : "#d6d6d6"} />
            </button>
          </div>
        </div>
        <div className="flex justify-between mt-1">
          <span className="px-2 py-1 text-xs font-medium text-white bg-red-500 rounded-full">
            {product.category.name}
          </span>
          <p className="font-semibold text-md font-poppins">ARS {product.priceArs}</p>
        </div>
      </Link>
    </div>
  );
};

export default Card;
