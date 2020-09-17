import React from "react";

import burguerLogo from "../../assets/images/burger-logo.png";
import classes from "./styles.module.css";

const Logo = ({ height }) => (
  <div className={classes.Logo} style={{ height }}>
    <img src={burguerLogo} alt="MyBurguer" />
  </div>
);

export default Logo;
