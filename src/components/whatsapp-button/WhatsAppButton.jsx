import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const phoneNumber = "549XXXXXXXXXX";

  return (
    <a
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition duration-300 ease-in-out flex items-center justify-center"
      aria-label="Contactar por WhatsApp">
      <FaWhatsapp size={24} />
    </a>
  );
};

export default WhatsAppButton;
