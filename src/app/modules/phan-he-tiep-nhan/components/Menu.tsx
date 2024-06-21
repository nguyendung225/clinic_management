import React, { FC } from "react";
import { Link } from "react-router-dom";

interface MenuItem {
    title: string;
    link: string;
}

interface MenuProps {
    items: MenuItem[];
}

const Menu: FC<MenuProps> = ({ items }) => {
    return (
        <ul>
        {items.map((item, index) => (
          <li key={index}>
            <Link to={item.link}>{item.title}</Link>
          </li>
        ))}
      </ul>
    );
};
export default Menu;
