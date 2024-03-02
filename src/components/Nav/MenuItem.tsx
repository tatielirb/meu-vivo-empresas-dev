import { MenuItemProps } from "types/component/Nav";

export default function MenuItem({ title, link }: MenuItemProps) {
  return (
    <li>
      <a href={link}>{title}</a>
    </li>
  );
}
