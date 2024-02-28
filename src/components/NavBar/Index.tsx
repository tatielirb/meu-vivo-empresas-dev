import React from "react";
import Nav from "components/Nav/Index";
import { navVivo } from "utils/data";
import "./navBar.scss";

interface NavBarProps {
  isOpen: boolean;
}
export default function NavBar({ isOpen }: NavBarProps) {
  return (
    <div
      className={`offcanvas offcanvas-start ${isOpen ? "show" : ""}`}
      id="offcanvasExample"
      aria-labelledby="navBar Section"
    >
      <div className="offcanvas-body">
        <Nav items={navVivo} />
      </div>
    </div>
  );
}
