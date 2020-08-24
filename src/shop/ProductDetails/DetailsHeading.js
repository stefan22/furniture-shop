import React, { Component } from "react";
import TopNavigation from "../TopNavigation";
// comps
import ProductListFadeIn from "../../components/ProductListFadeIn";
import "./styles.scss";

const baseURL = `/repositories/fshop/shop/products`;

class DetailsHeading extends Component {
  render() {
    return (
      <ProductListFadeIn>
        <div className="sideNavCol">
          <TopNavigation baseURL={baseURL} categories={this.props.categories} />
        </div>
      </ProductListFadeIn>
    );
  }
}

export default DetailsHeading;
