import React from "react";
import Nav from "components/Nav/Index";
import { navVivo } from "utils/data";
import "./navBar.scss";
import { NavBarProps } from "types/component/NavBar";

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
