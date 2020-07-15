import React, { Component } from "react";
// mui
import Grid from "@material-ui/core/Grid";
import Table from "@material-ui/core/Table";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

class CartTableDisplay extends Component {
  render() {
    const { cartItems } = this.props;
    return (
      <Grid item xs={12}>
        <TableContainer component={Paper}>
          <Table className="cartDisplay">
            <thead>
              <TableRow>
                <TableCell>Furniture Cart</TableCell>
                <TableCell align="center">Id</TableCell>
                <TableCell align="center">Name</TableCell>
                <TableCell align="center">Description</TableCell>
                <TableCell align="center">Quantity</TableCell>
                <TableCell align="center">Price</TableCell>
              </TableRow>
            </thead>
            <tbody>
              {cartItems.map(itm => (
                <TableRow key={itm.name}>
                  <TableCell component="th" scope="row">
                    {itm.name}
                  </TableCell>
                  <TableCell align="center">{itm.id}</TableCell>
                  <TableCell align="center">{itm.name}</TableCell>
                  <TableCell align="center">{itm.description}</TableCell>
                  <TableCell align="center">{itm.qty}</TableCell>
                  <TableCell align="center">{itm.price}</TableCell>
                </TableRow>
              ))}
            </tbody>
          </Table>
        </TableContainer>
      </Grid>
    );
  }
}

export default CartTableDisplay;
