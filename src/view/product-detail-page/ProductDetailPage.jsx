import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { loadCartFavs, loadProduct } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

import ProductDetail from "../../components/product-detail/ProductDetail";

const ProductDetailPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { favourites, cart } = useSelector((state) => state.cartFavs);
  const { product, loading, error } = useSelector((state) => state.products);

  const isFavourite = favourites ? favourites?.some((fav) => fav.id === product?.id) : false;

  useEffect(() => {
    dispatch(loadCartFavs());
    dispatch(loadProduct(id));
  }, [dispatch, id]);

  if (loading) return <p>Cargando detalles del producto...</p>;
  if (error) return <p>Error al cargar detalles del producto: {error}</p>;

  return (
    <div className="relative max-w-6xl p-6 mx-auto mt-2 bg-white rounded-lg shadow-lg">
      <ProductDetail product={product} cart={cart} isFavourite={isFavourite} />
    </div>
  );
};

export default ProductDetailPage;
