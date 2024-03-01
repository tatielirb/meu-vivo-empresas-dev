import React from "react";
import "./navBar.scss";
import { navVivo } from "utils/data";
import { NavBarProps } from "types/component/NavBar";
import Nav from "components/Nav";

export default function NavBar({ isOpen }: NavBarProps) {
  return (
    <div
      data-testid="offcanvas-teste"
      className={`offcanvas offcanvas-start ${isOpen ? "show" : ""}`}
      id="offcanvas"
      aria-labelledby="navBar Section"
    >
      <div className="offcanvas-body">
        <Nav items={navVivo} />
      </div>
    </div>
  );
}
