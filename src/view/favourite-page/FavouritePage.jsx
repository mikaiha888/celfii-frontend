import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const FavouritePage = () => {
    const favourites = useSelector(state => state.favourites)
  return (
    <div>
      <h1 className="text-2xl font-bold">Mis productos favoritos</h1>
      {favourites.length === 0 ? (
        <p>No tienes productos favoritos.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {favourites.map((product) => (
            <div key={product.id} className="max-w-sm overflow-hidden bg-white rounded shadow-lg">
              <img
                src={product.images[0]?.url}
                alt={product.images[0]?.altText}
                className="object-cover w-full h-60"
              />
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
          ))}
        </div>
      )}
    </div>
  );
};

export default FavouritePage;
