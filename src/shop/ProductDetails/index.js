import React, { Component, createRef } from "react";
import { withRouter } from "react-router-dom";
// comps
import DetailsInfo from "./DetailsInfo";
import MainContentNav from "../Shop/MainContentNav";
import SideNavigation from "../SideNavigation";
import MobileNavigation from "../MobileNavigation";
import CartInfo from "../CartInfo";
import ShopHeading from "../Shop/ShopHeading";
import RadioColors from "./RadioColors";
// matui
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Fab from "@material-ui/core/Fab";
import LoyaltyTwoToneIcon from "@material-ui/icons/LoyaltyTwoTone";
import { FadeInDiv } from "../../components/animations/FadeInDiv";
import { BounceInDownDiv } from "../../components/animations/BounceInDownDiv";
// styles
import { withStyles } from "@material-ui/core/styles";
import "./styles.scss";

const styles = (theme) => ({
  fabActionButton: {
    padding: "0 !important",
    borderRadius: "50%",
    height: "96px",
    width: "100px",
    "& span": {
      fontSize: "1.15rem"
    },
    "& span svg": {
      fill: theme.palette.colors.lgray,
      width: "18px",
      transform: "perspective(10px) translate(5px, 0px)"
    }
  }
});

class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.detailsPageRef = createRef("");
    this.state = {
      color: "",
      quantity: 1,
      addToCart: false
    };
  }

  componentDidMount() {
    const { id, category } = this.props.match.params;
    this.getProductDetails(id);
    this.formatCategory(category);
  }

  formatCategory = (category) => {
    let cat = category.slice(0, 2).toUpperCase();
    return this.setState({ cat });
  };

  getProductDetails = (id) => {
    const { products } = this.props.shop;
    let product = products.filter((itm) => itm.id === id)[0];
    return this.setState({ ...product });
  };

  componentDidUpdate() {
    this.detailsPageRef.current.scrollIntoView({ behavior: "smooth" });
  }

  handleDataElement = (val) => {
    this.setState({
      color: val.value === false ? "" : val.name,
      addToCart: val.value === true ? true : false
    });
  };

  handleQuantity = (e) => {
    this.setState({
      quantity: Number(e.target.value),
      addToCart: Number(e.target.value) > 0 ? true : false
    });
  };

  handleSubmit = (e) => {
    const { color, quantity, addToCart } = this.state;
    e.preventDefault();
    if (color !== "" && quantity === 1 && addToCart === true) {
      this.props.addToCart(this.state);
      return this.props.history.push("/repositories/fshop/shop/cart");
    }
    return true;
  };

  render() {
    const { classes } = this.props;
    const {
      cat,
      color,
      description,
      image,
      name,
      price,
      quantity
    } = this.state;

    return (
      <Grid container align={"justify"} spacing={0}>
        <div ref={this.detailsPageRef} className="mainWrapper">
          <Grid item zeroMinWidth lg={2}>
            <div className="sideNavCol">
              <SideNavigation categories={this.props.shop.categories} />
            </div>
          </Grid>

          <Grid item zeroMinWidth lg={10}>
            <div className="mainProductWrapper">
              <Grid container justify={"center"} spacing={0}>
                <Grid item xs={12} sm={12} lg={12}>
                  <MobileNavigation />
                  <CartInfo
                    deleteFromCart={this.props.deleteFromCart}
                    totalCartItems={this.props.totalCartItems}
                    cart={this.props.cart}
                  />
                  <ShopHeading mainTitle={"Furniture Shop"} />
                  <div className="topLiner"></div>

                  <div className="mainHeader">
                    <MainContentNav />
                  </div>
                </Grid>

                <div className="productInnerWrapper">
                  <Grid item xs={12} sm={12} lg={6}>
                    <BounceInDownDiv>
                      <div className="productImage">
                        <img src={image} alt={name} width="640" height="480" />
                      </div>
                    </BounceInDownDiv>
                  </Grid>
                  <Grid item xs={12} sm={12} lg={6}>
                    <FadeInDiv>
                      <div className="productDetails">
                        <h2>
                          {name} <span className="detailsCat">[{cat}]</span>
                        </h2>
                        <h5>{description}</h5>

                        <form onSubmit={this.handleSubmit}>
                          <div className="productPrice">
                            <h6>Price</h6>
                            <div className="priceTag">
                              <Fab
                                className={classes.fabActionButton}
                                variant={"extended"}
                                color="primary">
                                £{price}
                                <LoyaltyTwoToneIcon />
                              </Fab>
                            </div>
                          </div>
                          <div className="productSection">
                            <h6>Colour</h6>
                            <div className="productColors">
                              <RadioColors
                                color={color}
                                handleDataElement={this.handleDataElement}
                              />
                              {color === "" && (
                                <span className="addToCart">
                                  Please choose color
                                </span>
                              )}
                            </div>
                          </div>
                          <div className="productSection">
                            <h6>Quantity</h6>
                            <div className="productQty">
                              <TextField
                                color="secondary"
                                type="number"
                                value={quantity}
                                placeholder="Enter quantity"
                                InputProps={{
                                  inputProps: { min: 0, max: 10 }
                                }}
                                InputLabelProps={{ shrink: true }}
                                onChange={(e) => this.handleQuantity(e)}
                                id="outlined-secondary"
                              />
                              {quantity !== 1 && (
                                <span className="addToCart">
                                  Please update quantity in cart
                                </span>
                              )}
                            </div>
                          </div>
                          <div className="productSection">
                            <div className="productButton">
                              <Button
                                type="submit"
                                variant="contained"
                                size="large"
                                color="primary">
                                Add to Cart
                              </Button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </FadeInDiv>
                  </Grid>
                </div>

                <DetailsInfo />
              </Grid>
            </div>
          </Grid>
        </div>
      </Grid>
    );
  }
}

export default withRouter(withStyles(styles)(ProductDetails));
