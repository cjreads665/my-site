import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="flex justify-between w-full ">
      <NavLink to="/">
        <span className="font-freehand text-4xl w-1/6">CJ</span>
      </NavLink>
      <ul className="flex w-[90%]  justify-around items-center px-2">
        <NavLink
          to="/"
          style={({ isActive }) => ({
            color: isActive ? "#08ff17" : "",
          })}
        >
          <li>HOME</li>
        </NavLink>
        <a
          href="https://docs.google.com/document/d/1kJ8PMub-TzWSeGvC_2reHRALjgIuH6_DDsa37xt-c7w/edit?usp=sharing"
          target="_blank"
        >
          <li>RESUME</li>
        </a>
        <NavLink
          to="/projects"
          style={({ isActive }) => ({
            color: isActive ? "#08ff17" : "",
          })}
        >
          <li>PROJECTS</li>
        </NavLink>
        <NavLink
          to="/about"
          style={({ isActive }) => ({
            color: isActive ? "#08ff17" : "",
          })}
        >
          <li>ABOUT</li>
        </NavLink>
      </ul>
    </nav>
  );
};

export default Navbar;
