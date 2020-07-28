import React, { Component } from "react";
import { Link } from "react-router-dom";
// styles
import "./styles.scss";
import logo from "../../images/fslogo.png";
// icons
import DeckIcon from '@material-ui/icons/Deck';
import HighlightIcon from '@material-ui/icons/Highlight';


class TopNavigation extends Component {
  render() {
    return (
      <nav className={"topnavCategoriesWrapper"}>
        <img className="furnlogo" src={logo} width="120" height="120" alt="furniture logo" />
        <div className="topnavCategoriesMain">
          <ul className="topnavCategories">
            <li className="categoryAll">
              <Link to={`${this.props.baseURL}/all`} className="button">
                <HighlightIcon
                  className="categoryIcon"
                /> All
              </Link>
            </li>
            {!!this.props.categories &&
              this.props.categories.map((cat) => (
                <li className="categoryOther" key={cat}>
                  <Link
                    rel="noreferrer nonopener"
                    to={`${this.props.baseURL}/${cat.toLowerCase()}`}
                    className="button"
                  >
                   <DeckIcon
                      className="categoryIcon"
                    /> {cat}
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      </nav>
    );
  }
}

export default TopNavigation;
