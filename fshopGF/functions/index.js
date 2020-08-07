const functions = require('firebase-functions');
const cors = require('cors');

const express = require("express");
const app = express();

// middleware
app.use(cors());
app.options('*', cors());

// products
const { getProducts, createProduct, getProduct } = require("./routes/products");
const { getCategories } = require("./routes/categories");
const { getCart } = require("./routes/cart");

app.get("/shop/products/all", getProducts );

app.get("/shop/products/:category/:id", getProduct);

app.get("/shop/categories/all", getCategories);

app.get("/shop/cart", getCart);

app.post("/shop/product", createProduct);


// api
exports.api = functions.https.onRequest(app);
