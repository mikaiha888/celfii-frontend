import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { loadProduct, addCartFavs, removeCartFavs } from "../../redux/actions";

import ImageCarousel from "../../components/image-carousel/ImageCarousel";

const ProductDetailPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { product, loading, error } = useSelector((state) => state.products);
  const favourites = useSelector((state) => state.favourites);
  const isFavourite = favourites?.some((fav) => fav.id === product?.id);

  const toggleFavourite = (e) => {
    e.stopPropagation();
    if (isFavourite) {
      dispatch(removeCartFavs(product));
      toast.info("Eliminado de favoritos");
    } else {
      dispatch(addCartFavs(product));
      toast.success("Agregado a favoritos");
    }
  };

  useEffect(() => {
    dispatch(loadProduct(id));
  }, [dispatch, id]);

  if (loading) {
    return <p>Cargando detalles del producto...</p>;
  }

  if (error) {
    return <p>Error al cargar detalles del producto: {error}</p>;
  }

  return (
    <div className="relative max-w-6xl p-6 mx-auto mt-2 bg-white rounded-lg shadow-lg">
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
      />

      <button onClick={toggleFavourite} className="absolute text-2xl top-2 right-2">
        {isFavourite ? (
          <span className="text-red-500">❤️</span>
        ) : (
          <span className="text-gray-500">🤍</span>
        )}
      </button>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          {product.images && product.images.length > 0 ? (
            <ImageCarousel images={product.images} />
          ) : (
            <p>No hay imágenes disponibles para este producto.</p>
          )}
        </div>

        <div className="flex flex-col justify-center">
          <h1 className="mb-4 text-3xl font-bold">{product.name}</h1>
          <p className="mb-2 text-xl text-gray-700">Precio: ARS {product.priceArs}</p>
          <p className="mb-6 text-xl text-gray-700">Precio: USD {product.priceUsd}</p>
          <p className="mb-6 text-gray-600">{product.description}</p>
          <button className="px-4 py-2 text-white transition bg-blue-500 rounded hover:bg-blue-700">
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
