import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
// mui
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
// styles
import { ZoomInUpDiv } from "../../components/animations/ZoomInUpDiv";

import "./styles.scss";

const Product = (props) => {
  const handleAddToCart = (prod) => {
    props.history.push(`/repositories/fshop/shop/cart`);
    props.addToCart(prod);
  };

  return props.products.map((p) => {
    return (
      <Grid key={p.id} item xs={12} sm={6} md={4} lg={3}>
        <ZoomInUpDiv>
          <Card key={p.id} className="productListWrapper" elevation={2}>
            <Link
              to={`/repositories/fshop/shop/products/${p.category}/${p.id}`}>
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
                to={`/repositories/fshop/shop/cart`}
                variant="contained"
                size={`${window.innerWidth <= 1280 ? "small" : "medium"}`}
                color="primary">
                Add To Cart
              </Button>
            </div>
          </Card>
        </ZoomInUpDiv>
      </Grid>
    );
  });
};

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      size: "medium",
      wi: window.innerWidth
    };
  }

  componentDidMount() {
    window.addEventListener("resize", this.handleButtonSize, false);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleButtonSize, false);
  }

  handleButtonSize = () => {
    const { wi } = this.state;
    return wi <= 1280
      ? this.setState({ size: "small" })
      : this.setState({ size: "medium" });
  };

  componentDidUpdate() {
    window.scrollTo(0, 0);
  }

  render() {
    if (!this.props.products) {
      return <h5 className="p-2">No Products</h5>;
    }
    const { size } = this.state;
    return (
      <div className="productsWrapper">
        <Grid container>
          <Product
            size={size}
            addToCart={this.props.addToCart}
            {...this.props}
          />
        </Grid>
      </div>
    );
  }
}

export default withRouter(ProductList);
