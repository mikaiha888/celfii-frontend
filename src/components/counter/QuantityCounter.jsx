import { useState } from "react";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";

const QuantityCounter = ({ initialQuantity = 1, maxQuantity = 10, onChange, cartQuantity = 0 }) => {
  const { pathname } = useLocation();
  const [quantity, setQuantity] = useState(initialQuantity);
  const [showText, setShowText] = useState(false);
  const [isDisabled, setIsDisabled] = useState(quantity >= maxQuantity);

  const handleClick = (type) => {
    if (type === "increment") {
      if (pathname === "/cart" && quantity < maxQuantity) {
        const newQuantity = quantity + 1;
        setQuantity(newQuantity);
        onChange(newQuantity);
      } else if (quantity + cartQuantity < maxQuantity) {
        const newQuantity = quantity + 1;
        setQuantity(newQuantity);
        onChange(newQuantity);
      } else {
        setShowText(true);
        setIsDisabled(true);
        toast("Has alcanzado el límite de stock, no puedes agregar más productos.");
      }
    }
    if (type === "decrement" && quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      setShowText(false);
      setIsDisabled(false);
      onChange(newQuantity);
    }
  };

  return (
    <div>
      <span>{maxQuantity < 5 ? "Últimas unidades" : `+${maxQuantity - 5} disponibles`}</span>
      <div className="flex items-center space-x-2">
        <button
          onClick={() => handleClick("decrement")}
          disabled={quantity <= 1}
          className="px-3 py-1 text-white bg-gray-500 rounded disabled:opacity-50">
          -
        </button>
        <span className="px-3 py-1 text-lg font-semibold">{quantity}</span>
        <button
          onClick={() => handleClick("increment")}
          disabled={isDisabled}
          className="px-3 py-1 text-white bg-blue-500 rounded disabled:opacity-50">
          +
        </button>
      </div>
      {showText && pathname !== "/cart" && (
        <span className="text-red-500">Stock insuficiente para añadir más unidades.</span>
      )}
    </div>
  );
};

export default QuantityCounter;
