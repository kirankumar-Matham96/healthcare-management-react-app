import { Link } from "react-router-dom";
import footerStyles from "./index.module.css";

export const Footer = () => {
  return (
    <footer className={footerStyles.footer}>
      <div className={footerStyles.footerUpperDiv}>
        <div>
          <h2>Healthcare Management System</h2>
          <p>Providing comprehensive care for your well-being</p>
        </div>
        <div>
          <h2>Quick Links</h2>
          <ul>
            <Link to="/home">
              <li>Home</li>
            </Link>
            <Link to="/services">
              <li>Services</li>
            </Link>
            <Link to="/aboutus">
              <li>About Us</li>
            </Link>
            <Link to="/contacts">
              <li>Contacts</li>
            </Link>
          </ul>
        </div>
        <div>
          <h2>Contact Information</h2>
          <ul>
            <li>Email: info@healthcare.come</li>
            <li>Phone: +91 888888888</li>
            <li>Address: 123 healthcare hospital, 500025</li>
          </ul>
        </div>
      </div>
      <div className={footerStyles.copyRight}>
        2024 Healthcare Management System. All rights reserved
      </div>
    </footer>
  );
};
