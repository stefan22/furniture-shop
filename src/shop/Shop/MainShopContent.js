import React, { Component } from "react";
// comp
import MainJumbo from "../../components/MainJumbo";
import ProductList from "../ProductList";
// styles
import "./styles.scss";

class MainShopContent extends Component {
  render() {
    const { products, addToCart, cart, bigJumbo, category } = this.props;

    return (
      <>
        <MainJumbo category={category} bigJumbo={bigJumbo} />
        <div className="mainCol">
          <div className="topLiner"></div>
          <main className="content">
            <div className="mainContent">
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
      </>
    );
  }
}

export default MainShopContent;
