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
          <li className="links-list"><a href="" className="navbar-links">About us</a></li>
          <li className="links-list"><a href="" className="navbar-links">Events</a></li>
          <li className="links-list"><a href="" className="navbar-links">Updates</a></li>
          <li className="links-list"><a href="" className="navbar-links">Our team</a></li>
          <li className="links-list"><a href="" className="navbar-links">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}
