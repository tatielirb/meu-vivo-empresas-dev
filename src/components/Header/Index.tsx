import React, { useState } from "react";
import "./header.scss";
import logo from "../../assets/img/vivo-logo.svg";
import NavBar from "components/NavBar";

export default function Header() {
  const [isNavOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!isNavOpen);
  };
  return (
    <div>
      <div className="header shadow">
        <header>
          <button
            className={`button-menu navbar-toggler ${isNavOpen ? "show" : ""}`}
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasExample"
            aria-controls="noffcanvasExample"
            aria-label="buttonMenuOpen"
            onClick={toggleNav}
            data-testid="toggle-button"
          >
            <span className="hamburguer">
              <span className="bars bars-one"></span>
              <span className="bars bars-two"></span>
              <span className="bars bars-three"></span>
            </span>
          </button>
          <img src={logo} className="logo" alt="logo" />
        </header>
      </div>
      <NavBar isOpen={isNavOpen} />
    </div>
  );
}
