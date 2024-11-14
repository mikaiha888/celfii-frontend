import { useEffect } from "react";
import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loadCartFavs, clearCartFavs } from "../../redux/actions";

import CartItem from "../../components/cart-item/CartItem";
import WhatsAppButton from "../../components/whatsapp-button/WhatsAppButton";
import { saveToLocalStorage } from "../../helpers";

const CartPage = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cartFavs);

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (!storedCart) saveToLocalStorage("cart", []);
    dispatch(loadCartFavs("cart"));
  }, [dispatch]);

  const calculateTotal = () => {
    return cart && cart.length > 0
      ? cart.reduce((total, item) => total + item.priceArs * item.quantity, 0).toFixed(2)
      : "0.00";
  };

  const handleClearCart = () => {
    dispatch(clearCartFavs("cart"));
  };

  return (
    <div className="max-w-3xl mx-auto p-4 bg-white shadow-lg rounded-lg mt-10">
      <h1 className="text-3xl font-bold text-center mb-6">Mi Carrito</h1>

      {cart && cart.length === 0 ? (
        <div className="flex flex-col items-center justify-center text-center text-gray-600">
          <ShoppingCart className="w-16 h-16 mb-4 text-gray-400" />
          <p className="mb-4 text-xl font-semibold">Tu carrito está vacío.</p>
          <p className="mb-6 text-gray-500">
            Para añadir productos, haz click en el botón de "Agregar al carrito" dentro del detalle
            del producto.
          </p>
          <Link to="/productos">
            <button className="px-6 py-3 text-white transition-all duration-300 bg-gray-500 rounded-full shadow hover:bg-gray-600">
              Explorar productos
            </button>
          </Link>
        </div>
      ) : (
        <div>
          <ul className="space-y-4">
            {cart && cart.length && cart.map((item) => <CartItem key={item.id} item={item} />)}
          </ul>

          <div className="border-t mt-6 pt-4 flex justify-between text-xl font-semibold text-gray-700">
            <span>Total:</span>
            <span>ARS {calculateTotal()}</span>
          </div>

          <WhatsAppButton cartItems={cart} isCartPage={true} />

          <button
            onClick={handleClearCart}
            className="mt-4 w-full py-2 text-white bg-red-600 rounded-full hover:bg-red-700 transition-colors duration-300">
            Vaciar Carrito
          </button>

          <div className="text-center mt-6 text-gray-500">
            ¿Quieres descubrir más?{" "}
            <Link to="/productos" className="text-red-600 hover:underline">
              Explora otros productos de nuestra tienda aquí
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
