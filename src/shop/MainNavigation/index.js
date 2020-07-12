import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Link from "@material-ui/core/Link";
// styles
import "./styles.scss";
import burger from "../../images/burger3.png";

class MainNavigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      windowWidth: window.innerWidth,
    };
  }

  updateWindowWidth = () => {
    return this.setState({ windowWidth: window.innerWidth });
  };

  componentDidMount() {
    this.updateWindowWidth();
    window.addEventListener("resize", this.updateWindowWidth, false);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowWidth, false);
  }

  handleClick = () => {
    console.log("click");
  };

  render() {
    const { windowWidth } = this.state;
    return (
      <AppBar className="mainNavigation" position="fixed" color="default">
        <Toolbar>
          <div className="left" />
          <Link
            variant="h6"
            underline="none"
            color="inherit"
            className={`${windowWidth > 980 ? "title" : "noTitle"}`}
            href="/shop/products"
          >
            Furniture Shop
          </Link>

          {windowWidth > 980 && (
            <div className="right">
              <Link
                color="inherit"
                variant="inherit"
                underline="none"
                className="rightLink"
                href="/shop/signin"
              >
                Sign In
              </Link>
              <Link
                variant="inherit"
                underline="none"
                className="linkSecondary"
                href="/shop/sign-up"
              >
                Sign Up
              </Link>
            </div>
          )}

          {windowWidth < 980 && (
            <Link
              rel="nonreferer nonopener"
              className="hamburger"
              onClick={this.handleClick}
            >
              <img
                alt={"main menu"}
                className="menuBurger"
                src={burger}
                width="64"
                height="64"
              />
            </Link>
          )}
        </Toolbar>
      </AppBar>
    );
  }
}

export default MainNavigation;
