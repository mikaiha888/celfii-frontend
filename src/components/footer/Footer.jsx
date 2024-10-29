import { Link } from "react-router-dom";
import { classNames } from "../../helpers/styleHelper";
import { Facebook, Instagram } from "lucide-react";
import Logo from "../logo/Logo";

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
    <footer className="bg-red-800 py-8 mt-8">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center border-b border-red-800 pb-8">
          <button
            onClick={scrollToTop}
            className="transform hover:scale-105 transition duration-200">
            <Logo />
          </button>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            {footerLinks.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={classNames(
                  item.current ? "text-white" : "text-gray-100 hover:text-red-200",
                  "text-sm font-medium hover:underline transition duration-200"
                )}>
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
                className="relative group flex items-center justify-center w-10 h-10 text-2xl text-gray-100 transition-transform duration-300 ease-in-out hover:text-white">
                <span className="absolute inset-0 w-full h-full bg-transparent rounded-full border-2 border-transparent transition-all duration-300 ease-in-out group-hover:border-red-200 group-hover:scale-110"></span>
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
