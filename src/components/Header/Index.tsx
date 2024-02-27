import React from "react";
import "./header.scss";
import logo from "../../assets/img/vivo-logo.svg";

export default function Header() {
  return (
    <div className="header">
      <header>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}
