import React from "react";
import { Link, withRouter } from "react-router-dom";
// mui
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
// styles
import { ZoomInUpWrapperDiv } from "./ProductListAnimation";
import "./styles.scss";


const Product = (props) => {
  const handleAddToCart = (prod) => {
    props.history.push("/shop/cart");
    props.addToCart(prod);
  };

  const randomImgs = [//prod cover img
    "animals", "business","city","nightlife",
    "fashion", "people","sports","technics","transport"
  ];

  return props.products.map((p,idx) => {
    let preImg = "http://lorempixel.com/640/480/";
    let isImage = preImg + randomImgs[randomImgs.length < idx ? 0 : idx];

    return (

        <Grid key={p.id} item xs={12} sm={6} md={4} lg={3}>
          <ZoomInUpWrapperDiv>
            <Card key={p.id} className="productListWrapper">
              <img src={isImage} alt={p.name} />
              <CardContent key={p.id}>
                <h4>{p.name}</h4>
                <span className="productPriceTage">${p.price.toFixed(2)}</span>
                <p className="productDescription">{p.description}</p>
              </CardContent>
              <div className="actionButtonWrapper">
                <Button
                  onClick={() => handleAddToCart(p)}
                  component={Link}
                  to="/shop/cart"
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

    )

  });
};

const ProductList = (props) => {
  if (!props.products) {
    return <h5 className="p-2">No Products</h5>;
  }

  return (
    <Grid container>
      <Product addToCart={props.addToCart} {...props} />
    </Grid>
  );
};

export default withRouter(ProductList);
