import React from "react";

import {
  Toolbar,
  MobileOnly,
  DesktopOnly,
  LogoClass,
} from "./styles.module.css";

import Logo from "../../Logo";
import NavigationItems from "../NavigationItems";
import DrawerToggle from "../SideDrawer/DrawerToggle";

const toolbar = ({ drawerToggleClicked }) => {
  return (
    <header className={Toolbar}>
      <div className={`${LogoClass} ${MobileOnly}`}>
        <DrawerToggle clicked={drawerToggleClicked} />
      </div>

      <div className={`${LogoClass} ${DesktopOnly}`}>
        <Logo />
      </div>

      <nav className={DesktopOnly}>
        <NavigationItems />
      </nav>
    </header>
  );
};

export default toolbar;
