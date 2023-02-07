import React from "react";
import "./footer.css";
import {
  FaPinterestSquare,
  FaInstagramSquare,
  FaTwitterSquare,
  FaFacebookSquare,
} from "react-icons/fa";
import { GiHouse} from "react-icons/gi";
function Footer() {
  return (
    <div className="footer">
      <div className="top">
        <div className="footerLogo">
        <div className="logo-wrapper"><span className="home-icon"><GiHouse/></span>DECORTALE</div>
        </div>
        <div className="footerMenu">
          <ul className="fm-links">
            <li><a href="#">Company</a></li>
            <li><a href="#">Job</a></li>
            <li><a href="#">Shop</a></li>
            <li><a href="#">Products</a></li>
          </ul>
        </div>
      </div>
<hr />
      <div className="bottom">
        <div className="copyright">© 2022 Decortale All right reserved</div>
        <div className="social">
          <FaFacebookSquare className="sm-icon fsm-icon" />
          <FaInstagramSquare className="sm-icon fsm-icon" />
          <FaPinterestSquare className="sm-icon fsm-icon" />
          <FaTwitterSquare className="sm-icon fsm-icon" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
