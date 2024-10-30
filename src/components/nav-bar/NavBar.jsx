import { useState, useEffect } from "react";
import { Disclosure } from "@headlessui/react";
import { useLocation, useNavigate } from "react-router-dom";

import NavItems from "./NavItems";
import NavMobileMenu from "./NavMobileMenu";
import MobileMenuButton from "../mobile-menu/MobileMenuButton";

const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [links, setLinks] = useState([
    { name: "Productos", href: "productos", current: false },
    { name: "Nosotros", href: "nosotros", current: false },
    { name: "Contacto", href: "contacto", current: false },
  ]);

  useEffect(() => {
    setLinks((prevLinks) =>
      prevLinks.map((item) =>
        location.pathname === item.href ? { ...item, current: true } : { ...item, current: false }
      )
    );
  }, [location]);

  const handleClick = (name, href) => {
    setLinks(
      links.map((item) => ({
        ...item,
        current: item.name === name,
      }))
    );
    navigate(href);
  };

  return (
    <Disclosure
      as="nav"
      className="shadow-lg bg-gradient-to-r from-red-600 via-red-700 to-red-800 h-28"
    >
      <div className="px-4 mx-auto max-w-screen-2xl md:px-6">
        <div className="relative flex items-center justify-between h-24">
          <MobileMenuButton />
          <NavItems links={links} onClick={handleClick} />
          <NavMobileMenu links={links} onClick={handleClick} />
        </div>
      </div>
    </Disclosure>
  );
};

export default NavBar;
