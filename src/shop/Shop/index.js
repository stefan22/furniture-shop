import React, { Component } from "react";
// comps
import MainContent from "../layout/MainContent";
// mui
import Grid from "@material-ui/core/Grid";
// comps
import SideNavigation from "../SideNavigation";
<<<<<<< HEAD
import MobileNavigation from "../MobileNavigation";
import CartInfo from "../CartInfo";
import Pagination from "../Pagination";

=======
import Spinner from "../../components/Spinner";
>>>>>>> master
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
<<<<<<< HEAD
    this.props.doLoadData();
    //this.props.getAuthenticatedData();
=======
    this.props.getAuthenticatedData();
>>>>>>> master
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
      shop: { page, totalPages },
      ui
    } = this.props;

    return (
      <Grid container justify={"center"} spacing={0}>
        <div className="mainWrapper">
          <Grid item zeroMinWidth lg={2}>
            <SideNavigation
              handleJumboOff={this.props.handleJumboOff}
              baseURL={baseURL}
              currentCategory={category}
              categories={this.props.shop.categories}
            />
          </Grid>

          {products.length === 0 ? (
            <Spinner />
          ) : (
            <MainContent
              mainTitle={"Furniture Shop"}
              deleteFromCart={this.props.deleteFromCart}
              totalCartItems={this.props.totalCartItems}
              cart={this.props.cart}
<<<<<<< HEAD
            />
            <ShopHeading mainTitle={"Furniture Shop"} />

            <MainShopContent
=======
              bigJumbo={ui.bigJumbo}
>>>>>>> master
              addToCart={this.props.addToCart}
              category={category}
              products={this.handleFilterProducts(category, products)}
              page={page}
              getPage={this.props.getPage}
              totalPages={totalPages}
            />
          )}
        </div>
      </Grid>
    );
  }
}

export default Shop;
