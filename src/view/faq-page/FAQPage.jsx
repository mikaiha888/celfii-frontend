import { useState } from "react";

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "¿Cómo funciona el proceso de compra en Cel-Fii?",
      answer: `Puedes navegar por nuestro catálogo y agregar productos al carrito de compras. 
                Cuando hayas seleccionado todos los productos que deseas, dirígete al carrito y haz 
                clic en “Comprar”. Serás redirigido a WhatsApp, donde podrás coordinar el pago y la entrega 
                directamente con uno de nuestros representantes.`,
    },
    {
      question: "¿Necesito crear una cuenta para hacer una compra?",
      answer: `No es necesario crear una cuenta en nuestro sitio. Simplemente agrega productos al 
               carrito y finaliza la compra a través de WhatsApp. De esta manera, no necesitas registrarte ni 
               proporcionar información adicional en el sitio.`,
    },
    {
      question: "¿Cel-Fii almacena información de pago o datos personales?",
      answer: `No, nuestro sitio no maneja ni almacena información de pago ni datos personales. 
               Todos los detalles de la transacción, como el pago y la entrega, se gestionan exclusivamente 
               a través de WhatsApp para ofrecerte un proceso seguro y personalizado.`,
    },
    {
      question: "¿Qué métodos de pago aceptan?",
      answer: `Aceptamos pagos en efectivo, transferencias bancarias, y otros métodos según lo 
               discutido con el representante de ventas. Durante la conversación en WhatsApp, te 
               proporcionaremos las opciones disponibles.`,
    },
    {
      question: "¿Cuál es el tiempo de entrega de los productos?",
      answer: `El tiempo de entrega depende de tu ubicación y de la disponibilidad del producto. 
               Durante la coordinación en WhatsApp, te daremos una estimación del tiempo de entrega y 
               detalles adicionales.`,
    },
    {
      question: "¿Puedo devolver o cambiar un producto?",
      answer: `Sí, puedes devolver o cambiar un producto dentro de los 30 días posteriores a la compra, 
               siempre que esté en su estado original y con su empaque intacto. Para gestionar una devolución o cambio, 
               contáctanos en WhatsApp y te ayudaremos con el proceso.`,
    },
    {
      question: "¿Cómo puedo contactarlos para recibir asistencia?",
      answer: `Puedes contactarnos fácilmente a través del botón de WhatsApp en la página o enviarnos 
               un correo electrónico a info@celfii.com. Nuestro equipo estará encantado de ayudarte con cualquier consulta.`,
    },
  ];

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">Preguntas Frecuentes</h1>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-300 pb-4">
            <button 
              className="w-full text-left focus:outline-none "
              onClick={() => toggleAccordion(index)}
            >
              <h2 className="text-2xl text-gray-800 flex justify-between items-center mt-5 mb-5">
                {faq.question}
                <span
                  className={`transform transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                >
                  ▼
                </span>
              </h2>
            </button>
            {openIndex === index && (
              <p className="text-lg text-gray-700 mt-2 leading-relaxed">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQPage;
