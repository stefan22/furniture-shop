import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
// redux
import { connect } from "react-redux";
// comps
import Shop from "./Shop/index";
import CartSummary from "./CartSummary"
import ProductDetails from "./ProductDetails";
import { doLoadData,getPage } from "../redux/actions/DataActions";
//import {getAuthenticatedData} from "../redux/actions/Products";
import {
  addToCart,
  updateCart,
  deleteFromCart,
  totalCartItems,
  getCartTotal,
} from "../redux/actions/CartActions";



class ShopConnector extends Component {
  render() {
    const { products } = this.props.shop;

    return (
      <Switch>
        <Route
          path="/shop/products/:category"
          exact={true}
          render={(routeProps) => (
            <Shop
              doLoadData={this.props.doLoadData}
              //getAuthenticatedData={this.props.getAuthenticatedData}
              addToCart={this.props.addToCart}
              deleteFromCart={this.props.deleteFromCart}
              totalCartItems={this.props.totalCartItems}
              {...this.props}
              {...routeProps}
              products={products}
            />
          )}
        />

        <Route
          path="/shop/cart"
          exact={true}
          render={(routeProps) => (
            <CartSummary
              updateCart={this.props.updateCart}
              deleteFromCart={this.props.deleteFromCart}
              getCartTotal={this.props.getCartTotal}
              {...this.props} {...routeProps}
            />
          )}
        />

        <Route
          exact={true}
          path="/shop/checkout"
          render={(routeProps) => (
            <CartSummary {...this.props} {...routeProps}

            />
          )}
        />

         <Route
          exact={true}
          path="/shop/products/:category/:id"
          render={(routeProps) => (
            <ProductDetails {...this.props} {...routeProps}

            />
          )}
        />

        <Redirect to="/shop/products/all" />
      </Switch>
    );
  }
}

const mapStateToProps = (state) => ({
  shop: state.shop,
  cart: state.cart,
});

const mapActionsToProps = {
  doLoadData,
  getAuthenticatedData,
  addToCart,
  updateCart,
  deleteFromCart,
  totalCartItems,
  getCartTotal,
  getPage,
};

export default connect(mapStateToProps, mapActionsToProps)(ShopConnector);
