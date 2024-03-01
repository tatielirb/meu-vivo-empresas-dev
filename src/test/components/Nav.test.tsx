import React from "react";
import { render, screen } from "@testing-library/react";
import Nav from "components/Nav";

describe("Nav component", () => {
  test("renders the Nav component with menu items", () => {
    const items = [
      { title: "Home", link: "/" },
      { title: "Servico", link: "/service" },
    ];

    render(<Nav items={items} />);

    items.forEach((item) => {
      const menuItem = screen.getByText(item.title);
      expect(menuItem).toBeInTheDocument();
    });
  });
});
