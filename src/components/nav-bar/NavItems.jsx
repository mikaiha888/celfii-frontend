import { classNames } from "../../helpers/styleHelper";
import { Heart, ShoppingCart } from "lucide-react";

import Logo from "../logo/Logo";
import UserMenu from "../user-menu/UserMenu";
import NavIconButton from "./nav-icon-button/NavIconButton";

const NavItems = ({ links, onClick }) => {
  return (
    <>
      <div className="flex items-center justify-center flex-1 space-x-6 md:justify-start">
        <Logo />
        <div className="hidden md:flex">
          {links.map((item) => (
            <button
              key={item.name}
              onClick={() => onClick(item.name, item.href)}
              aria-current={item.current ? "page" : undefined}
              className={classNames(
                item.current
                  ? "bg-red-800 text-white"
                  : "text-gray-300 hover:bg-red-700 hover:text-white",
                "rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200 ease-in-out shadow-md transform hover:scale-105",
                "hover:border hover:border-red-500"
              )}
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>
      <div className="absolute inset-y-0 right-0 flex items-center space-x-4 md:static md:inset-auto md:ml-6 md:pr-0">
        <div className="items-center hidden gap-4 md:flex">
          <NavIconButton to="/favourites" icon={<Heart />} tooltipText="Favoritos" />
          <NavIconButton to="/cart" icon={<ShoppingCart />} tooltipText="Mi Carrito" />
        </div>
          <UserMenu className="mr-4 md:mr-0" />
      </div>
    </>
  );
};

export default NavItems;
