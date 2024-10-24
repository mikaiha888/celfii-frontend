import { classNames } from "../../helpers/styleHelper";
import { useNavigate } from "react-router-dom";

const NavigationLinks = ({ navigation, onLinkClick }) => {
  const navigate = useNavigate();

  return (
    <div className="hidden sm:ml-6 sm:block">
      <div className="flex space-x-4">
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
                ? "bg-gray-900 text-white"
                : "text-gray-300 hover:bg-gray-700 hover:text-white",
              "rounded-md px-3 py-2 text-sm font-medium"
            )}>
            {item.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default NavigationLinks;
