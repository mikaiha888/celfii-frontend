import { useSelector } from "react-redux";
import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

const CartButton = () => {
  const { cart } = useSelector((state) => state.cartFavs);

  const totalItems = cart && cart.length > 0 
    ? cart.reduce((total, item) => total + item.quantity, 0)
    : 0;

  return (
    <Link to="/cart" className="relative flex items-center p-2 text-2xl duration-200 rounded-full hover:bg-primary hover:text-white group">
      <ShoppingCart className="w-6 h-6 text-gray-700 group-hover:text-white" />
      {totalItems > 0 && ( 
        <span className="absolute top-0 right-0 flex items-center justify-center w-4 h-4 text-xs text-white bg-red-600 rounded-full group-hover:text-white group-hover:bg-black">
          {totalItems}
        </span>
      )}
    </Link>
  );
};

export default CartButton;
