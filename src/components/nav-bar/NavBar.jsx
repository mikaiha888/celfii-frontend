import { useState } from "react";
import { Link } from "react-router-dom";
import { Heart, ShoppingCart, Menu } from "lucide-react";

import logo from "../../assets/logo-celfii.png";

const NavBar = () => {
  const [links] = useState([
    { name: "Productos", href: "/productos", current: false },
    { name: "Nosotros", href: "/nosotros", current: false },
    { name: "Contacto", href: "/contacto", current: false },
  ]);

  return (
    <>
      <nav>
        <div className="container flex items-center justify-between py-4">
          <div>
            <img alt="Cel-Fii" src={logo} className="w-auto h-12" />
          </div>
          <div className="hidden md:block">
            <ul className="flex items-center gap-6 text-gray-600">
              {links.map((item) => (
                <li
                  key={item.name}
                  className="inline-block px-3 py-1 font-semibold duration-200 hover:text-primary"
                >
                  <Link href={item.link}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 text-2xl duration-200 rounded-full hover:bg-primary hover:text-white">
              <Heart />
            </button>
            <button className="p-2 text-2xl duration-200 rounded-full hover:bg-primary hover:text-white">
              <ShoppingCart />
            </button>
            <button className="hidden px-6 py-2 font-semibold duration-200 border-2 rounded-md hover:bg-primary text-primary hover:text-white border-primary md-block">
              Login
            </button>
            <button className="p-2 text-2xl duration-200 rounded-full hover:bg-primary hover:text-white md:hidden">
              <Menu className="text-4xl" />
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};
export default NavBar;
