import React, { Component } from "react";
// mui
import Grid from "@material-ui/core/Grid";
// comps
import ProductList from "../ProductList";
import TopNavigation from "../TopNavigation";
import MainNavigation from "../MainNavigation";
import CartInfo from "../CartInfo";
// styles
import "./styles.scss";

const baseURL = "/shop/products";

class Shop extends Component {
  handleFilterProducts = (cat, prdts) => {
    let products = [];
    if (cat === undefined) return prdts; //not predefined
    prdts.filter((
      p //by category
    ) =>
      p.category.toLowerCase() === cat.toLowerCase() ? products.push(p) : true
    );
    return products;
  };


  render() {
    const { category } = this.props.match.params;


    return (
      <Grid container justify={"center"} spacing={0}>
        <div className="mainWrapper">
          <Grid item zeroMinWidth md={2} lg={2}>
            <div className="sideNavCol">
              <TopNavigation
                baseURL={baseURL}
                categories={this.props.shop.categories}
              />
            </div>
          </Grid>

          <Grid item xs={12} md={10} lg={10}>
            <MainNavigation />

            <CartInfo
              deleteFromCart={this.props.deleteFromCart}
              totalCartItems={this.props.totalCartItems}
              cart={this.props.cart}
            />

            <div className="mainCol">
              <main className="content">
                <div className="mainContent">
                  <div className="mainHeader">
                    <h1>Furniture</h1>
                  </div>
                  <div className="mainProducts">
                    {!!this.props.products && (
                      <ProductList
                        addToCart={this.props.addToCart}
                        cart={this.props.cart}
                        products={this.handleFilterProducts(
                          category,
                          this.props.products
                        )}
                      />
                    )}
                  </div>
                </div>
              </main>
              <footer>footer</footer>
            </div>
          </Grid>
        </div>
      </Grid>
    );
  }
}


export default Shop;
