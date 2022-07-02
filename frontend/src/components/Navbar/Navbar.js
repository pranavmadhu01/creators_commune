import React, { useState } from "react";

import "./Navbar.css";

import logo from "../../images/Logo.svg";
import { FaHamburger } from "react-icons/fa";

export default function () {
  const [hamburger, setHamburger] = useState(false);
  function activehamburger(e) {
    setHamburger(!hamburger);
  }
  function deactivatehamburger(e){
    setHamburger(!hamburger)
  }
  return (
    <header className="header">
      <FaHamburger className="hamburger-icon" onClick={activehamburger} />
      <div className="logo-wrapper">
        <img src={logo} alt="logo of creators commune" />
      </div>
      <nav className={"navbar" + (hamburger ? "  navbar-active" : "")} onClick={deactivatehamburger}>
        <ul className="navbar-links-list-wrapper">
          <li className="links-list">
            <a href="#about" className="navbar-links" onClick={deactivatehamburger}>
              About us
            </a>
          </li>
          <li className="links-list">
            <a href="#events" className="navbar-links" onClick={deactivatehamburger}>
              Events
            </a>
          </li>
          <li className="links-list">
            <a href="#team" className="navbar-links" onClick={deactivatehamburger}>
              Our team
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
