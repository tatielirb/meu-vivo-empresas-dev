import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Carousel from "components/Carousel";

describe("Carousel Component", () => {
  describe("Carousel Component", () => {
    const items = [
      {
        title: "simCard",
        iconItem: "simCardIcon",
      },
      {
        title: "Esim",
        iconItem: "esimIcon",
      },
      {
        title: "Tecnologia",
        iconItem: "fiveGIcon",
      },
    ];

    it("render without crashing the carousel", () => {
      render(<Carousel items={items} onCarouselChange={() => {}} />);
      expect(screen.getByTestId("carousel-item-0")).toBeInTheDocument();
    });

    it("show the correct number of items in the carousel", () => {
      render(<Carousel items={items} onCarouselChange={() => {}} />);

      const carouselItems = screen.getAllByTestId(/^carousel-item-/);
      expect(carouselItems.length).toBe(items.length);
    });

    it("clicking on NextButton updates the current item", () => {
      render(<Carousel items={items} onCarouselChange={() => {}} />);

      const nextButton = screen.getByTestId("button-next");
      fireEvent.click(nextButton);

      expect(screen.getByTestId("carousel-item-1")).toHaveClass("active");
    });

    it("clicking on PrevButton updates the current item", () => {
      render(<Carousel items={items} onCarouselChange={() => {}} />);

      const prevButton = screen.getByTestId("button-prev");
      fireEvent.click(prevButton);

      expect(
        screen.getByTestId(`carousel-item-${items.length - 1}`)
      ).toHaveClass("active");
    });

    it("clicking on an item in the carousel updates the current item in the options list", () => {
      render(<Carousel items={items} onCarouselChange={() => {}} />);

      const carouselItem = screen.getByTestId("carousel-item-1");
      fireEvent.click(carouselItem);

      expect(screen.getByTestId("carousel-item-1")).toHaveClass("active");
    });

    it("calls onCarouselChange when an item is clicked in carousel", () => {
      const mockCallback = jest.fn();
      render(<Carousel items={items} onCarouselChange={mockCallback} />);

      const carouselItem = screen.getByTestId("carousel-item-1");
      fireEvent.click(carouselItem);

      expect(mockCallback).toHaveBeenCalledWith(1);
    });
  });
});
