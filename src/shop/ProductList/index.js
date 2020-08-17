import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
// mui
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
// styles
import { ZoomInUpWrapperDiv } from "./ProductListAnimation";
import "./styles.scss";

import { SET_PATH as path } from "../../helpers";

const Product = (props) => {
  const handleAddToCart = (prod) => {
    props.history.push(`${path()}shop/cart`);
    props.addToCart(prod);
  };

  return props.products.map((p) => {
    return (
      <Grid key={p.id} item xs={12} sm={6} md={4} lg={3}>
        <ZoomInUpWrapperDiv>
          <Card key={p.id} className="productListWrapper" elevation={2}>
            <Link to={`${path()}shop/products/${p.category}/${p.id}`}>
              <img src={p.image} alt={p.name} />
            </Link>
            <CardContent key={p.id}>
              <h4>{p.name}</h4>
              <span className="productPriceTage">${p.price.toFixed(2)}</span>
              <p className="productDescription">{p.description}</p>
            </CardContent>
            <div className="actionButtonWrapper">
              <Button
                onClick={() => handleAddToCart(p)}
                component={Link}
                to={`${path()}shop/cart`}
                variant="outlined"
                size="small"
                color="default"
              >
                Add To Cart
              </Button>
            </div>
          </Card>
        </ZoomInUpWrapperDiv>
      </Grid>
    );
  });
};

class ProductList extends Component {
  componentDidUpdate() {
    window.scrollTo(0, 0);
  }

  render() {
    if (!this.props.products) {
      return <h5 className="p-2">No Products</h5>;
    }

    return (
      <Grid container>
        <Product addToCart={this.props.addToCart} {...this.props} />
      </Grid>
    );
  }
}

export default withRouter(ProductList);
