import video from '../../assets/video-nosotros.mp4'

const AboutUs = () => {
  return (    
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-8">      
      <video
        className="w-full rounded-lg mb-6"
        controls
        autoPlay
        loop
        muted
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Sobre Nosotros</h1>
      <p className="text-lg text-gray-700 mb-4 leading-relaxed">
        Bienvenido a <strong className="text-blue-600">Cel-Fii</strong>, tu tienda de confianza para
        la compra de celulares, repuestos, accesorios y mucho más. Desde nuestra fundación en{" "}
        <span className="font-semibold">[año]</span>, hemos trabajado arduamente para ofrecer los
        mejores productos tecnológicos y servicios especializados.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Misión y Visión</h2>
      <p className="text-lg text-gray-700 mb-4 leading-relaxed">
        Nuestra misión es proporcionar productos de alta calidad a precios accesibles, asegurando la
        satisfacción total de nuestros clientes. Queremos ser el líder en la venta de dispositivos
        móviles y accesorios en la región.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Equipo de Trabajo</h2>
      <p className="text-lg text-gray-700 mb-4 leading-relaxed">
        Contamos con un equipo de profesionales dedicados que están siempre listos para ayudarte.
        Nuestros técnicos especializados en reparación de celulares garantizan un servicio rápido y
        eficiente.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Servicios Ofrecidos</h2>
      <ul className="list-disc list-inside text-lg text-gray-700 mb-4 space-y-2">
        <li>Venta de celulares de última generación</li>
        <li>Reparación de dispositivos móviles</li>
        <li>Venta de accesorios y repuestos</li>
        <li>Asesoría en tecnología móvil</li>
      </ul>

      <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Horario de Atención</h2>
      <p className="text-lg text-gray-700 leading-relaxed">
        Lunes a Viernes: <span className="font-semibold">9:00 AM - 6:00 PM</span>
        <br />
        Sábados: <span className="font-semibold">9:00 AM - 1:00 PM</span>
      </p>
    </div>
  );
};

export default AboutUs;
