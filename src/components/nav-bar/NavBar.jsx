import { useState } from "react";
import { Disclosure } from "@headlessui/react";
import { useNavigate } from "react-router-dom";

import NavItems from "./NavItems";

const NavBar = () => {
  const navigate = useNavigate();
  const [links, setLinks] = useState([
    { name: "Productos", href: "productos", current: false },
    { name: "Nosotros", href: "nosotros", current: false },
    { name: "Contacto", href: "contacto", current: false },
  ]);

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
    <Disclosure as="nav" className="shadow-lg bg-gradient-to-r from-red-600 via-red-700 to-red-800 h-28">
      <div className="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <NavItems links={links} onClick={handleClick} />
      </div>
    </Disclosure>
  );
};

export default NavBar;
