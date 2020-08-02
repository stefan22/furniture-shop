import React, { Component } from "react";
// comp
import MainContentNav from "./MainContentNav";
import ProductList from "../ProductList";
import "./styles.scss";


class MainShopContent extends Component {

  render() {
    const { products, addToCart, cart } = this.props;

    return (
      <div className="mainCol">
        <div className="topLiner"></div>
        <main className="content">
          <div className="mainContent">
            <div className="mainHeader">

              <MainContentNav />

            </div>
            <div className="mainProducts">
              <ProductList
                addToCart={addToCart}
                cart={cart}
                products={products}
              />
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default MainShopContent;
