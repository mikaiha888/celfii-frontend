import logo from "../../assets/logo-celfii.png";
import { Link } from "react-router-dom";

const Logo = () => (
  <div className="flex items-center flex-shrink-0">
    <Link to="/">
      <img alt="Cel-Fii" src={logo} className="w-auto h-16" />
    </Link>
  </div>
);

export default Logo;
