import React, { Component } from "react";
// mui
import Grid from "@material-ui/core/Grid";
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";

class ShoppingCart extends Component {
  render() {
    const { cartItems } = this.props;
    return (
      <Grid item xs={12}>
        <TableContainer component={Paper}>
          <div className="cartDisplay">
            <div className="cartTableHeading">
              <div className="cartTableRow">
                <div className="cartHead">Quantity</div>
                <div className="cartHead">Name</div>
                <div className="cartHead">Description</div>
                <div className="cartHead">Price</div>
                <div className="cartHead">Subtotal</div>
                <div className="cartHead"></div>
              </div>
            </div>

            <div className="cartTableBody">
              {cartItems.map((itm) => (
                <div className="cartTableRow" key={itm.id}>
                  <div className="cartCell"> {itm.qty}</div>
                  <div className="cartCell">{itm.name}</div>
                  <div className="cartCell">{itm.desc}</div>
                  <div className="cartCell">£{itm.price}</div>
                  <div className="cartCell">£{itm.price * itm.qty}</div>
                  <div className="cartCell cartRemove">
                    <button>Remove</button>
                  </div>
                </div>
              ))}
            </div>

            <div className="cartTableFooter">
              <div className="cartTableRow">
                <div className="cartCell"></div>
                <div className="cartCell"></div>
                <div className="cartCell"></div>
                <div className="cartCell">Total: </div>
                <div className="cartCell"></div>
                <div className="cartCell"></div>
              </div>
            </div>
          </div>
        </TableContainer>
      </Grid>
    );
  }
}

export default ShoppingCart;
