import { DisclosureButton } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const MobileMenuButton = () => (
  <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
    <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
      <span className="sr-only">Abrir menú principal</span>
      <Bars3Icon className="block h-6 w-6 group-data-[open]:hidden" aria-hidden="true" />
      <XMarkIcon className="hidden h-6 w-6 group-data-[open]:block" aria-hidden="true" />
    </DisclosureButton>
  </div>
);

export default MobileMenuButton;
