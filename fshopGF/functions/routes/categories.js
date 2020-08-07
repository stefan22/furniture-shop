const { db } = require("../utils/admin");

exports.getCategories = (req,res) => {
  db.collection("categories").get()
    .then(data => {
      let categories = [];
      data.forEach(doc => {
        categories.push(doc.data());
      })
      return res.json(categories);
    })
    .catch(err => console.error(err));
}; // getCategories
