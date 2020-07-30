import React, { Component } from "react";
import { withRouter } from "react-router-dom";
// comps
import DetailsHeading from "./DetailsHeading";
// matui
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
// styles
import "./styles.scss";
// imgs
import sample from "../../images/betty.jpg";


class ProductDetails extends Component {
  render() {
    console.log(this.props.match.params);
    console.log(this);
    return (
      <div className="mainWrapper">
        <DetailsHeading
          categories={this.props.shop.categories}
        />
        <div className="mainProductWrapper">
          <Grid container justify={"center"} spacing={0}>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <div className="productImage">
                <img src={sample} alt={"product"} width="650" height="450" />
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <div className="productDetails">
                <h3>Mens Plain Tshirt</h3>
                <h5>Seller: ClothesMart (50 sales)</h5>
                <div className="productPrice">
                  <h6>
                    <small>Price</small>
                  </h6>
                  <h3>£44.99</h3>
                </div>
                <div className="productSection">
                  <h6>
                    <small>Colour</small>
                  </h6>
                  <div className="productColors">
                    <div className="productColor white">
                      <small></small>
                    </div>
                    <div className="productColor black">
                      <small></small>
                    </div>
                  </div>
                </div>
                <div className="productSection">
                  <h6>
                    <small>Quantity</small>
                  </h6>
                  <div className="productQty">
                    <input type="number" name="qty" />
                  </div>
                </div>
                <div className="productSection">
                  <div className="productButton">
                    <Button variant="contained" size="medium" color="secondary">
                      Buy Now
                    </Button>
                  </div>
                </div>
              </div>
            </Grid>
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
                        <h4>ProductDetails</h4>
                        Lorem ipsum dolor sit amet consectetur adipiscing elit
                        euismod magnis sodales habitasse ut pharetra enim, auctor
                        sociis vestibulum netus
                        <h6>
                          <small>Specifications</small>
                        </h6>
                        suspendisse viverra phasellus tempus mattis vel duis erat.
                        Libero feugiat pretium dis aliquet in hac, lectus semper
                        posuere luctus iaculis inceptos
                        <h6>
                          <small>Manufacturer</small>
                        </h6>
                        Das aliquet in hac, lectus sempers himenaeos class in a,
                        nam lacus ante dictumst habitant aptent tincidunt.
                      </div>
                    </section>
                  </Grid>
                  <Grid item xs={6} md={4} lg={4}>
                    <section>
                      <div>
                        <h4>Size Guide</h4>
                        Bitasse ut pharetra enim, auctor sociis vestibulum netus.
                        Placerat sem sed erat parturient turpis et arcu velit,
                        purus leo porttitor nulla neque himenaeos class in a, nam
                        lacus ante dictumst habitant aptent tincidunt.
                        <h6>
                          <small>Manufacturer</small>
                        </h6>
                        Lorem ipsum dolor sit amet consectetur adipiscing elit
                        euismod magnis sodales habitasse ut pharetra enim.
                      </div>
                    </section>
                  </Grid>
                  <Grid item xs={12} md={4} lg={4}>
                    <section>
                      <div>
                        <h4>Items Like This</h4>
                        Libero feugiat pretium dis aliquet in hac, lectus semper
                        posuere arcu velit purus.
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
                        Libero feugiat pretium dis aliquet in hac.
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
      </div>
    );
  }
}

export default withRouter(ProductDetails);
