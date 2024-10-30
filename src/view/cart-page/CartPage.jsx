import { useEffect } from "react";
import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loadCartFavs } from "../../redux/actions";

import CartItem from "../../components/cart-item/CartItem";

const CartPage = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cartFavs);

  useEffect(() => {
    dispatch(loadCartFavs("cart"));
  }, [dispatch]);

  return (
<div>
      <h1 className="text-2xl font-bold">Mi Carrito</h1>
      {cart.length === 0 ? (
        <div className="flex flex-col items-center justify-center text-center text-gray-600">
          <ShoppingCart className="w-16 h-16 mb-4 text-gray-400" />
          <p className="mb-4 text-xl font-semibold">No tienes productos favoritos.</p>
          <p className="mb-6 text-gray-500">
            Para añadir, haz click en el corazón dentro del detalle del producto.
          </p>
          <Link to="/productos">
            <button className="px-6 py-3 text-white transition-all duration-300 bg-blue-500 rounded-md shadow hover:bg-blue-700">
              Explorar productos
            </button>
          </Link>
        </div>
      ) : (
        <div>
        <ul>
          {cart && cart.length && cart.map(item => 
            <CartItem key={item.id} item={item} />
          )}
        </ul>
      </div>
      )}
    </div>
  );
};

export default CartPage;
