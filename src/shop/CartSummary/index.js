import React, { Component } from "react";
// comps
import CartTableDisplay from "./CartTableDisplay";
// mui
import Grid from "@material-ui/core/Grid";
// styles
import "./styles.scss";

class CartSummary extends Component {
  render() {
    const {
      cart: { cartItems },
    } = this.props;

    return (
       <Grid container spacing={0}>
        {!!cartItems && <CartTableDisplay cartItems={cartItems} />}
      </Grid>
    );
  }
}

export default CartSummary;
