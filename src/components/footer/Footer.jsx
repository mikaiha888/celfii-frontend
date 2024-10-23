import { Link } from "react-router-dom";
import { classNames } from "../../helpers/styleHelper";
import { Facebook, Instagram } from "lucide-react";

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
    <footer className="py-8 mt-8 bg-gray-800">
      <div className="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between pb-8 border-b border-gray-700 sm:flex-row">
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
          <div className="flex mt-4 space-x-4 sm:mt-0">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-gray-400 hover:text-white">
                {social.icon}
              </a>
            ))}
          </div>
        </div>
        <div className="mt-8 text-sm text-center text-gray-400">
          &copy; {new Date().getFullYear()} Cel-Fii. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
