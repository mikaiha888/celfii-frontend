import { classNames } from "../../utils/classNames";
import { Facebook, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

const footerLinks = [
  { name: "Política de privacidad", href: "/politica-privacidad", current: false },
  { name: "Términos de servicio", href: "/terminos-servicio", current: false },
  { name: "Contáctanos", href: "/contacto", current: false },
  { name: "Preguntas frecuentes", href: "/faq", current: false },
];

const socialLinks = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/profile.php?id=100018858458649",
    icon: <Facebook color="#1877F2" />,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/cel.fii/",
    icon: <Instagram color="#E1306C" />,
  },
];

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-8 mt-8">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center border-b border-gray-700 pb-8">
          <div className="flex space-x-4">
            {footerLinks.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={classNames(
                  item.current ? "text-white" : "text-gray-400 hover:text-white",
                  "text-sm font-medium"
                )}>
                {item.name}
              </Link>
            ))}
          </div>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white text-2xl">
                {social.icon}
              </a>
            ))}
          </div>
        </div>
        <div className="mt-8 text-gray-400 text-sm text-center">
          &copy; {new Date().getFullYear()} Cel-Fii. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
