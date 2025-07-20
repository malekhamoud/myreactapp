import React from "react";
import logo from "../../assets/Screenshot.png";
import "./navpar.css";

function extractVideoId(url) {
  // Handles both youtu.be and youtube.com/watch?v= URLs
  const match = url.match(/(?:v=|\/)([0-9A-Za-z_-]{11})/);
  return match ? match[1] : null;
}

function Navpar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Logo" className="logo" />
      </div>

      <div className="navbar-right">
        <ul className="navbar-menu">
          <li className="menu-item">Pricing</li>
          <li className="menu-item">Blog</li>
        </ul>
        <button className="quote-button">Do more with video .. </button>
      </div>
    </nav>
  );
}

export default Navpar;
