import axios from "axios";
import type from "../Types";
import * as api from "../../API";

/**
* @ Fetching data from GC Firebase
* @ DataActions file it used Faker data
* @ Images are from http://lorempixel.com
* @ Now I have to rebuild pagination.
*/

let idToken;

// Add token to local storage
export const setAuthToken = (token) => {
  let fbToken = `Bearer ${token}`;
  localStorage.setItem("fbToken", fbToken);
  axios.defaults.headers.common["Authorization"] = fbToken;
};

// get token from local storage
export const getAuthToken = (token) => localStorage.getItem(token);


// get token
export const getAuthenticatedData = () => (dispatch) => {
  const user = {
    email: api.email,
    password: api.password,
  };
  dispatch({ type: type.SET_LOADING_ON });
  axios
    .post(`${api.newBaseURl}/user/login`, user)
    .then((response) => {
      idToken = response.data;
      setAuthToken(idToken); // save to local storage
      dispatch(getProductsData());
      dispatch(getCategoriesData())
    })
    .catch((err) => {
      console.log(err.response);
    });
};

// get products
const getProductsData = () => (dispatch) => {
  fetch(`${api.newBaseURl}/shop/products/all`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${idToken}`,
    },
    referrer: "",
    mode: "cors",
    cache: "reload",
    redirect: "follow",
  })
    .then((data) => data.json())
    .then((res) => {
      dispatch({
        type: type.SET_PRODUCTS,
        payload: res,
      });
    })
    .catch((err) => console.log(err));
};


const getCategoriesData = () => dispatch => {
  fetch(`${api.newBaseURl}/shop/categories/all`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    },
    referrer: "",
    mode: "cors",
    cache: "reload",
    redirect: "follow",
  })
  .then(data => data.json())
  .then(res => {
    dispatch({
      type: type.SET_CATEGORIES,
      payload: res
    });
  })
  .catch(err => console.log(err));
};

// let pageSize = 3;
// let field = "products";
// const query = ref.orderBy(field).limit(pageSize);

// function nextPage(last) {
//   return ref.orderBy(field).startAfter(last[field]).limit(pageSize);
// }

// function prevPage (first) {
//   return ref.orderBy(field)
//           .endBefore(first[field])
//           .limitToLast(pageSize)
// }
