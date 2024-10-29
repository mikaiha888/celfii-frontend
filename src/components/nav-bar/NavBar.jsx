import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import MobileMenuButton from "../mobile-menu/MobileMenuButton";
import Logo from "../logo/Logo";
import UserMenu from "../user-menu/UserMenu";
import Favourites from "../favourites/Favourites";
import NavigationLinks from "../navigation/NavigationLinks";

const initialNavigation = [
  { name: "Productos", href: "/productos", current: false },
  { name: "Nosotros", href: "/nosotros", current: false },
  { name: "Contacto", href: "/contacto", current: false },
];

const NavBar = () => {
  const [navigation, setNavigation] = useState(initialNavigation);
  const location = useLocation();

  useEffect(() => {
    setNavigation((prevNav) =>
      prevNav.map((item) =>
        location.pathname === item.href ? { ...item, current: true } : { ...item, current: false }
      )
    );
  }, [location]);

  const handleNavigation = (name) => {
    setNavigation((prevNav) =>
      prevNav.map((item) =>
        item.name === name ? { ...item, current: true } : { ...item, current: false }
      )
    );
  };

  return (
    <Disclosure
      as="nav"
      className="bg-gradient-to-r from-red-600 via-red-700 to-red-800 shadow-lg h-28">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-24">
          <MobileMenuButton />

          <div className="flex items-center flex-1 justify-center sm:justify-start space-x-6">
            <Logo />
            <div className="hidden sm:block mb-5">
              <NavigationLinks
                navigation={navigation}
                onLinkClick={handleNavigation}
                isMobile={false}
              />
            </div>
          </div>

          <div className="absolute inset-y-0 right-0 flex items-center space-x-4 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div className="hidden sm:block">
              <Favourites />
            </div>
            <UserMenu className="mr-4 sm:mr-0" />
          </div>
        </div>
      </div>

      <DisclosurePanel className="absolute top-20 left-0 right-0 z-50 mx-4 mt-2 rounded-lg bg-gradient-to-r from-red-600 via-red-700 to-red-800 p-4 shadow-lg sm:hidden">
        <div className="space-y-4">
          <NavigationLinks navigation={navigation} onLinkClick={handleNavigation} isMobile={true} />
          <div>
            <Favourites />
          </div>
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
};

export default NavBar;
