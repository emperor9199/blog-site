import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="left-area">
        <p>Copyright@2020ParthMaru</p>
      </div>
      <div className="middle-area">
        <p>Blog-Site</p>
      </div>
      <div className="right-area">
        <i className="fab fa-facebook-f social-icon"></i>
        <i className="fab fa-instagram social-icon"></i>
        <i className="fab fa-twitter social-icon"></i>
        <i className="fab fa-whatsapp social-icon"></i>
      </div>
    </div>
  );
};

export default Footer;
