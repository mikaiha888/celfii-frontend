import { Link } from "react-router-dom";

const Card = ({ id, images, title, price }) => {
  return (
    <div className="max-w-sm overflow-hidden bg-white rounded shadow-lg">
      {images &&
        images.map((image, index) => (
          <img
            key={index}
            className="object-cover w-full h-60"
            src={image.url}
            alt={image.altText}
          />
        ))}
      <div className="px-6 py-4">
        <div className="mb-2 text-xl font-bold">{title}</div>
        <p className="text-base text-gray-700">Precio: ARS {price}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <Link to={`/product/${id}`}>
          <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
            Ver más
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
