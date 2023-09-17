import React from "react";
import "./Styles/navbar.css";

function Navbar() {
  return (
    <div>
      <nav id="navbarBelow" class="navbar">
        <div class="container">
          <a class="navbar-brand" href="./">
            <img src="/Leather-Artistics-2 1.png" alt="" />
          </a>
          <div className="navbar-right">
            <button className="transparent-btn">Contact Us</button>
            <div className="contact">
                <div className="contactImage">
                <img src="/navbarImages/Vector.png" alt="" />
                </div>
                <div className="navbar-contact">
                    <p className="number">+00 - 0000-00-0032</p>
                    <p className="context">Get in touch with Us!</p>
                </div>
            </div>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <img src="/navbarImages/Group 71.png" width="30px" />
            </button>
          </div>
          <div
            class="collapse navbar-collapse  justify-content-center"
            id="navbarNavDropdown"
          >
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link " aria-current="page" href="./">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="tutors.php">
                  Tutors
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="terms-conditions.php">
                  Terms &amp; Conditions
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="contact-us.php">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
