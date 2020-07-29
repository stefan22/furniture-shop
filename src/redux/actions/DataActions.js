import axios from "axios";
import type from "../Types";
import {Urls} from "../Urls";


export const doLoadData = (page=1) => dispatch => {
  // fetch data
  axios.all([
    axios.get(`${Urls.LOAD_PRODUCTS}_page=${page}&_limit=20`),
    axios.get(Urls.LOAD_CATEGORIES)
  ])
  .then(axios.spread((prods,cats) => {
    const products = {};
    products.perPage = 20;
    products.page = 1;
    products.totalCount = Number(prods.headers["x-total-count"]);
    products.totalPages = Math.floor(products.totalCount/products.perPage);
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



export const getPage = (pg=1) => dispatch => {
  const pagination = {};
  //fetch page
  fetch(`${Urls.LOAD_PRODUCTS}_page=${pg}&_limit=20`)
  .then(res => res.json())
  .then(data => {
    pagination.products = data;
    pagination.page = pg;
    dispatch({
      type: type.SET_PAGE,
      payload: pagination,
    });
  })
} //getPage





















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
