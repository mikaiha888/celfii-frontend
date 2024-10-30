import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = ({ cartItems = [], isCartPage = false }) => {
  const phoneNumber = "+5492604545982";

  const buildCartMessage = () => {
    if (cartItems.length === 0) return "Tu carrito está vacío.";

    const cartDetails = cartItems
      .map((item) => {
        const totalPrice = item.quantity * item.priceArs;
        return `Producto: ${item.name}, Cantidad: ${item.quantity}, Precio: ARS ${
          item.priceArs
        }, Total: ARS ${totalPrice.toFixed(2)}`;
      })
      .join("\n");

    const totalCompra = cartItems.reduce((acc, item) => acc + item.quantity * item.priceArs, 0);

    return `${cartDetails}\nTotal de la compra: ARS ${totalCompra.toFixed(2)}`;
  };

  const message = isCartPage
    ? buildCartMessage()
    : "¡Hola! Me gustaría saber más sobre sus productos.";
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className={`${
        isCartPage ? "w-full bg-blue-500 mt-4" : "fixed bottom-5 right-5 h-14 w-14"
      } bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 ease-in-out flex items-center justify-center z-50`}
      aria-label="Contactar por WhatsApp">
      <FaWhatsapp size={24} />
      {isCartPage && <span className="ml-2">Continuar compra vía WhatsApp</span>}
    </a>
  );
};

export default WhatsAppButton;
