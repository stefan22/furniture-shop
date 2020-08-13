import React, { Component } from "react";
import { Link } from "react-router-dom";
// styles
import "./styles.scss";
// icons
import DeckIcon from "@material-ui/icons/Deck";
import HighlightIcon from "@material-ui/icons/Highlight";

class SideNavigation extends Component {

  render() {
  
    return (
      <nav className={"topnavCategoriesWrapper"}>
        <div className="furnlogo"></div>

        <div className="topnavCategoriesMain">
          <ul className="topnavCategories">
            <li className="categoryAll">
              <Link to={`/shop/products/all`} className="button">
                <HighlightIcon className="categoryIcon" /> All
              </Link>
            </li>

            {this.props.categories.length > 0 &&
              this.props.categories.map((cat) => (
                <li className="categoryOther" key={cat.category}>
                  <Link
                    rel="noreferrer nonopener"
                    to={`/shop/products/${cat.category}`}
                    className="button"
                  >
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