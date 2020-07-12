import React, { Component } from "react";


class CartTableDisplay extends Component {
  render () {
    const { cartItems } = this.props;
    console.log('cart items ', cartItems)
    return (
      <div className="cartDisplay">
        <h6>Cart</h6>
        { cartItems.map(itm =>

          <div key={itm.id}>
            <p>id: {itm.id}</p>
            <p>name: {itm.name}</p>
            <p>desc: {itm.description}</p>
            <p>qty: {itm.qty}</p>
            <p>price: {itm.price}</p>
          </div>

          )

        }
      </div>
    )
  }



}


export default CartTableDisplay;
