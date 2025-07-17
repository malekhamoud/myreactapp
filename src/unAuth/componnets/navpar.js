import React from "react";
import logo from "../../assets/Screenshot.png";

import "./navpar.css"; // or whatever your CSS file is called

function Navpar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Logo" className="logo" />
        
      </div>

      <ul className="navbar-menu">
        
        <li className="menu-item">Pricing</li>
        <li className="menu-item">Blog</li>
      </ul>

      <button className="quote-button">Do more with video</button>
    </nav>
  );
}

export default Navpar;
