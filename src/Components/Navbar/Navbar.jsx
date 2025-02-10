import React from "react";
import { NavbarStyled } from "./Navbar.Styled";
import { NavLink } from "react-router-dom";

export const Navbar = ({ isOpen }) => {
  return (
    <NavbarStyled isOpen={isOpen}>
      <ul>
        <li>
          <NavLink to="/">Alle</NavLink>
        </li>
        <li>
          <NavLink to="/category/Indland">Indland</NavLink>
        </li>
        <li>
          <NavLink to="/category/Udland">Udland</NavLink>
        </li>
        <li>
          <NavLink to="/category/Teknologi">Teknologi</NavLink>
        </li>
        <li>
          <NavLink to="/category/Sport">Sport</NavLink>
        </li>
        <li>
          <NavLink to="/category/Politik">Politik</NavLink>
        </li>
        <li>
          <NavLink to="/category/Samfund">Samfund</NavLink>
        </li>
      </ul>
    </NavbarStyled>
  );
};