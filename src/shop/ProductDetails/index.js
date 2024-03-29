import React, { Component, createRef } from "react";
import { withRouter } from "react-router-dom";
// comps
import DetailsInfo from "./DetailsInfo";
import MainNav from "../Shop/MainNav";
import SideNavigation from "../SideNavigation";
import MobileNavigation from "../MobileNavigation";
import CartInfo from "../CartInfo";
import ShopHeading from "../Shop/ShopHeading";
<<<<<<< HEAD
//import ColorSelect from "./ColorSelect";
=======
>>>>>>> master
import RadioColors from "./RadioColors";
// matui
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Fab from "@material-ui/core/Fab";
import LoyaltyTwoToneIcon from "@material-ui/icons/LoyaltyTwoTone";
<<<<<<< HEAD
=======
import { FadeInDiv } from "../../components/animations/FadeInDiv";
import { BounceInDownDiv } from "../../components/animations/BounceInDownDiv";
>>>>>>> master
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

const styles = theme => ({
  fabActionButton: {
    padding: "0 !important",
    borderRadius: "50%",
    height: "96px",
    width: "100px",
    "& span": {
      fontSize: "1.15rem",
    },
    "& span svg": {
      fill: theme.palette.colors.lgray,
      width: "18px",
      transform: "perspective(10px) translate(5px, 0px)",
    },
  },
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

<<<<<<< HEAD
  handleDataElement = val =>
    this.setState({ color: val.color });


  handleQuantity = (e) => this.setState({ quantity: Number(e.target.value) });

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted form");
  };

  render() {
    console.log(this);
    const { classes } = this.props;
=======
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
>>>>>>> master

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
                    <MainNav />
                  </div>
                </Grid>

                <div className="productInnerWrapper">
<<<<<<< HEAD
                  <Grid item xs={12} sm={12} md={6} lg={6}>
                    <div className="productImage">
                      <img
                        src={sample}
                        alt={"product"}
                        width="650"
                        height="450"
                      />
                    </div>
                  </Grid>
                  <Grid item xs={12} sm={12} md={6} lg={6}>
                    <div className="productDetails">
                      <h2>Mens Plain Tshirt</h2>
                      <h5>Seller: ClothesMart (50 sales)</h5>

                      <form onSubmit={this.handleSubmit}>
                        <div className="productPrice">
                          <h6>Price</h6>
                          <div className="priceTag">
                            <Fab
                              className={classes.fabActionButton}
                              variant={"extended"}
                              color="primary"
                            >
                              £44.99
                              <LoyaltyTwoToneIcon />
                            </Fab>
                          </div>
                        </div>
                        <div className="productSection">
                          <h6>Colour</h6>
                          <div className="productColors">
                            <RadioColors
                              handleDataElement={this.handleDataElement}
                            />
                          </div>
                        </div>
                        <div className="productSection">
                          <h6>Quantity</h6>
                          <div className="productQty">
                            <TextField
                              color="secondary"
                              type="number"
                              placeholder="Enter quantity"
                              InputProps={{
                                inputProps: { min: 0, max: 10 },
                              }}
                              InputLabelProps={{ shrink: true }}
                              onChange={(e) => this.handleQuantity(e)}
                              id="outlined-secondary"
                              // label="Enter quantity"
                            />
                          </div>
                        </div>
                        <div className="productSection">
                          <div className="productButton">
                            <Button
                              variant="contained"
                              size="large"
                              color="primary"
                            >
                              Add to Cart
                            </Button>
                          </div>
                        </div>
                      </form>
                    </div>
=======
                  <Grid item xs={12} sm={12} lg={6}>
                    <BounceInDownDiv>
                      <div className="productImage">
                        <img src={image} alt={name} width="640" height="480" />
                      </div>
                    </BounceInDownDiv>
>>>>>>> master
                  </Grid>
                  <Grid item xs={12} sm={12} lg={6}>
                    <FadeInDiv>
                      <div className="productDetails">
                        <h2>
                          {name} <span className="detailsCat">[{cat}]</span>
                        </h2>
                        <h5>{description}</h5>

<<<<<<< HEAD
                    <div className="productMoreDesc">
                      <Grid item xs={6} md={4} lg={4}>
                        <section>
                          <div>
                            <h5>ProductDetails</h5>
                            <p>
                              Lorem ipsum dolor sit amet consectetur adipiscing
                              elit euismod magnis sodales habitasse ut pharetra
                              enim, auctor sociis vestibulum netus
                            </p>
                            <h6>
                              <small>Specifications</small>
                            </h6>
                            <p>
                              suspendisse viverra phasellus tempus mattis vel
                              duis erat. Libero feugiat pretium dis aliquet in
                              hac, lectus semper posuere luctus iaculis inceptos
                            </p>
                            <h6>
                              <small>Manufacturer</small>
                            </h6>
                            <p>
                              Das aliquet in hac, lectus sempers himenaeos class
                              in a, nam lacus ante dictumst habitant aptent
                              tincidunt.
                            </p>
                          </div>
                        </section>
                      </Grid>
                      <Grid item xs={6} md={4} lg={4}>
                        <section>
                          <div>
                            <h5>Size Guide</h5>
                            <p>
                              Bitasse ut pharetra enim, auctor sociis vestibulum
                              netus. Placerat sem sed erat parturient turpis et
                              arcu velit, purus leo porttitor nulla neque
                              himenaeos class in a, nam lacus ante dictumst
                              habitant aptent tincidunt.
                            </p>
                            <h6>
                              <small>Manufacturer</small>
                            </h6>
                            <p>
                              Lorem ipsum dolor sit amet consectetur adipiscing
                              elit euismod magnis sodales habitasse ut pharetra
                              enim.
                            </p>
                          </div>
                        </section>
                      </Grid>
                      <Grid item xs={12} md={4} lg={4}>
                        <section className="productLastSection">
                          <div>
                            <h5>Items Like This</h5>
                            <p>
                              Libero feugiat pretium dis aliquet in hac, lectus
                              semper posuere arcu velit purus.
                            </p>
                            <div className="productMoreLikethis">
                              <ul>
                                <li>
                                  <a
                                    className="likethisLink"
                                    href="#morelikethis"
                                    rel="nonreferrer nonopenenr"
                                    title="title"
                                  >
                                    dis aliquet in hac
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="likethisLink"
                                    href="#morelikethis"
                                    rel="nonreferrer nonopenenr"
                                    title="title"
                                  >
                                    dis aliquet in hac
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="likethisLink"
                                    href="#morelikethis"
                                    rel="nonreferrer nonopenenr"
                                    title="title"
                                  >
                                    dis aliquet in hac
                                  </a>
                                </li>
                              </ul>
=======
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
>>>>>>> master
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
