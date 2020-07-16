import React, {Component} from "react";
import "./styles.scss";
// icons
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';



class CartDetails extends Component {
  render () {
    return (
      <div className="cartDetails">
      <span>Your cart: (empty) <ShoppingCartIcon /></span>
      </div>
    )

  }



}


export default CartDetails;



