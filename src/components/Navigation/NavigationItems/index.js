import React from "react";
import NavigationItem from "./NavigationItem";
import classes from "./styles.module.css";

const navigationItems = () => (
  <ul className={classes.NavigationItems}>
    <NavigationItem link="/" active>
      Burguer Bilder
    </NavigationItem>
    <NavigationItem link="/">Checkout</NavigationItem>
  </ul>
);

export default navigationItems;
