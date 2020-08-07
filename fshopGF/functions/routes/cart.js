const { db } = require("../utils/admin");

exports.getCart = (req,res) => {
  db.collection("cart").get()
    .then(data => {
      let cart = [];
      data.forEach(doc => {
        cart.push(doc.data());
      })
      return res.json(cart);
    })
    .catch(err => console.error(err));
}; // getCart
