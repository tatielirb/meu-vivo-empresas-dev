import React from "react";
import { render, screen } from "@testing-library/react";
import NavBar from "components/NavBar/Index";

describe("NavBar component", () => {
  test("shows component with class 'show' when isOpen is true", () => {
    render(<NavBar isOpen={true} />);
    const offcanvas = screen.getByTestId("offcanvas-teste");
    expect(offcanvas).toHaveClass("show");
  });

  test("hide component without 'show' class when isOpen is false", () => {
    render(<NavBar isOpen={false} />);
    const offcanvas = screen.getByTestId("offcanvas-teste");
    expect(offcanvas).not.toHaveClass("show");
  });
});
