import "./Navbar.css";
import logo from "../../images/Logo.svg";

export default function () {
  return (
    <header className="header">
      <div className="logo-wrapper">
        <img src={logo} alt="logo of creators commune" />
      </div>
      <nav className="navbar">
        <ul className="navbar-links-list-wrapper">
          <li className="links-list"><a href="" className="navbar-links">ABOUT US</a></li>
          <li className="links-list"><a href="" className="navbar-links">EVENTS</a></li>
          <li className="links-list"><a href="" className="navbar-links">UPDATES</a></li>
          <li className="links-list"><a href="" className="navbar-links">OUR TEAM</a></li>
          <li className="links-list"><a href="" className="navbar-links">CONTACT</a></li>
        </ul>
      </nav>
    </header>
  );
}
