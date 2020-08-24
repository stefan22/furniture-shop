import React, { Component, createRef } from "react";
// comp
import "./styles.scss";
import flogo from "../../images/fslogo.png";

class MainContentNav extends Component {
  constructor(props) {
    super(props);
    this.topNavRef = createRef(null);
    this.state = {
      didScroll: false,
      lastScrolledTop: 0
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.scrollNavigation, false);
  }

  scrollNavigation = (e) => {
    const { didScroll } = this.state;
    let scrolledAmount = e.target.scrollingElement.scrollTop;
    this.hasScrolled(scrolledAmount);
    if (didScroll) this.setState(() => ({ didScroll: false }));
  };

  hasScrolled = (scrolledAmount) => {
    const { lastScrolledTop } = this.state;
    const header = this.topNavRef.current;
    if (scrolledAmount > 70) {
      this.setState(
        {
          lastScrolledTop: scrolledAmount,
          didScroll: true
        },
        () => header.classList.add("headsup")
      );
    } else if (scrolledAmount <= lastScrolledTop)
      header.classList.remove("headsup");
  };

  componentWillUnmount() {
    window.removeEventListener("scroll", this.scrollNavigation);
  }

  render() {
    const mainContentNav = (
      <div ref={this.topNavRef} className={"topnav-container"}>
        <div className="topnav-logo">
          <img src={flogo} alt={"Furniture Shop"} width="640" height="627" />
        </div>
        <div className="topnav-link"></div>
      </div>
    );

    return mainContentNav;
  }
}

export default MainContentNav;
