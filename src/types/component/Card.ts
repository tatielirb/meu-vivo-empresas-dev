export interface CardProps {
  title: string;
  description: string;
  badgeText?: string;
}

export interface ItemsCard {
  items: CardProps[];
}
