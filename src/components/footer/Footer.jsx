import { Link } from "react-router-dom";
import { classNames } from "../../helpers/styleHelper";
import { Facebook, Instagram } from "lucide-react";

import logo from "../../assets/logo-celfii.png";

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
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <footer className="py-8 mt-8 bg-red-800">
      <div className="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between pb-8 border-b border-red-800 sm:flex-row">
          <button
            onClick={scrollToTop}
            className="transition duration-200 transform hover:scale-105"
          >
            <img alt="Cel-Fii" src={logo} className="w-auto h-12" />
          </button>
          <div className="flex mt-4 space-x-6 sm:mt-0">
            {footerLinks.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={classNames(
                  item.current ? "text-white" : "text-gray-100 hover:text-red-200",
                  "text-sm font-medium hover:underline transition duration-200"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="flex mt-4 space-x-6 sm:mt-0">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex items-center justify-center w-10 h-10 text-2xl text-gray-100 transition-transform duration-300 ease-in-out group hover:text-white"
              >
                <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-in-out bg-transparent border-2 border-transparent rounded-full group-hover:border-red-200 group-hover:scale-110"></span>
                <span className="z-10 transition-transform duration-300 ease-in-out group-hover:scale-125">
                  {social.icon}
                </span>
              </a>
            ))}
          </div>
        </div>
        <div className="mt-8 text-sm text-center text-gray-200">
          &copy; {new Date().getFullYear()} Cel-Fii. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
