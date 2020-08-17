import axios from "axios";

export const SET_PATH = () => (
  window.location.host !== "location:3000" ? "/repositories/fshop/" : "/"
);


// Add token to local storage
export const setAuthToken = (token) => {
  let fbToken = `Bearer ${token}`;
  localStorage.setItem("fbToken", fbToken);
  axios.defaults.headers.common["Authorization"] = fbToken;
};

// get token from local storage
export const getAuthToken = (token) => localStorage.getItem(token);
