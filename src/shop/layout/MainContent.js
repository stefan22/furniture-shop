import React from "react";
// mui
import Grid from "@material-ui/core/Grid";
// comps
import MobileNavigation from "../MobileNavigation";
import ShopHeading from "../Shop/ShopHeading";
import CartInfo from "../CartInfo";
import MainNav from "../Shop/MainNav";
import MainShop from "../Shop/MainShop";
import Pagination from "../Pagination/index";

const MainContent = ({
  bigJumbo,
  addToCart,
  deleteFromCart,
  totalCartItems,
  cart,
  category,
  products,
  page,
  getPage,
  totalPages
}) => {
  return (
    <Grid item xs={12} md={12} lg={10}>
      <header>
        <MobileNavigation />
        <ShopHeading mainTitle={"Furniture Shop"} />
        <CartInfo
          deleteFromCart={deleteFromCart}
          totalCartItems={totalCartItems}
          cart={cart}
        />
        <MainNav />
      </header>

      <MainShop
        bigJumbo={bigJumbo}
        addToCart={addToCart}
        deleteFromCart={deleteFromCart}
        totalCartItems={totalCartItems}
        cart={cart}
        category={category}
        products={products}
      />

      <Pagination page={page} getPage={getPage} totalPages={totalPages} />

      <footer>
        <h3>Footer</h3>
      </footer>
    </Grid>
  );
};

export default MainContent;
