import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="px-20">
      <div>
        <NavLink to="/home">
          <h1 className="font-bold text-2xl">Learn Programming</h1>
        </NavLink>
      </div>

      <div className="right-side-nav">
        <NavLink to="/home" activeClassName="active" className="nav-item">
          Home
        </NavLink>
        <NavLink to="/aboutUs" activeClassName="active" className="nav-item">
          About Us
        </NavLink>
        <NavLink to="/courses" activeClassName="active" className="nav-item">
          Courses
        </NavLink>
        <NavLink
          exact
          to="/teachers"
          activeClassName="active"
          className="nav-item"
        >
          Teachers
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
