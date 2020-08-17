import React, { Component} from "react";
import TopNavigation from "../TopNavigation";
// comps
import "./styles.scss";

import {SET_PATH as path } from "../../helpers";


const baseURL = `${path()}shop/products`;

class DetailsHeading extends Component {

  render() {

    return (
      <>
        <div className="sideNavCol">
          <TopNavigation
            baseURL={baseURL}
            categories={this.props.categories}
          />
        </div>

      </>

    );
  }
}

export default DetailsHeading;
