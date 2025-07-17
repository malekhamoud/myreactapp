import React from "react";
import logo from "../../assets/Screenshot.png";

import "./navpar.css"; // or whatever your CSS file is called

function Navpar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Logo" className="logo" />
        <span className="brand-name">Positivus</span>
      </div>

      <ul className="navbar-menu">
        <li className="menu-item">About us</li>
        <li className="menu-item">Services</li>
        <li className="menu-item">Use Cases</li>
        <li className="menu-item">Pricing</li>
        <li className="menu-item">Blog</li>
      </ul>

      <button className="quote-button">Request a quote</button>
    </nav>
  );
}

export default Navpar;
