import React from "react";
import { MenuItemProps } from "types/component/Nav";

export default function MenuItem({
  title,
  link,
  classNameLink,
}: MenuItemProps) {
  return (
    <li>
      <a href={link} className={classNameLink}>
        {title}
      </a>
    </li>
  );
}
