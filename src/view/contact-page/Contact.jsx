import { Facebook, Instagram, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contáctanos</h1>
      <p>
        Si tienes alguna pregunta o necesitas ayuda, no dudes en ponerte en contacto con nosotros.
        Estaremos encantados de asistirte.
      </p>

      <h2>Información de Contacto</h2>
      <p>WhatsApp: +54 123-456-7890</p>
      <a href="https://wa.me/541151489932" target="_blank" rel="noopener noreferrer">
        <Phone color="#00ff2a" />
      </a>
      <p>Email: contacto@celfii.com</p>
      <p>Dirección: Calle Falsa 123, Mendoza, Argentina</p>
      <p>Encuéntranos en la siguiente dirección:</p>
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d820.79326208388!2d-68.35480043034727!3d-34.62506699473024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9679081e37b0ae6d%3A0xab19bb885c203d96!2sCel-Fii!5e0!3m2!1ses-419!2sar!4v1729162892037!5m2!1ses-419!2sar"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <h2>Síguenos en Redes Sociales</h2>
      <div className="social-links">
        <a
          href="https://www.facebook.com/profile.php?id=100018858458649"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Facebook color="#1877F2" />
        </a>
        <a href="https://www.instagram.com/cel.fii/" target="_blank" rel="noopener noreferrer">
          <Instagram color="#E1306C" />
        </a>
      </div>
    </div>
  );
};

export default Contact;
