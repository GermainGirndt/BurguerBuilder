import React from "react";
import classes from "./styles.module.css";
import Logo from "../../Logo";
import NavigationItems from "../NavigationItems";
import BackDrop from "./../../UI/Backdrop";
import Aux from "../../../hoc/Aux";

const SideDrawer = ({ isOpened, closed }) => {
  let attachedClasses = [classes.SideDrawer, classes.Close];

  if (isOpened) {
    attachedClasses = [classes.SideDrawer, classes.Open];
  }

  return (
    <>
      <Aux show>
        <BackDrop show={isOpened} clicked={closed} />
        <div className={attachedClasses.join(" ")}>
          <div className={classes.Logo}>
            <Logo />
          </div>
          <nav>
            <NavigationItems />
          </nav>
        </div>
      </Aux>
    </>
  );
};

export default SideDrawer;
