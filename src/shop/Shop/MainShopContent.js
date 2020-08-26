import React, { Component } from "react";
// comp
import MainJumbo from "../../components/MainJumbo";
import ProductList from "../ProductList";
import { FadeInDiv } from "../../components/animations/FadeInDiv";
// styles
import "./styles.scss";

class MainShopContent extends Component {
  render() {
    const { products, addToCart, cart, bigJumbo } = this.props;

    return (
      <>
        <MainJumbo bigJumbo={bigJumbo} />

        <div className="mainCol">
          <div className="topLiner"></div>
          <main className="content">
            <div className="mainContent">
              <div className="mainProducts">
                <FadeInDiv>
                  <ProductList
                    addToCart={addToCart}
                    cart={cart}
                    products={products}
                  />
                </FadeInDiv>
              </div>
            </div>
          </main>
        </div>
      </>
    );
  }
}

export default MainShopContent;
