import React, { Component } from "react";
// mui
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";

class ShoppingCart extends Component {
  componentDidMount() {
    this.props.getCartTotal(this.props.cartItems);
  }


  handleChange = (qty, e) => {
    this.props.updateCart(qty, e.target.value);
    this.props.getCartTotal(this.props.cartItems);
  }

  handleDeleteFromCart = (itm) => {
    this.props.deleteFromCart(itm);
    this.props.getCartTotal(this.props.cartItems);
  }


  render() {

    const { cartItems, cartTotalPrice } = this.props;
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
                  <div className="cartCell">
                    <input
                      type="number"
                      value={itm.qty}
                      onChange={(e) => this.handleChange(itm,e)}
                    />
                  </div>
                  <div className="cartCell">{itm.name}</div>
                  <div className="cartCell">{itm.description}</div>
                  <div className="cartCell">£{itm.price}</div>
                  <div className="cartCell">£{itm.price * itm.qty}</div>
                  <div className="cartCell cartRemove">
                    <Button
                      onClick={() => this.handleDeleteFromCart(itm)}
                      variant="outlined"
                      size="small"
                      color="secondary"
                    >
                      Remove
                    </Button>

                  </div>
                </div>
              ))}
            </div>

            <div className="cartTableFooter">
              <div className="cartTableRow">
                <div className="cartCell"></div>
                <div className="cartCell"></div>
                <div className="cartCell"></div>
                <div
                  className="cartCell"
                >
                  Total:
                </div>
                <div className="cartCell">£ {cartTotalPrice}</div>
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
