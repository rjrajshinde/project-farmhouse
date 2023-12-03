import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "../Styles/Navbar.css";

function Navbar() {
  return (
    <>
      <section class="navbar-section">
        <div class="container mb-3">
          <div class="row justify-content-between">
            <div class="col">
              <a class="navbar-brand" href="index.html">
                FarmHOUSE
              </a>
            </div>
            <div class="col d-flex justify-content-end">
              <div class="social-media">
                <p class="mb-0 d-flex">
                  <a
                    href="#"
                    class="d-flex align-items-center justify-content-center"
                  >
                    <FontAwesomeIcon icon={faFacebookF} className="navIcon" />
                  </a>
                  <a
                    href="#"
                    class="d-flex align-items-center justify-content-center"
                  >
                    <FontAwesomeIcon icon={faTwitter} className="navIcon" />
                  </a>
                  <a
                    href="#"
                    class="d-flex align-items-center justify-content-center"
                  >
                    <FontAwesomeIcon icon={faInstagram} className="navIcon" />
                  </a>
                  <a
                    href="#"
                    class="d-flex align-items-center justify-content-center"
                  >
                    <FontAwesomeIcon icon={faWhatsapp} className="navIcon" />
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <nav
          class="navbar navbar-expand-lg navbar-dark bg-dark navbar-navbar-light"
          id="navbar-navbar"
        >
          <div class="container">
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbar-nav"
              aria-controls="navbar-nav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="fa fa-bars"></span> Menu
            </button>

            <div class="collapse navbar-collapse" id="navbar-nav">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                  <a href="#" class="nav-link">
                    Home
                  </a>
                </li>
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    id="dropdown04"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Page
                  </a>
                  <div class="dropdown-menu" aria-labelledby="dropdown04">
                    <a class="dropdown-item" href="#">
                      Page 1
                    </a>
                    <a class="dropdown-item" href="#">
                      Page 2
                    </a>
                    <a class="dropdown-item" href="#">
                      Page 3
                    </a>
                    <a class="dropdown-item" href="#">
                      Page 4
                    </a>
                  </div>
                </li>
                <li class="nav-item">
                  <a href="#" class="nav-link">
                    Catalog
                  </a>
                </li>
                <li class="nav-item">
                  <a href="#" class="nav-link">
                    Blog
                  </a>
                </li>
                <li class="nav-item">
                  <a href="#" class="nav-link">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
}

export default Navbar;
