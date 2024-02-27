import React from "react";
import "./header.scss";
import logo from "../../assets/img/vivo-logo.svg";

export default function Header() {
  return (
    <div className="header shadow">
      <header>
        <button
          className="button-menu navbar-toggler collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarToggleExternalContent"
          aria-controls="navbarToggleExternalContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
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
  );
}
