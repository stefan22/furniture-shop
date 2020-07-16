import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./styles.scss";
// icons
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

class CartInfo extends Component {

  componentDidMount() {
    this.handleTotalItems();
  }

  handleTotalItems = () => {
    const {cart:{ cartItems }} = this.props;  !!cartItems &&
    this.props.totalCartItems(cartItems);
  }




  render() {
    const {
      cart: { cartItems,cartTotalItems }} = this.props;

    return (
      <div className="cartDetails">
        {!!cartItems && (
          <span>
            Your cart:{" "}
            {`${
              !!cartTotalItems
                ? cartTotalItems + " Item(s)" : "(empty)"
            }`}{" "}
            <Link to="/shop/cart">
              <ShoppingCartIcon />
            </Link>
          </span>
        )}
      </div>
    );
  }
}

export default CartInfo;
