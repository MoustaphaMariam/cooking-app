import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <ul>
        <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
          <li>
            Listing<i className="fa fa-home home"></i>
          </li>
        </NavLink>
        <NavLink
          to="/favorites"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>Favorites</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;
