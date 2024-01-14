import React from "react";
import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <header className="flex justify-between items-center mt-7  ">
      <h1 className="text-red-500 text-4xl font-poppins font-['Brumery Demo'] ">
        <Link to="/">Najar</Link>
      </h1>
      <nav>
        <div className="w-[31px] cursor-pointer h-5 flex-col justify-start items-end gap-1.5 inline-flex">
          <div className="w-11 h-[0px] border border-white"></div>
          <div className="w-9 h-[0px] border border-white"></div>
          <div className="w-7 h-[0px] border border-white"></div>
        </div>

        {/* <ul classNameName="flex gap-5">
          <li>
            <NavLink to="about">About Me</NavLink>
          </li>
          <li>
            <NavLink to="portfolio">Portfolio</NavLink>
          </li>
          <li>
            <NavLink to="hire">Hire Me</NavLink>
          </li>
        </ul> */}
      </nav>
    </header>
  );
};

export default Nav;
