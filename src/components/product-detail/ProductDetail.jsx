import { useState } from "react";
import { Heart } from "lucide-react";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { addCartFavs, removeCartFavs } from "../../redux/actions";

import QuantityCounter from "../counter/QuantityCounter";
import FeaturedProductsSlider from "../../view/home-page/home-sections/FeaturedProductsSlider";
import ImageCarousel from "../../components/image-carousel/ImageCarousel";
import { Link } from "react-router-dom";

const ProductDetail = ({ product, cart, isFavourite }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const item = cart && cart.find((item) => item.id === product.id);
  const { products } = useSelector((state) => state.products);

  const featuredProducts = products.slice(0, 10);

  const toggleFavourite = (e) => {
    e.stopPropagation();
    if (isFavourite) {
      dispatch(removeCartFavs("favourites", product));
      toast.info("Producto eliminado de favoritos");
    } else {
      dispatch(addCartFavs("favourites", product));
      toast.success("Producto agregado a favoritos");
    }
  };

  const handleCartClick = (product) => {
    const newQuantity = item && item.length ? item.quantity + product.quantity : product.quantity;
    if (newQuantity <= product.stock) {
      dispatch(addCartFavs("cart", product));
      toast.success("Producto agregado al carrito");
    } else toast.error(`Has alcanzado el límite de stock, no puedes agregar más productos.`);
  };

  const phoneNumber = "+5492604545982";
  const message = `¡Hola! Quería consultar por el producto ${product.name}, ¿sigue disponible?`;
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <>
      <button onClick={toggleFavourite} className="absolute text-2xl top-2 right-2">
        <Heart stroke={0} fill={isFavourite ? "#de3f3f" : "#d6d6d6"} />
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
          {item && item.quantity >= product.stock ? (
            <button
              onClick={() => handleCartClick({ ...product, quantity })}
              disabled={item && item.quantity >= product.stock}
              className="px-4 py-2 mt-4 text-white transition bg-gray-500 rounded"
            >
              Sin stock
            </button>
          ) : (
            <>
              {product.stock <= 1 ? (
                product.stock < 1 ? (
                  <span className="px-3 py-1 text-lg font-semibold">Sin stock</span>
                ) : (
                  <span className="px-3 py-1 text-lg font-semibold">1 unidad</span>
                )
              ) : (
                <QuantityCounter
                  initialQuantity={quantity}
                  maxQuantity={product.stock}
                  onChange={(newQuantity) => setQuantity(newQuantity)}
                  cartQuantity={item ? item.quantity : 0}
                />
              )}
              {product.stock === 0 ? (
                <button
                  onClick={() => window.open(whatsappLink, "_blank")}
                  className="px-4 py-2 mt-4 w-full text-white bg-green-500 rounded hover:bg-green-700 transition"
                >
                  Consultar disponibilidad por WhatsApp
                </button>
              ) : (
                <button
                  onClick={() => handleCartClick({ ...product, quantity })}
                  disabled={item && item.quantity >= product.stock}
                  className="px-4 py-2 mt-4 text-white transition bg-red-600 rounded hover:bg-red-500"
                >
                  Agregar al carrito
                </button>
              )}
            </>
          )}
          {cart && cart.length ? (
            <Link
              to="/cart"
              className="px-4 py-2 mt-4 text-center text-red-600 border border-red-600 bg-gray-100 rounded hover:bg-gray-200 transition"
            >
              Ver Carrito
            </Link>
          ) : null}
        </div>
      </div>
      <hr className="mt-6" />
      <div className="mt-6">
        <h2 className="mb-2 text-2xl font-bold">Descripción del Producto</h2>
        <p className="text-gray-600 whitespace-pre-line">{product.description}</p>

      </div>
      <FeaturedProductsSlider products={featuredProducts} />
    </>
  );
};
export default ProductDetail;
