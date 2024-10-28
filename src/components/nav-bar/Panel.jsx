// import { Link } from "react-router-dom";
// import { classNames } from "../../helpers/styleHelper";
// import { DisclosureButton, DisclosurePanel } from "@headlessui/react";

// import Favourites from "../favourites/Favourites";

// const Panel = () => {
//   return (
//     <DisclosurePanel className="sm:hidden">
//         <div className="px-2 pt-2 pb-3 space-y-1">
//           {navigation.map((item) => (
//             <DisclosureButton
//               key={item.name}
//               as={Link}
//               to={item.href}
//               aria-current={item.current ? "page" : undefined}
//               className={classNames(
//                 item.current
//                   ? "bg-gray-900 text-white"
//                   : "text-gray-300 hover:bg-gray-700 hover:text-white",
//                 "block rounded-md px-3 py-2 text-base font-medium"
//               )}>
//               {item.name}
//             </DisclosureButton>
//           ))}
//           <Favourites/>
//         </div>
//       </DisclosurePanel>
//   )
// }
// export default Panel