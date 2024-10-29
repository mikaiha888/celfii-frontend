import { Link } from "react-router-dom";
import { classNames } from "../../helpers/styleHelper";
import { DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { Heart, ShoppingCart } from "lucide-react";

import Logo from "../logo/Logo";
import SearchBar from "../filter/SearchBar";
import UserMenu from "../user-menu/UserMenu";
import NavIconButton from "./nav-icon-button/NavIconButton";
import MobileMenuButton from "../mobile-menu/MobileMenuButton";

const NavItems = ({ links, onClick }) => {
  return (
    <>
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-24">
          <MobileMenuButton />

          <div className="flex items-center flex-1 space-x-6 sm:items-stretch sm:justify-start">
            <Logo />
            <div className="flex hidden mt-5 space-x-6 sm:block sm:ml-6">
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
          <SearchBar />
          <NavIconButton to="/favourites" icon={<Heart />} tooltipText="Favoritos" />
          <NavIconButton to="/cart" icon={<ShoppingCart />} tooltipText="Mi Carrito" />
          <UserMenu />
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="px-2 pt-2 pb-3 space-y-1">
          {links.map((item) => (
            <DisclosureButton
              key={item.name}
              as={Link}
              to={item.href}
              onClick={() => onClick(item.name, item.href)}
              aria-current={item.current ? "page" : undefined}
              className={classNames(
                item.current
                  ? "bg-gray-900 text-white"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white",
                "block rounded-md px-3 py-2 text-base font-medium"
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
          <NavIconButton to="/favourites" icon={<Heart />} tooltipText="Favoritos" />
          <NavIconButton to="/cart" icon={<ShoppingCart />} tooltipText="Mi Carrito" />
        </div>
      </DisclosurePanel>
    </>
  );
};

export default NavItems;
