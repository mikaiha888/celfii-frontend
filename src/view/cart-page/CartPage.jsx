import { useEffect } from "react";
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
      <div>
        <ul>
          {cart && cart.length && cart.map(item => 
            <CartItem key={item.id} item={item} />
          )}
        </ul>
      </div>
      <div>

      </div>
    </div>
  );
};

export default CartPage;
