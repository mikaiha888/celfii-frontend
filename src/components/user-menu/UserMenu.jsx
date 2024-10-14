import React from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { classNames } from "../../utils/classNames";
import logoLocal from '../../assets/logo-local.jpg'
import { Link } from "react-router-dom";

const UserMenu = () => (
  <Menu as="div" className="relative ml-3">
    <div>
      <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
        <span className="sr-only">Abrir menú usuario</span>
        <img
          className="h-8 w-8 rounded-full"
          src={logoLocal}
          alt=""
        />
      </MenuButton>
    </div>
    <MenuItems className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
      <MenuItem>
        {({ active }) => (
          <a
            href="perfil"
            className={classNames(
              active ? "bg-gray-100" : "",
              "block px-4 py-2 text-sm text-gray-700"
            )}>
            Tu perfil
          </a>
        )}
      </MenuItem>
      <MenuItem>
        {({ active }) => (
          <a
            href="configuracion"
            className={classNames(
              active ? "bg-gray-100" : "",
              "block px-4 py-2 text-sm text-gray-700"
            )}>
            Configuración
          </a>
        )}
      </MenuItem>
      <MenuItem>
        {({ active }) => (
          <a
            href="login"
            className={classNames(
              active ? "bg-gray-100" : "",
              "block px-4 py-2 text-sm text-gray-700"
            )}>
            Cerrar sesión
          </a>
        )}
      </MenuItem>
    </MenuItems>
  </Menu>
);

export default UserMenu;
