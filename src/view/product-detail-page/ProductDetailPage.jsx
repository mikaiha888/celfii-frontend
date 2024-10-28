import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadProduct } from "../../redux/actions/productsActions";
import { useParams } from "react-router-dom";
import ImageCarousel from "../../components/image-carousel/ImageCarousel";
import { addFavourite, removeFavourite } from "../../redux/actions/favouritesActions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductDetailPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { product, loading, error } = useSelector((state) => state.products);
  const favourites = useSelector((state) => state.favourites);
  const isFavourite = favourites.some((fav) => fav.id === product?.id);

  const toggleFavourite = (e) => {
    e.stopPropagation();
    if (isFavourite) {
      dispatch(removeFavourite(product));
      toast.info("Eliminado de favoritos");
    } else {
      dispatch(addFavourite(product));
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
    <div className="relative max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-2">
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
      />

      <button onClick={toggleFavourite} className="absolute top-2 right-2 text-2xl">
        {isFavourite ? (
          <span className="text-red-500">❤️</span>
        ) : (
          <span className="text-gray-500">🤍</span>
        )}
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          {product.images && product.images.length > 0 ? (
            <ImageCarousel images={product.images} />
          ) : (
            <p>No hay imágenes disponibles para este producto.</p>
          )}
        </div>

        <div className="flex flex-col justify-center">
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-xl text-gray-700 mb-2">Precio: ARS {product.priceArs}</p>
          <p className="text-xl text-gray-700 mb-6">Precio: USD {product.priceUsd}</p>
          <p className="text-gray-600 mb-6">{product.description}</p>
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition">
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
