import React from "react";
import classes from "./styles.module.css";

const DrawerToggle = ({ clicked }) => {
  return (
    <div onClick={clicked} className={classes.DrawerToggle}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default DrawerToggle;
