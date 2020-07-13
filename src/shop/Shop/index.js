import React, { Component } from "react";
// mui
import Grid from "@material-ui/core/Grid";
// comps
import ProductList from "../ProductList/index";
import TopNavigation from "../TopNavigation/index";
import MainNavigation from "../MainNavigation/index";
import CartSummary from "../CartSummary/index";
// redux
import { connect } from "react-redux";
import { addToCart, updateCart } from "../../redux/actions/CartActions";
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
    //console.log(this);
    const { category } = this.props.match.params;
    return (
      <div className="wrapper">
        <MainNavigation />
        <CartSummary  {...this.props}
        />
        <Grid container justify={"center"} spacing={2}>
          <Grid item xs={12} md={9} lg={10}>
            <div className="mainContent">
              {!!this.props.products && (
                <ProductList
                  addToCart={this.props.addToCart}
                  cart={this.props.cart}
                  products={this.handleFilterProducts(
                    category,
                    this.props.products
                  )}

                />
              )}
            </div>
          </Grid>
          <Grid item xs={12} md={3} lg={2}>
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

const mapStateToProps = (state) => ({
  shop: state.shop,
  cart: state.cart,
});

const mapActionsToProps = {
  addToCart,
  updateCart,
};


export default connect(mapStateToProps,mapActionsToProps)(Shop);