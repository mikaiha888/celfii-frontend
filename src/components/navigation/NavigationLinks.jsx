import { classNames } from "../../helpers/styleHelper";
import { Link, useNavigate } from "react-router-dom";

const NavigationLinks = ({ navigation, onLinkClick, isMobile = false }) => {
  const navigate = useNavigate();

  return (
    <div
      className={
        isMobile
          ? "px-2 pt-2 pb-3 space-y-1 bg-red-700 bg-opacity-90 rounded-md shadow-md"
          : "flex space-x-6 mt-5"
      }>
      {navigation.map((item) =>
        isMobile ? (
          <Link
            key={item.name}
            to={item.href}
            onClick={() => onLinkClick(item.name)}
            className={classNames(
              item.current
                ? "bg-red-900 text-white font-semibold"
                : "text-gray-100 hover:bg-red-800 hover:text-white",
              "block rounded-md px-3 py-2 text-base font-medium"
            )}>
            {item.name}
          </Link>
        ) : (
          <button
            key={item.name}
            onClick={() => {
              onLinkClick(item.name);
              navigate(item.href);
            }}
            aria-current={item.current ? "page" : undefined}
            className={classNames(
              item.current
                ? "bg-red-800 text-white"
                : "text-gray-300 hover:bg-red-700 hover:text-white",
              "rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200 ease-in-out shadow-md transform hover:scale-105",
              "hover:border hover:border-red-500"
            )}>
            {item.name}
          </button>
        )
      )}
    </div>
  );
};

export default NavigationLinks;
