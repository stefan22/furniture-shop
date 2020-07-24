import React from "react";
// comps
import ProductList from "../ProductList";
import "./styles.scss";

const MainShopContent = (props) => {
  const { products, addToCart, cart, mainTitle } = props;
  let isMainTitle = mainTitle || "Furniture";
  return (
    <div className="mainCol">
      <main className="content">
        <div className="mainContent">
          <div className="mainHeader">
            <h1>{isMainTitle}</h1>
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
      <footer>footer</footer>
    </div>
  );
};

export default MainShopContent;
