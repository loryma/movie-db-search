import React from "react";
import { Menu } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import "./Menu.scss";

function MenuComponent() {
  return (
    <Menu>
      <Menu.Item
        header
        className="menu__item menu__logo"
        name="Movie DB Search"
        activeStyle={{ backgroundColor: "black", color: "white" }}
        as={NavLink}
        exact
        to={"/"}
      ></Menu.Item>
    </Menu>
  );
}

export default MenuComponent;
