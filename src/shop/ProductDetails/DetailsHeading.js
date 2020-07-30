import React, { Component} from "react";
import TopNavigation from "../TopNavigation";
// comps
import "./styles.scss";
//import flogo from "../../images/fslogo.png";

const baseURL = "/shop/products";

class DetailsHeading extends Component {

  render() {

    return (
      <>
        <TopNavigation
          baseURL={baseURL}
          categories={this.props.categories}
        />
        <h1>Furniture Shop</h1>
      </>

    );
  }
}

export default DetailsHeading;
