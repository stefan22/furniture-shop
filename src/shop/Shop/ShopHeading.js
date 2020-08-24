import React from "react";
import "./styles.scss";

const ShopHeading = ({ heading }) => {
  let isHeading = heading || "Furniture Shop";
  return (
    <div className="isShopHeading">
      <h1>{isHeading}</h1>
    </div>
  );
};

export default ShopHeading;
