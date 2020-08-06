import React, { Component, createRef } from "react";
import { withRouter } from "react-router-dom";
// comps
import MainContentNav from "../Shop/MainContentNav";
import SideNavigation from "../SideNavigation";
import MobileNavigation from "../MobileNavigation";
import CartInfo from "../CartInfo";
import ShopHeading from "../Shop/ShopHeading";
//import ColorSelect from "./ColorSelect";
import RadioColors from "./RadioColors";
// matui
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Fab from "@material-ui/core/Fab";
import LoyaltyTwoToneIcon from "@material-ui/icons/LoyaltyTwoTone";
// styles
import { withStyles } from "@material-ui/core/styles";
import "./styles.scss";
// imgs
import sample from "../../images/betty.jpg";

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
    };
  }

  componentDidUpdate() {
    this.detailsPageRef.current.scrollIntoView({ behavior: "smooth" });
  }

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

    return (
      <Grid container align={"justify"} spacing={0}>
        <div ref={this.detailsPageRef} className="mainWrapper">
          <Grid item zeroMinWidth md={2} lg={2}>
            <div className="sideNavCol">
              <SideNavigation categories={this.props.shop.categories} />
            </div>
          </Grid>

          <Grid item zeroMinWidth md={10} lg={10}>
            <div className="mainProductWrapper">
              <Grid container justify={"center"} spacing={0}>
                <Grid item xs={12} sm={12} md={12} lg={12}>
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
                  </Grid>
                </div>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                  <div className="productDescription">
                    <div className="productMoreSubtitle">
                      <p>
                        Love plain furniture? Then this is the item for you. Is
                        comfortable and it currently on sale
                      </p>
                    </div>

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
                            </div>
                            <h6>
                              <small>We thought you might like this</small>
                            </h6>
                            <p>Libero feugiat pretium dis aliquet in hac.</p>
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
                              </ul>
                            </div>
                          </div>
                        </section>
                      </Grid>
                    </div>
                  </div>
                </Grid>
              </Grid>
            </div>
          </Grid>
        </div>
      </Grid>
    );
  }
}

export default withRouter(withStyles(styles)(ProductDetails));
