import axios from "axios";
import type from "../Types";
import api from "../APIs";

import { setAuthToken, getAuthToken } from "../../helpers";

/**
 * @ Fetching data from GC Firebase
 * @ Todo: rebuild pagination.
 */

let idToken;
let authProducts = [];
let categories = [];

// with token
const getProductsNCategoriesFromStorage = (dispatch) => {
  // get products & categories
  authProducts = JSON.parse(localStorage.getItem("products"));
  categories = JSON.parse(localStorage.getItem("categories"));
  dispatch({
    type: type.SET_PRODUCTS,
    payload: authProducts
  });
  dispatch({
    type: type.SET_CATEGORIES,
    payload: categories
  });
};

// without token
const getProductsNCategoriesFromDB = (user, dispatch) => {
  axios //get token
    .post(`${api.NEW_BASE_URL}/user/login`, user)
    .then((response) => {
      idToken = response.data;
      setAuthToken(idToken); // save token
      dispatch(getProductsData()); // fetch products
      dispatch(getCategoriesData()); // fetch cats
    })
    .catch((err) => {
      console.log(err.response);
    });
};

// fetch products db
const getProductsData = () => (dispatch) => {
  fetch(`${api.NEW_BASE_URL}/shop/products/all`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${idToken}`
    },
    referrer: "",
    mode: "cors",
    cache: "reload",
    redirect: "follow"
  })
    .then((data) => data.json())
    .then((res) => {
      localStorage.setItem("products", JSON.stringify(res));
      dispatch({
        type: type.SET_PRODUCTS,
        payload: res
      });
    })
    .catch((err) => console.log(err));
};

// fetch categories db
const getCategoriesData = () => (dispatch) => {
  fetch(`${api.NEW_BASE_URL}/shop/categories/all`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    },
    referrer: "",
    mode: "cors",
    cache: "reload",
    redirect: "follow"
  })
    .then((data) => data.json())
    .then((res) => {
      localStorage.setItem("categories", JSON.stringify(res));
      dispatch({
        type: type.SET_CATEGORIES,
        payload: res
      });
    })
    .catch((err) => console.log(err));
};

// auth data
export const getAuthenticatedData = () => (dispatch) => {
  // is token?
  let token = getAuthToken("fbToken");
  const user = {
    email: api.EMAIL,
    password: api.PASSWORD
  };

  if (token !== null && token.includes("Bearer")) {
    getProductsNCategoriesFromStorage(dispatch);
  } else {
    getProductsNCategoriesFromDB(user, dispatch);
  }
};
