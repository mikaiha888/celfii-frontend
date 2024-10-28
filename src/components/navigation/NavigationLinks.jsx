import { classNames } from "../../helpers/styleHelper";
import { useNavigate } from "react-router-dom";

const NavigationLinks = ({ navigation, onLinkClick }) => {
  const navigate = useNavigate();

  return (
    <div className="hidden sm:ml-8 sm:block">
      <div className="flex space-x-6 mt-5">
        {navigation.map((item) => (
          <button
            key={item.name}
            onClick={() => {
              onLinkClick(item.name);
              navigate(item.href);
            }}
            aria-current={item.current ? "page" : undefined}
            className={classNames(
              item.current
                ? "bg-red-800 text-white" // Fondo bordó sin degradado
                : "text-gray-300 hover:bg-red-700 hover:text-white",
              "rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200 ease-in-out shadow-md transform hover:scale-105",
              "hover:border hover:border-red-500"
            )}>
            {item.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default NavigationLinks;
