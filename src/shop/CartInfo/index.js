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
    const {
      cart: { cartItems }
    } = this.props;
    !!cartItems && this.props.totalCartItems(cartItems);
  };

  render() {
    const {
      cart: { cartItems, cartTotalItems }
    } = this.props;

    return (
      <div className="cartDetails">
        {!!cartItems && (
          <span>
            Your cart:{" "}
            {`${cartTotalItems ? cartTotalItems + " Item(s)" : "(empty)"}`}{" "}
<<<<<<< HEAD

          {cartTotalItems > 0 &&
            <Link to="/shop/cart">
              <ShoppingCartIcon />
            </Link>
          }
=======
            {cartTotalItems > 0 && (
              <Link to={`/repositories/fshop/shop/cart`}>
                <ShoppingCartIcon />
              </Link>
            )}
>>>>>>> master
          </span>
        )}
      </div>
    );
  }
}

export default CartInfo;
