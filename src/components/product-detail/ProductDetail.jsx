import { useState } from "react";
import { Heart } from "lucide-react";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { addCartFavs, removeCartFavs } from "../../redux/actions";

import QuantityCounter from "../counter/QuantityCounter";
import ImageCarousel from "../../components/image-carousel/ImageCarousel";
import { Link } from "react-router-dom";

const ProductDetail = ({ product, cart, isFavourite }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const item = cart && cart.find((item) => item.id === product.id);

  const toggleFavourite = (e) => {
    e.stopPropagation();
    isFavourite
      ? dispatch(removeCartFavs("favourites", product))
      : dispatch(addCartFavs("favourites", product));
  };

  const handleCartClick = (product) => {
    const newQuantity = item ? item.quantity + product.quantity : product.quantity;
    if (newQuantity > product.stock)
      toast.error(`Has alcanzado el límite de stock, no puedes agregar más productos.`);
    else {
      dispatch(addCartFavs("cart", product));
      toast.success("Producto agregado al carrito");
    }
  };

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
          <p className="mb-6 text-xl text-gray-700">Precio: USD {product.priceUsd}</p>
          <p className="mb-6 text-gray-600">{product.description}</p>
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
              {product.stock === 1 ? (
                <span className="px-3 py-1 text-lg font-semibold">1 unidad</span>
              ) : (
                <QuantityCounter
                  initialQuantity={quantity}
                  maxQuantity={product.stock}
                  onChange={(newQuantity) => setQuantity(newQuantity)}
                  cartQuantity={item ? item.quantity : 0}
                />
              )}
              <button
                onClick={() => handleCartClick({ ...product, quantity })}
                disabled={item && item.quantity >= product.stock}
                className="px-4 py-2 mt-4 text-white transition bg-blue-500 rounded hover:bg-blue-700"
              >
                Agregar al carrito
              </button>
            </>
          )}
          <Link
            to="/cart"
            className="px-4 py-2 mt-4 text-center text-white transition bg-red-700 rounded hover:bg-red-900"
          >
            Ver Carrito
          </Link>
        </div>
      </div>
    </>
  );
};
export default ProductDetail;
