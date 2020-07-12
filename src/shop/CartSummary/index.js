import React, { Component } from "react";
import CartTableDisplay from "./CartTableDisplay";
// styles
import "./styles.scss";

class CartSummary extends Component {
  render() {
    const {
      cart: { cartItems },
    } = this.props;

    return (
      <div className="cartWrapper">
        {!!cartItems && <CartTableDisplay cartItems={cartItems} />}
      </div>
    );
  }
}

export default CartSummary;
