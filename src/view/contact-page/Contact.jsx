import { Facebook, Instagram, Phone } from "lucide-react";

const Contact = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-8 space-y-6">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Contáctanos</h1>
      <p className="text-lg text-gray-700 leading-relaxed">
        Si tienes alguna pregunta o necesitas ayuda, no dudes en ponerte en contacto con nosotros.
        Estaremos encantados de asistirte.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-2">Información de Contacto</h2>
      <p className="text-lg text-gray-700">WhatsApp: +54 123-456-7890</p>
      <a
        href="https://wa.me/541151489932"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center space-x-2 text-green-600 hover:text-green-700 transition">
        <Phone size={24} />
        <span className="text-lg font-semibold">Enviar mensaje por WhatsApp</span>
      </a>
      <p className="text-lg text-gray-700">Email: contacto@celfii.com</p>
      <p className="text-lg text-gray-700">Dirección: Calle Falsa 123, Mendoza, Argentina</p>
      <p className="text-lg text-gray-700">Encuéntranos en la siguiente dirección:</p>

      <div className="mt-4 rounded overflow-hidden shadow-lg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d820.79326208388!2d-68.35480043034727!3d-34.62506699473024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9679081e37b0ae6d%3A0xab19bb885c203d96!2sCel-Fii!5e0!3m2!1ses-419!2sar!4v1729162892037!5m2!1ses-419!2sar"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Ubicación de Cel-Fii"></iframe>
      </div>

      <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Síguenos en Redes Sociales</h2>
      <div className="flex space-x-4 text-gray-700">
        <a
          href="https://www.facebook.com/profile.php?id=100018858458649"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-600 transition">
          <Facebook size={32} />
        </a>
        <a
          href="https://www.instagram.com/cel.fii/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-500 transition">
          <Instagram size={32} />
        </a>
      </div>
    </div>
  );
};

export default Contact;
