import "./Footer.css";
import logo from "../../images/Logo.svg"

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-logo-wrapper">
        <img src={logo} alt="" className="footer-logo" />
        <small>Copyright Ⓒ 2022 Creators Commune. All Rights Reserved</small>
      </div>
    </footer>
  );
}
