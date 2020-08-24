import React, { Component } from "react";
// comps
import ShoppingCart from "./ShoppingCart";
import { Link } from "react-router-dom";
// mui
import Grid from "@material-ui/core/Grid";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import { SlideInUpDiv } from "../../components/animations/SlideInUpDiv";
// styles
import "./styles.scss";
// icons
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import StoreIcon from "@material-ui/icons/Store";

class CartSummary extends Component {
  render() {
    const {
      cart: { cartItems, cartTotalPrice }
    } = this.props;

    return (
      <Grid container justify={"center"} spacing={0}>
        <Grid item xs={10} md={10} lg={10}>
          <SlideInUpDiv>
            <div className="cartWrapper">
              <div className="cartHeader">
                <h2>Furniture SinNombre Cart</h2>
              </div>
              {!!cartItems && (
                <ShoppingCart
                  cartItems={cartItems}
                  updateCart={this.props.updateCart}
                  deleteFromCart={this.props.deleteFromCart}
                  getCartTotal={this.props.getCartTotal}
                  cartTotalPrice={cartTotalPrice}
                />
              )}
              <div className="cartButtons">
                <ButtonGroup variant="text" color="default">
                  <Button component={Link} to={`/repositories/fshop/shop/`}>
                    {" "}
                    &nbsp;
                    <StoreIcon />
                    &nbsp; Continue Shopping{" "}
                  </Button>
                  <Button
                    component={Link}
                    to={`/repositories/fshop/shop/checkout`}>
                    &nbsp; <ShoppingCartIcon /> &nbsp; Checkout{" "}
                    <ArrowForwardIcon />
                  </Button>
                </ButtonGroup>
              </div>
            </div>
          </SlideInUpDiv>
        </Grid>
      </Grid>
    );
  }
}

export default CartSummary;
