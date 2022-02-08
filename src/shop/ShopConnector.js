import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
// redux
import { connect } from "react-redux";
// comps
import Shop from "./Shop/index";
import CartSummary from "./CartSummary";
import ProductDetails from "./ProductDetails";
<<<<<<< HEAD
import { doLoadData,getPage } from "../redux/actions/DataActions";
//import {getAuthenticatedData} from "../redux/actions/Products";
=======
import { getAuthenticatedData } from "../redux/actions/ProductsData";
import { handleJumboOff } from "../redux/actions/UIActions";
>>>>>>> master
import {
  addToCart,
  updateCart,
  deleteFromCart,
  totalCartItems,
  getCartTotal
} from "../redux/actions/CartActions";

class ShopConnector extends Component {
  render() {
    const { products } = this.props.shop;

    return (
      <Switch location={this.props.location}>
        <Route
          path={`/repositories/fshop/shop/products/:category`}
          exact={true}
          render={(routeProps) => (
            <Shop
<<<<<<< HEAD
              doLoadData={this.props.doLoadData}
              //getAuthenticatedData={this.props.getAuthenticatedData}
=======
              getAuthenticatedData={this.props.getAuthenticatedData}
>>>>>>> master
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
          path={`/repositories/fshop/shop/cart`}
          exact={true}
          render={(routeProps) => (
            <CartSummary
              updateCart={this.props.updateCart}
              deleteFromCart={this.props.deleteFromCart}
              getCartTotal={this.props.getCartTotal}
              {...this.props}
              {...routeProps}
            />
          )}
        />

        <Route
          exact={true}
          path={`/repositories/fshop/shop/checkout`}
          render={(routeProps) => (
            <CartSummary {...this.props} {...routeProps} />
          )}
        />

        <Route
          exact={true}
          path={`/repositories/fshop/shop/products/:category/:id`}
          render={(routeProps) => (
            <ProductDetails {...this.props} {...routeProps} />
          )}
        />

        <Redirect to={`/repositories/fshop/shop/products/all`} />
      </Switch>
    );
  }
}

const mapStateToProps = (state) => ({
  shop: state.shop,
  cart: state.cart,
  ui: state.ui
});

const mapActionsToProps = {
<<<<<<< HEAD
  doLoadData,
=======
>>>>>>> master
  getAuthenticatedData,
  addToCart,
  updateCart,
  deleteFromCart,
  totalCartItems,
  getCartTotal,
  handleJumboOff
};

export default connect(mapStateToProps, mapActionsToProps)(ShopConnector);
