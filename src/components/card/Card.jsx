import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addFavourite, removeFavourite } from "../../redux/actions/favouritesActions";

const Card = ({ product }) => {
  const dispatch = useDispatch()
  const favourites = useSelector(state => state.favourites)
  const isFavourite = favourites.some(fav => fav.id === product.id)

  const toggleFavourite = () => {
    if (isFavourite) {
      dispatch(removeFavourite(product));
    } else {
      dispatch(addFavourite(product));
    }
  };

  return (
    <div className="max-w-sm overflow-hidden bg-white rounded shadow-lg relative">
      {product.images &&
        product.images.map((image, index) => (
          <img
            key={index}
            className="object-cover w-full h-60"
            src={image.url}
            alt={image.altText}
          />
        ))}

      <div className="absolute bottom-2 right-2 p-2">
        {isFavourite ? (
          <button onClick={toggleFavourite} className="text-red-500 text-2xl">
            ❤️
          </button>
        ) : (
          <button onClick={toggleFavourite} className="text-gray-500 text-2xl">
            🤍
          </button>
        )}
      </div>

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
        </Link>
      </div>
    </div>
  );

};

export default Card;
