import React, { Component } from "react";
// mui
import Grid from "@material-ui/core/Grid";
// comps
import ProductList from "../ProductList/index";
import TopNavigation from "../TopNavigation/index";
import MainNavigation from "../MainNavigation/index";
// styles
import "./styles.scss";

const baseURL = "/shop/products";

class Shop extends Component {
  handleFilterProducts = (cat, prdts) => {
    let products = [];
    if (cat === undefined) return prdts; //not predefined
    prdts.filter((
      p //by category
    ) =>
      p.category.toLowerCase() === cat.toLowerCase() ? products.push(p) : true
    );
    return products;
  };

  render() {
    const { category } = this.props.match.params;
    return (
      <div className="wrapper">
        <MainNavigation />

        <Grid container justify={"center"} spacing={2}>
            <Grid item xs={12} md={9}>
              <div className="mainContent">
              {!!this.props.products && (
                <ProductList
                  products={this.handleFilterProducts(
                    category,
                    this.props.products
                  )}
                />
              )}
              </div>
            </Grid>
            <Grid item xs={12} md={3}>
              <TopNavigation
                baseURL={baseURL}
                categories={this.props.shop.categories}
              />
            </Grid>

        </Grid>
      </div>
    );
  }
}

export default Shop;
