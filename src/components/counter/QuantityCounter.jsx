import { useState } from "react";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";

const QuantityCounter = ({ initialQuantity = 1, maxQuantity = 10, onChange, cartQuantity = 0 }) => {
  const { pathname } = useLocation();
  const [quantity, setQuantity] = useState(initialQuantity);
  const [isOpen, setIsOpen] = useState(false);
  const [showText, setShowText] = useState(false);

  const handleSelectQuantity = (selectedQuantity) => {
    setQuantity(selectedQuantity);
    setShowText(false);
    onChange(selectedQuantity);
    setIsOpen(false);
  };

  const handleManualInput = (e) => {
    const inputQuantity = parseInt(e.target.value, 10);
    if (!isNaN(inputQuantity) && inputQuantity > 0) {
      if (inputQuantity + cartQuantity <= maxQuantity) {
        setQuantity(inputQuantity);
        setShowText(false);
        onChange(inputQuantity);
      } else {
        setShowText(true);
        toast("Has alcanzado el límite de stock, no puedes agregar más productos.");
      }
    }
  };

  const availableQuantities = maxQuantity > 5 ? 5 : maxQuantity;

  return (
    <div className="relative inline-block text-left">
      <div className="flex items-center space-x-2">
        <span className="text-gray-700 font-semibold">Cantidad:</span>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="px-4 py-2 border border-gray-300 rounded text-black bg-white hover:bg-gray-100"
        >
          {quantity}
        </button>

        <span className="text-gray-500 text-sm">
          {maxQuantity - quantity > 5 ? "+5 disponibles" : `+${maxQuantity - quantity} disponibles`}
        </span>
      </div>

      {isOpen && (
        <div className="absolute mt-2 w-full max-w-[100px] bg-white border border-gray-300 rounded shadow-lg z-10">
          <ul className="py-1">
            {Array.from({ length: availableQuantities }, (_, i) => i + 1).map((num) => (
              <li key={num}>
                <button
                  onClick={() => handleSelectQuantity(num)}
                  className={`block w-full px-4 py-2 text-left ${
                    num === quantity ? "bg-red-500 text-white" : "text-black hover:bg-gray-100"
                  }`}
                >
                  {num}
                </button>
              </li>
            ))}
            {maxQuantity > 5 && (
              <li className="px-4 py-2">
                <input
                  type="number"
                  min="6"
                  placeholder="Más de 5"
                  className="w-full px-2 py-1 border border-gray-300 rounded"
                  onChange={handleManualInput}
                />
              </li>
            )}
          </ul>
        </div>
      )}

      {showText && pathname !== "/cart" && (
        <span className="mt-2 text-sm text-red-600 block">
          Stock insuficiente para añadir más unidades.
        </span>
      )}
    </div>
  );
};

export default QuantityCounter;
