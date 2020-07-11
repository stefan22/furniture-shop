import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Link from "@material-ui/core/Link";
// styles
import "./styles.scss";

const MainNavigation = (props) => {
  return (
    <AppBar className="mainNavigation" position="fixed" color="default">
      <Toolbar>
        <div className="left" />
        <Link
          variant="h6"
          underline="none"
          color="inherit"
          className="title"
          href="/shop/products"
        >
          Furniture Shop
        </Link>
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
      </Toolbar>
    </AppBar>
  );
};

export default MainNavigation;
