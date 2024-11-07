import { Phone } from "lucide-react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { socialMediaIcons } from "../../components/footer/menu";
import SocialIcons from "../../components/footer/SocialIcons";

const Reparaciones = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/reparaciones") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-8 space-y-6">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Servicio de Reparaciones Profesionales</h1>
      <p className="text-lg text-gray-700 leading-relaxed">
        En Cel-Fii, ofrecemos un servicio de reparación especializado para una amplia variedad de dispositivos
        electrónicos. Nuestro equipo está formado por técnicos capacitados que utilizan repuestos de alta calidad
        para garantizar la durabilidad y el rendimiento de tus dispositivos.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-2">Tipos de Reparaciones que Realizamos</h2>
      <ul className="list-disc pl-5 text-gray-700 mb-8">
        <li>Reparación de pantallas de celulares</li>
        <li>Reemplazo de baterías de smartphones y laptops</li>
        <li>Reparación de componentes internos de computadoras y laptops</li>
        <li>Reparación y limpieza de sistemas de enfriamiento de computadoras</li>
        <li>Diagnóstico y reparaciones de software (sistemas operativos, aplicaciones)</li>
        <li>Reparación de circuitos y conexiones en dispositivos electrónicos</li>
      </ul>

      <p className="text-lg text-gray-700">
        No importa el problema, tenemos la experiencia y los recursos necesarios para devolverle a tus dispositivos su
        máximo rendimiento. Si necesitas más información o quieres consultar sobre una reparación, no dudes en
        contactarnos.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-2">Contáctanos por WhatsApp</h2>
      <p className="text-lg text-gray-700">
        Si deseas más detalles sobre nuestros servicios o tienes alguna consulta, estamos disponibles en WhatsApp para
        responderte de manera rápida y eficiente.
      </p>
      <a
        href="https://wa.me/5492604545982"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center space-x-2 text-green-600 hover:text-green-700 transition"
      >
        <Phone size={24} />
        <span className="text-lg font-semibold">Enviar mensaje por WhatsApp</span>
      </a>

      <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Nuestra Ubicación</h2>
      <p className="text-lg text-gray-700">
        Visítanos en nuestra tienda para hacer la reparación de tus dispositivos. Aquí te dejamos la dirección de nuestra
        tienda:
      </p>
      
      <div className="mt-4 rounded overflow-hidden shadow-lg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d820.79326208388!2d-68.35480043034727!3d-34.62506699473024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9679081e37b0ae6d%3A0xab19bb885c203d96!2sCel-Fii!5e0!3m2!1ses-419!2sar!4v1729162892037!5m2!1ses-419!2sar"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Ubicación de Cel-Fii"
        ></iframe>
      </div>

      <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Síguenos en Redes Sociales</h2>
      <SocialIcons icons={socialMediaIcons} customClass="text-gray-700 hover:text-blue-600" />
    </div>
  );
};

export default Reparaciones;
