import React, { Component } from "react";
import { Link } from "react-router-dom";
// styles
import "./styles.scss";
// icons
import DeckIcon from "@material-ui/icons/Deck";
import HighlightIcon from "@material-ui/icons/Highlight";
import VerticalAlignTopIcon from "@material-ui/icons/VerticalAlignTop";


class SideNavigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrolledAmount: 0,
      scrollButton: false
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.listenToScroll, false);
  }

  winScrollAmount = () => {
    let scrollAmt =
      document.body.scrollTop || document.documentElement.scrollTop;
    return scrollAmt;
  };

  winScrollShow = (amt) =>
    this.setState({
      scrolledAmount: amt,
      scrollButton: true
    });

  winScrollHide = (amt) =>
    this.setState({
      scrolledAmount: amt,
      scrollButton: false
    });

  listenToScroll = () => {
    let scroll = Number(this.winScrollAmount());
    if (scroll > 900) return this.winScrollShow(scroll);
    return this.winScrollHide(scroll);
  }; // listenToScroll

  componentWillUnmount() {
    window.removeEventListener("scroll", this.listenToScroll, false);
  }

  render() {
    const { currentCategory } = this.props;
    const { scrollButton } = this.state;

    return (
      <nav className={"topnavCategoriesWrapper"}>
        <div className="furnlogo"></div>

        <div className="topnavCategoriesMain">
          <ul className="topnavCategories">
            <li className="categoryAll">
              <Link
                to={`/repositories/fshop/shop/products/all`}
                className="button">
                {currentCategory === "all" && !!scrollButton && (
                  <span className="productsScrollTop">
                    <VerticalAlignTopIcon />
                  </span>
                )}
                <HighlightIcon className="categoryIcon" /> All
              </Link>
            </li>

            {this.props.categories.length > 0 &&
              this.props.categories.map((cat) => (
                <li className="categoryOther" key={cat.category}>
                  <Link
                    rel="noreferrer nonopener"
                    to={`/repositories/fshop/shop/products/${cat.category}`}
                    className="button">
                    {currentCategory === cat.category && !!scrollButton && (
                      <span className="productsScrollTop">
                        <VerticalAlignTopIcon />
                      </span>
                    )}
                    <DeckIcon className="categoryIcon" /> {cat.category}
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      </nav>
    );
  }
}

export default SideNavigation;
