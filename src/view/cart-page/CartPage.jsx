import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadCartFavs } from "../../redux/actions";

import Cards from "../../components/cards/Cards";

const CartPage = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cartFavs);

  useEffect(() => {
    dispatch(loadCartFavs("cart"));
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold">Mi Carrito</h1>
      {cart && cart.length ? (
        <Cards products={cart} cart={cart} />
      ) : (
        <p>Carrito vacio</p>
      )}
    </div>
  );
};

export default CartPage;
