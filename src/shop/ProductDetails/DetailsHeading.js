import React from "react";
import TopNavigation from "../TopNavigation";
// comps
import ProductListFadeIn from "../../components/ProductListFadeIn";
import "./styles.scss";

const baseURL = `/repositories/fshop/shop/products`;

const DetailsHeading = () => {
  return (
    <ProductListFadeIn>
      <div className="sideNavCol">
        <TopNavigation baseURL={baseURL} categories={this.props.categories} />
      </div>
    </ProductListFadeIn>
  );
};

export default DetailsHeading;
