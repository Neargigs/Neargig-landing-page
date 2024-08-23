import React, { useEffect } from "react";
// import logo from 'assets/img/logo.png'; // Uncomment if you're using an image logo
import { initHeaderScrolled } from "../assets/js/headerScrolled";

const Nav = () => {
  useEffect(() => {
    initHeaderScrolled();
  });
  return (
    <header id="header" className="header d-flex align-items-center fixed-top">
      <div className="container-fluid container-xl position-relative d-flex align-items-center">
        <a href="/" className="logo d-flex align-items-center me-auto">
          {/* Uncomment the line below if you also wish to use an image logo */}
          {/* <img src={logo} alt="Logo" /> */}
          <h1 className="sitename">NearGigs</h1>
          <span>.</span>
        </a>

        <nav id="navmenu" className="navmenu">
          <ul style={{ textAlign: "right" }}>
            <li>
              <a href="#hero" className="active">
                Home
              </a>
            </li>
            <li>
              <a href="#crypto-jobs">Full-Time Jobs</a>
            </li>
            <li>
              <a href="#freelancee">Freelance Jobs</a>
            </li>
            <li className="dropdown">
              <a href="#">
                <span>Catalogs</span>
                <i className="bi bi-chevron-down toggle-dropdown"></i>
              </a>
              <ul>
                <li>
                  <a href="#browsegig">Browse Gigs</a>
                </li>
                <li>
                  <a href="#browsegig">Browse Talents</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="/">Login</a>
            </li>
            <li>
              <a href="/">Sign Up</a>
            </li>
          </ul>
          <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
        </nav>

        <a className="btn-getstarted" href="/">
          Post Job
        </a>
      </div>
    </header>
  );
};

export default Nav;
