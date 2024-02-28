export interface MenuItemProps {
    link: string;
    title: string;
    classNameLink?: string;
    isInternal?: boolean;
  }
  
  export interface NavProps {
    items: MenuItemProps[];
  }