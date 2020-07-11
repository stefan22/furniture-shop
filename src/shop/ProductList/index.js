import React, { Component } from "react";
// mui
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
// styles
import "./styles.scss";

const Product = (props) => {
  return props.products.map((p) => (
    <Grid item xs={12} md={4} lg={3}>
      <Card key={p.id} className="productListWrapper">
        <CardContent key={p.id}>
          <h4>{p.name}</h4>
          <span className="productPriceTage">${p.price.toFixed(2)}</span>
          <p className="productDescription">{p.description}</p>
        </CardContent>
        <div className="actionButtonWrapper">
          <Button variant="contained" size="small">
            Add To Cart
          </Button>
        </div>
      </Card>
    </Grid>
  ));
};

const ProductList = (props) => {
  if (!props.products) {
    return <h5 className="p-2">No Products</h5>;
  }

  return (
    <Grid container>
      <Product {...props} />
    </Grid>
  );
};

export default ProductList;
