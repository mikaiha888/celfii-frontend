import React, { useState } from "react";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import MobileMenuButton from "../mobile-menu/MobileMenuButton";
import Logo from "../logo/Logo";
import NavigationLinks from "../navigation/NavigationLinks";
import NotificationsButton from "../notifications/NotificationsButton";
import UserMenu from "../user-menu/UserMenu";
import { classNames } from "../../utils/classNames";

const initialNavigation = [
  { name: "Inicio", href: "inicio", current: false },
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
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <MobileMenuButton />
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <Logo />
            <NavigationLinks navigation={navigation} onLinkClick={handleNavigation} />
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <NotificationsButton />
            <UserMenu />
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
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
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
};

export default NavBar;
