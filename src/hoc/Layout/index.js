import React, { Component } from "react";

import Aux from "../Aux";
import classes from "./styles.module.css";
import Toolbar from "../../components/Navigation/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer";

class Layout extends Component {
  state = {
    showSideDrawer: false,
  };

  sideDrawerClosedHandler = () => {
    this.setState({ showSideDrawer: false });
  };

  sideDrawerToggleHandler = () => {
    this.setState((prevState) => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  };

  render() {
    return (
      <Aux>
        <SideDrawer
          isOpened={this.state.showSideDrawer}
          closed={this.sideDrawerClosedHandler}
        />
        <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />

        <main className={classes.Content}>{this.props.children}</main>
      </Aux>
    );
  }
}

export default Layout;
