import React, { Component } from "react";
import Link from "@material-ui/core/Link";
// styles
import "./styles.scss";

class MainNavigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      windowWidth: window.innerWidth,
      menuOpen: false,
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
    this.setState((prevState) => ({
      menuOpen: !prevState.menuOpen,
    }));
  };

  render() {
    const { windowWidth, menuOpen } = this.state;
    return (
      <div className="mobileMenu">
        {windowWidth <= 960 && (
          <Link
            rel="nonreferer nonopener"
            className="hamburger"
            onClick={this.handleClick}
          >
            <div className={`${menuOpen ? "menuButton open" : "menuButton"}`}>
              <div className="menuButtonBurger"></div>
            </div>
          </Link>
        )}
      </div>
    );
  }
}

export default MainNavigation;
