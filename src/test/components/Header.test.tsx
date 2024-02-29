import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Header from "components/Header/Index";

describe("Header component", () => {
  test("renders Header component", () => {
    render(<Header />);

    const logoElement = screen.getByAltText("logo");
    expect(logoElement).toBeInTheDocument();

    const toggleButton = screen.getByTestId("toggle-button");
    fireEvent.click(toggleButton);

    expect(toggleButton).toBeInTheDocument();
  });

  test("button onClick", () => {
    render(<Header />);

    const nav = screen.getByRole("button");
    expect(nav).not.toHaveClass("show");

    const toggleButton = screen.getByTestId("toggle-button");
    fireEvent.click(toggleButton);

    expect(nav).toHaveClass("show");
  });
});
