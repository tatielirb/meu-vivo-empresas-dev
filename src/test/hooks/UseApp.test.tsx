import { renderHook, act } from "@testing-library/react";
import { useApp } from "hooks/useApp";
import { fiveGcardItens, esimcardItens } from "utils/data";

describe("useApp", () => {
  it("should start with app default values", () => {
    const { result } = renderHook(() => useApp());

    expect(result.current.currentCarouselItem).toBe(0);
    expect(result.current.getCardList()).toEqual(fiveGcardItens);
  });

  it("should update currentCarouselItem and getCardList accordingly as action", () => {
    const { result } = renderHook(() => useApp());

    act(() => {
      result.current.setCurrentCarouselItem(1);
    });

    expect(result.current.currentCarouselItem).toBe(1);

    expect(result.current.getCardList()).toEqual(esimcardItens);
  });
});
