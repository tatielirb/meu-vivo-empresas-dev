import React from "react";
import { render, screen } from "@testing-library/react";
import Card from "components/Card";

describe("Card component", () => {
  test("", () => {});

  test("renders card with title and description", () => {
    render(<Card title="20GB" description="Test Description" badgeText="" />);

    expect(screen.getByText("20GB")).toBeInTheDocument();
    expect(screen.getByText("Test Description")).toBeInTheDocument();
  });

  test("renders card with badge when text prop is not empty", () => {
    render(
      <Card
        title="Test Title"
        description="Test Description"
        badgeText="Badge Text"
      />
    );
    expect(screen.getByText("Badge Text")).toBeInTheDocument();
  });
});
