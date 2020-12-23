import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [navColor, setNavColor] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 250) {
      setNavColor(true);
    } else {
      setNavColor(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <>
      <nav
        className={`${
          navColor
            ? "navbar navbar-expand-lg nav-main active fixed-top "
            : "navbar navbar-expand-lg  nav-main fixed-top"
        }`}
      >
        <Link className="navbar-brand link-color" to="/">
          Blog-Site
        </Link>

        <button
          className="navbar-toggler toggle-area"
          type="button"
          data-toggle="collapse"
          data-target="#navbarToggleContent"
          aria-controls="navbarToggleContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars toggle-icon"></i>
        </button>

        <div className="collapse navbar-collapse" id="navbarToggleContent">
          <ul className="navbar-nav mx-auto nav-link-collection">
            <li className="nav-item active">
              <a className="nav-link link-color" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link link-color" href="/">
                All Blogs
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link link-color" href="/">
                Our Story
              </a>
            </li>
            <li>
              <div className="s-bar">
                <input type="text" className="s-input" maxLength="18" />
                <i className="fas fa-search s-icon"></i>
              </div>
            </li>
            <button className="btn btn-success ml-5 write-blog">
              Write Blog
            </button>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
