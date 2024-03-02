import MenuItem from "./MenuItem";
import "./nav.scss";
import { NavProps } from "types/component/Nav";

export default function Nav({ items }: NavProps) {
  return (
    <nav>
      <ul>
        {items.map((item, index) => (
          <MenuItem key={index} {...item} />
        ))}
      </ul>
    </nav>
  );
}
