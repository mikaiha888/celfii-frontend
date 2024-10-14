import React from "react";
import logo from "../../assets/logo-celfii.png";
import { Link } from "react-router-dom";

const Logo = () => (
  <div className="flex flex-shrink-0 items-center">
    <Link to="/inicio">
      <img alt="Cel-Fii" src={logo} className="h-8 w-auto" />
    </Link>
  </div>
);

export default Logo;
