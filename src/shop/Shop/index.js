import React, { Component } from "react";
// mui
import Grid from "@material-ui/core/Grid";
// comps
import MainShopContent from "./MainShopContent";
import ShopHeading from "./ShopHeading";
import SideNavigation from "../SideNavigation";
import MobileNavigation from "../MobileNavigation";
import CartInfo from "../CartInfo";
import Pagination from "../Pagination/index";
import Spinner from "../../components/Spinner";
// styles
import "./styles.scss";

const baseURL = "/repositories/fshop/shop/products";

class Shop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  componentDidMount() {
    this.props.getAuthenticatedData();
  }

  handleFilterProducts = (cat = "all", prdts = []) => {
    if (cat === "all") return prdts; // show all
    let products = [];
    prdts.filter((
      p // by category
    ) =>
      p.category.toLowerCase() === cat.toLowerCase() ? products.push(p) : true
    );
    return products;
  };

  render() {
    const { category } = this.props.match.params;
    const {
      products,
      shop: { page, totalPages }
    } = this.props;

    return (
      <Grid container justify={"center"} spacing={0}>
        <div className="mainWrapper">
          <Grid item zeroMinWidth lg={2}>
            <div className="sideNavCol">
              <SideNavigation
                baseURL={baseURL}
                currentCategory={category}
                categories={this.props.shop.categories}
              />
            </div>
          </Grid>

          {products.length === 0 ? (
            <Spinner />
          ) : (
            <Grid item xs={12} md={12} lg={10}>
              <header>
                <MobileNavigation />
                <ShopHeading mainTitle={"Furniture Shop"} />
                <CartInfo
                  deleteFromCart={this.props.deleteFromCart}
                  totalCartItems={this.props.totalCartItems}
                  cart={this.props.cart}
                />
              </header>

              <MainShopContent
                addToCart={this.props.addToCart}
                deleteFromCart={this.props.deleteFromCart}
                totalCartItems={this.props.totalCartItems}
                cart={this.props.cart}
                category={category}
                products={this.handleFilterProducts(category, products)}
              />

              <Pagination
                page={page}
                getPage={this.props.getPage}
                totalPages={totalPages}
              />

              <footer>
                <h3>Footer</h3>
              </footer>
            </Grid>
          )}
        </div>
      </Grid>
    );
  }
}

export default Shop;
