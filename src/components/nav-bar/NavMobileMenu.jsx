import { Link } from "react-router-dom";
import { classNames } from "../../helpers/styleHelper";
import { Heart, ShoppingCart } from "lucide-react";
import { DisclosurePanel } from "@headlessui/react";

import NavIconButton from "./nav-icon-button/NavIconButton";

const NavMobileMenu = ({ links, onClick }) => {
  return (
    <DisclosurePanel className="absolute left-0 right-0 z-50 p-4 mx-4 mt-2 rounded-lg shadow-lg top-20 bg-gradient-to-r from-red-600 via-red-700 to-red-800 sm:hidden">
        <div className="space-y-4">
        {links.map((item) => (
          <Link
            key={item.name}
            to={item.href}
            onClick={() => onClick(item.name)}
            className={classNames(
              item.current
                ? "bg-red-900 text-white font-semibold"
                : "text-gray-100 hover:bg-red-800 hover:text-white",
              "block rounded-md px-3 py-2 text-base font-medium"
            )}
          >
            {item.name}
          </Link>
        ))}
        <div className="flex gap-4">
          <NavIconButton to="/favourites" icon={<Heart />} tooltipText="Favoritos" />
          <NavIconButton to="/cart" icon={<ShoppingCart />} tooltipText="Mi Carrito" />
        </div>
      </div>
    </DisclosurePanel>
  );
};
export default NavMobileMenu;
