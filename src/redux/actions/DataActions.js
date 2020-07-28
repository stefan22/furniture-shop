import axios from "axios";
import type from "../Types";
import {Urls} from "../Urls";

//http://localhost:4000/api/products?_page2&_limit=20&_sort=name


export const doLoadData = () => dispatch => {
  //console.log(`${Urls.LOAD_PRODUCTS}?_limit=20`);

  axios.all([
    axios.get(`${Urls.LOAD_PRODUCTS}?_limit=20`),
    axios.get(Urls.LOAD_CATEGORIES)
  ])
  .then(axios.spread((prods,cats) => {
    const products = {};
    products.total = Number(prods.headers["x-total-count"]);
    products.items = prods.data;
    dispatch({
      type: type.SET_PRODUCTS,
      payload: products,
    });
    dispatch({
      type: type.SET_CATEGORIES,
      payload: cats.data,
    });
  }))
  .catch(err => console.log(err));
}

























// export const doLoadData = () => dispatch => {
//   axios.all([
//     axios.get(Urls.LOAD_PRODUCTS),
//     axios.get(Urls.LOAD_CATEGORIES)
//   ])
//   .then(axios.spread((prods,cats) => {
//     console.log(prods.data,cats.data);
//     dispatch({
//       type: type.SET_PRODUCTS,
//       payload: prods.data,
//     });
//     dispatch({
//       type: type.SET_CATEGORIES,
//       payload: cats.data,
//     });
//   }))
//   .catch(err => console.log(err));
// }
