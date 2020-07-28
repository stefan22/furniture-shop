import axios from "axios";
import type from "../Types";
import {Urls} from "../Urls";


export const doLoadData = () => dispatch => {
  axios.all([
    axios.get(Urls.LOAD_PRODUCTS),
    axios.get(Urls.LOAD_CATEGORIES)
  ])
  .then(axios.spread((prods,cats) => {
    console.log(prods.headers);

    dispatch({
      type: type.SET_PRODUCTS,
      payload: prods.data,
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
