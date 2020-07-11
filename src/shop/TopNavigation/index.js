import React, { Component } from "react";
import { Link } from "react-router-dom";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
// styles
import "./styles.scss";

class TopNavigation extends Component {
  render() {
    return (
      <div className={"topnavCategoriesWrapper"}>
        <div className="topnavCategoriesMain">
          <ul className="topnavCategories">
            <li className="categoryAll">
              <Link
                to={this.props.baseURL}
                className="btn btn-secondary btn-block"
              >
                All
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

                    {cat}

                  </Link>

                </li>
              ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default TopNavigation;
