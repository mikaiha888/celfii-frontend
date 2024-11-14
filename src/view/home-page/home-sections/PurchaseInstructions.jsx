import { Link } from "react-router-dom";

const PurchaseInstructions = () => (
  <section className="p-6 mt-10 bg-gray-100 rounded-lg">
    <h2 className="mb-4 text-2xl font-semibold">¿Cómo realizar tu compra?</h2>
    <p className="mb-4 text-gray-700">
      Nuestro e-commerce acepta pagos con cualquier tarjeta de crédito o débito. Sigue estos pasos
      para realizar tu compra:
    </p>
    <ul className="mb-4 text-gray-700 list-disc list-inside">
      <li>Selecciona los productos que deseas comprar y agrégalos al carrito.</li>
      <li>Revisa el detalle de tu compra en el carrito.</li>
      <li>Una vez listo, haz clic en el botón que te llevará a nuestro WhatsApp.</li>
      <li>
        En WhatsApp, se enviará el mensaje con el detalle de tu compra y te asistiremos en la
        transacción.
      </li>
    </ul>
    <div className="text-center">
      <Link
        to="/faq"
        onClick={() => window.scrollTo(0, 0)}
        className="px-4 py-2 font-bold text-white bg-green-500 rounded hover:bg-green-700"
      >
        Ver más detalles
      </Link>
    </div>
  </section>
);

export default PurchaseInstructions;
