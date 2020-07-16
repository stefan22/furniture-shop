import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
// redux
import { connect } from "react-redux";
// comps
import ShopStore from "../redux/ShopStore";
import Shop from "./Shop/index";
import CartSummary from "./CartSummary"
import { doLoadData } from "../redux/actions/DataActions";


// data placeholder
ShopStore.dispatch(doLoadData());


class ShopConnector extends Component {
  render() {
    const { products } = this.props.shop;

    return (
      <Switch>
        <Route
          path="/shop/products/:category?"
          render={(routeProps) => (
            <Shop
              {...this.props}
              {...routeProps}
              products={products}
            />
          )}
        />

        <Route
          path="/shop/cart"
          render={(routeProps) => (
            <CartSummary {...this.props} {...routeProps} />
          )}
        />

        <Route
          path="/shop/checkout"
          render={(routeProps) => (
            <CartSummary {...this.props} {...routeProps} />
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
};

export default connect(mapStateToProps, mapActionsToProps)(ShopConnector);
