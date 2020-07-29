import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
// redux
import { connect } from "react-redux";
// comps
import Shop from "./Shop/index";
import CartSummary from "./CartSummary"
import { doLoadData,getPage } from "../redux/actions/DataActions";
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
          path="/shop/products/:category?"
          render={(routeProps) => (
            <Shop
              doLoadData={this.props.doLoadData}
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
          path="/shop/checkout"
          render={(routeProps) => (
            <CartSummary {...this.props} {...routeProps}

            />
          )}
        />

        <Redirect to="/shop/products" />
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
  addToCart,
  updateCart,
  deleteFromCart,
  totalCartItems,
  getCartTotal,
  getPage,
};

export default connect(mapStateToProps, mapActionsToProps)(ShopConnector);
