import { useState } from "react";
import { Heart } from "lucide-react";
import { Link } from "react-router-dom";

const Card = ({ product }) => {
  const [isFavourite, setIsFavourite] = useState(false);

  const toggleFavourite = () => {
    setIsFavourite(!isFavourite);
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
