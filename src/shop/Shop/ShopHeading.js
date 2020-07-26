import React from "react";


const ShopHeading = heading => {
    let isHeading = heading.heading || "Furniture Shop";
    return <h1>
        {isHeading}
      </h1>
}


export default ShopHeading;
