import { Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addFavourite, removeFavourite } from "../../redux/actions";

const Card = ({ product }) => {
  const dispatch = useDispatch();
  const favourites = useSelector((state) => state.favourites);
  const isFavourite = favourites.some((fav) => fav.id === product.id);

  const toggleFavourite = () => {
    if (isFavourite) {
      dispatch(removeFavourite(product));
    } else {
      dispatch(addFavourite(product));
    }
  };

  return (
    <div className="relative max-w-sm overflow-hidden bg-white rounded shadow-lg">
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
      <div className="px-6 pt-4 pb-2">
        <Link to={`/product/${product.id}`}>
          <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
            Ver más
          </button>
          <button onClick={toggleFavourite}>
            <Heart stroke={0} fill={isFavourite ? "#de3f3f" : "#d6d6d6"} />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
