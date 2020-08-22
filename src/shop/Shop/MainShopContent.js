import React, { Component } from "react";
// comp
import MainContentNav from "./MainContentNav";
import ProductList from "../ProductList";
import { FadeInAnimationDiv } from "../../components/ProductListFadeIn";
// styles
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
                <FadeInAnimationDiv>
                  <ProductList
                    addToCart={addToCart}
                    cart={cart}
                    products={products}
                  />
                </FadeInAnimationDiv>
              </div>

          </div>
        </main>
      </div>
    );
  }
}

export default MainShopContent;
