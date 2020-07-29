import types from "./Types";

const protocol = "http";
const hostname = "localhost";
const port = 4000;


export const Urls = {
  [types.LOAD_PRODUCTS]: `${protocol}://${hostname}:${port}/api/products?`,
  [types.LOAD_CATEGORIES]: `${protocol}://${hostname}:${port}/api/categories`
}



