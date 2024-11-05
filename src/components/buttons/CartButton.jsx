import { useSelector } from "react-redux";
import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

const CartButton = () => {
  const { cart } = useSelector((state) => state.cartFavs); 
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0); 

  return (
    <Link to="/cart" className="relative flex items-center">
      <ShoppingCart className="w-6 h-6 text-gray-700" />
      {totalItems > 0 && ( 
        <span className="absolute top-0 right-0 w-4 h-4 text-xs text-white bg-red-600 rounded-full flex items-center justify-center">
          {totalItems}
        </span>
      )}
    </Link>
  );
};

export default CartButton;
