import React from "react";
import { Link, NavLink } from "react-router";

const Header = () => {
  return (
    <div>
      <h3>This is Header</h3>
      <nav className="my-9 ">
        <NavLink to="/" className="p-2">
          Home
        </NavLink>
        <NavLink to="/laptops" className="p-2">
          Laptops
        </NavLink>
        <NavLink to="/mobiles" className="p-2">
          Mobiles
        </NavLink>
        <NavLink to="/users" className="p-2">
          Users
        </NavLink>
        <NavLink to="/users2" className="p-2">
          Users2
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;
