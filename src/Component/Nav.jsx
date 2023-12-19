import React from "react";
import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="flex justify-between items-center mt-3  ">
      <h1 className="text-4xl font-bold gradient-text z-20">
        <div className="floating-element bg-gradient-to-br from-main to-second w-96 h-96 rounded-full opacity-50 absolute -top-44 -left-20"></div>
        <Link to="/">AS</Link>
      </h1>
      <ul className="flex gap-5">
        <li>
          <NavLink to="about">About Me</NavLink>
        </li>
        <li>
          <NavLink to="portfolio">Portfolio</NavLink>
        </li>
        <li>
          <NavLink to="hire">Hire Me</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
