export interface CarouselProps {
  title: string;
  iconItem: string;
}

export interface ItemsCarousel {
  items: CarouselProps[];
  onCarouselChange?: (index: number) => void;
}
