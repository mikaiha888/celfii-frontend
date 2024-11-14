import { Link } from "react-router-dom";

import logo from "../../assets/logo-celfii2.png";

const ResponsiveMenu = ({ links }) => {
  return (
    <div className="flex flex-col h-full px-12 gap-y-12">
      <ul>
        <li>
          <Link to="/">
            <img alt="Cel-Fii" src={logo} className="w-auto h-12" />
          </Link>
        </li>
        {links &&
          links.map((link, index) => (
            <li
              key={index}
              className="transition-all duration-200 text-secondary hover:text-accent"
            >
              <Link to={link.link}>{link.name}</Link>
            </li>
          ))}
      </ul>
    </div>
  );
};
export default ResponsiveMenu;
