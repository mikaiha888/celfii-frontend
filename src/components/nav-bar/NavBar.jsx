import { useState, useEffect } from "react";
import { Disclosure } from "@headlessui/react";
import { useNavigate, useLocation } from "react-router-dom";

import NavItems from "./NavItems";

const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [links, setLinks] = useState([
    { name: "Productos", href: "productos", current: false },
    { name: "Nosotros", href: "nosotros", current: false },
    { name: "Contacto", href: "contacto", current: false },
  ]);

  useEffect(() => {
    setLinks((prevLink) =>
      prevLink.map((item) =>
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
      <div className="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <NavItems links={links} onClick={handleClick} />
      </div>
    </Disclosure>
  );
};

export default NavBar;
