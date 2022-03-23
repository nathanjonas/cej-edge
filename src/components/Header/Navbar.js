import React from "react";
import { Link } from "react-router-dom";
import logo from '../../images/cejedge-logo.png';

export const Navbar = () => {
  return (
    <div className="topnav" id="myTopnav">
      <div className="nav-logo">
        <Link to="/"><img height={50} src={logo} alt="CEJ Edge LLC Logo" /></Link>
      </div>
      <div className="nav-links">
        <Link className="nav-link-span" to={"/"}>Home</Link>
        <Link className="nav-link-span" to="/what-we-do">What We Do</Link>
        <Link className="nav-link-span" to={"/contact-us"}>Contact Us</Link>
      </div>
    </div>
  );
};
