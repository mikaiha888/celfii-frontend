const TermsOfService = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Términos de Servicio</h1>

      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">1. Introducción</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Bienvenido a <strong>Cel-Fii</strong>. Al acceder a nuestro sitio web, aceptas cumplir
            con los siguientes términos y condiciones. Si no estás de acuerdo con alguno de estos
            términos, te recomendamos que no utilices nuestra plataforma.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">2. Uso del Sitio</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Nuestro sitio web permite a los usuarios explorar y seleccionar productos de nuestro
            catálogo, añadirlos al carrito y, posteriormente, completar la compra mediante WhatsApp.{" "}
            <strong>Cel-Fii</strong> no gestiona pagos en el sitio y no almacena información de pago
            o datos de usuario sensibles en nuestra plataforma.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            3. Transacciones a través de WhatsApp
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Al hacer clic en “Comprar” en el carrito de compras, serás redirigido a WhatsApp para
            coordinar detalles de la compra, incluyendo el pago y la entrega. Todos los términos de
            pago, así como la confirmación de la transacción, se gestionan directamente en WhatsApp
            entre el usuario y un representante de <strong>Cel-Fii</strong>.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            4. Política de Devoluciones y Cambios
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Aceptamos devoluciones y cambios dentro de los 30 días posteriores a la compra, siempre
            que los productos estén en su estado original y en el empaque sin abrir. Para solicitar
            una devolución o cambio, ponte en contacto con nosotros a través de WhatsApp, donde
            nuestro equipo te asistirá en el proceso.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">5. Garantía de Productos</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Todos los productos vendidos en <strong>Cel-Fii</strong> cuentan con garantía. La
            duración y cobertura de la garantía pueden variar dependiendo del producto y fabricante.
            Consulta con el representante de ventas en WhatsApp para conocer los detalles
            específicos.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            6. Limitación de Responsabilidad
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            <strong>Cel-Fii</strong> no se hace responsable de pérdidas o daños que resulten del uso
            de nuestro sitio web o de las interacciones de compra realizadas a través de WhatsApp.
            Las transacciones y la entrega de productos se gestionan en colaboración con nuestro
            equipo, pero los detalles finales son responsabilidad del usuario.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">7. Cambios en los Términos</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Nos reservamos el derecho de modificar estos términos en cualquier momento. Te
            recomendamos revisar periódicamente esta página para estar al tanto de cualquier cambio.
            El uso continuo del sitio después de la publicación de cambios implica la aceptación de
            los mismos.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">8. Contacto</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Si tienes alguna pregunta o inquietud sobre estos Términos de Servicio, no dudes en
            contactarnos a través de WhatsApp o enviando un correo electrónico a{" "}
            <a href="mailto:info@celfii.com" className="text-blue-600 underline">
              info@celfii.com
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
