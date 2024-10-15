import { classNames } from "../../utils/classNames";
import logoX from "../../assets/logo-x.png";
import logoF from "../../assets/logo-face.png";
import logoI from "../../assets/Instagram_icon.png";

const footerLinks = [
  { name: "Política de privacidad", href: "#", current: false },
  { name: "Términos de servicio", href: "#", current: false },
  { name: "Contáctanos", href: "#", current: false },
  { name: "Preguntas frecuentes", href: "#", current: false },
];

const socialLinks = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/profile.php?id=100018858458649",
    icon: logoF,
  },
  { name: "Twitter", href: "https://x.com/Cel_fii", icon: logoX },
  {
    name: "Instagram",
    href: "https://www.instagram.com/cel.fii/",
    icon: logoI,
  },
];

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-8 mt-8">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        {/* Links Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center border-b border-gray-700 pb-8">
          <div className="flex space-x-4">
            {footerLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={classNames(
                  item.current ? "text-white" : "text-gray-400 hover:text-white",
                  "text-sm font-medium"
                )}>
                {item.name}
              </a>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex space-x-4 mt-4 sm:mt-0">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white text-2xl">
                <img
                  src={social.icon}
                  alt={social.name}
                  className="w-8 h-8" // Ajusta el tamaño de los íconos
                />
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-gray-400 text-sm text-center">
          &copy; {new Date().getFullYear()} Cel-Fii. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
