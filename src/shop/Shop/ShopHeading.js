import React from "react";
// styles
import "./styles.scss";

const ShopHeading = ({ heading }) => {
  let isHeading = heading || "Furniture Shop";
  return (
    <div className="isShopHeading">
      <h3>{isHeading}</h3>
    </div>
  );
};

export default ShopHeading;
