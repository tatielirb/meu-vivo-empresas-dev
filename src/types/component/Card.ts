export interface CardProps {
  title: string;
  description: string;
  text?: string;
}

export interface ItemsCard {
  items: CardProps[];
}
