import { useState } from "react";
import { Link } from "react-router-dom";
import { classNames } from "../../helpers/styleHelper";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";

import Logo from "../logo/Logo";
import SearchBar from "../filter/SearchBar";
import Favourites from "../favourites/Favourites";

const initialNavigation = [
  { name: "Productos", href: "productos", current: false },
  { name: "Nosotros", href: "nosotros", current: false },
  { name: "Contacto", href: "contacto", current: false },
];

const NavBar = () => {
  const [navigation, setNavigation] = useState(initialNavigation);

  const handleNavigation = (name) => {
    setNavigation((prevNav) =>
      prevNav.map((item) =>
        item.name === name ? { ...item, current: true } : { ...item, current: false }
      )
    );
  };
  return (
    <Disclosure as="nav" className="bg-gray-800">
      <div className="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <MobileMenuButton />
          <div className="flex items-center justify-center flex-1 sm:items-stretch sm:justify-start">
            <Logo />
            <NavigationLinks navigation={navigation} onLinkClick={handleNavigation} />
            <Favourites />
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 space-x-4 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <SearchBar />
            <UserMenu />
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as={Link}
              to={item.href}
              aria-current={item.current ? "page" : undefined}
              className={classNames(
                item.current
                  ? "bg-gray-900 text-white"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white",
                "block rounded-md px-3 py-2 text-base font-medium"
              )}>
              {item.name}
            </DisclosureButton>
          ))}
          <Favourites/>
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
};

export default NavBar;
