const { db } = require("../utils/admin");


exports.getProducts = (req,res) => {
  db.collection("products").get()
    .then(data => {
      let products = [];
      data.forEach(doc => {
        products.push({
          id: doc.id,
          ...doc.data()
        });
      })
      return res.json(products);
    })
    .catch(err => console.error(err));
}; // getProducts



exports.createProduct = (req,res) => {
  if (req.method !== "POST") {
    return res.status(400).json({error: "Method not allowed"});
  }
  const product = {
    image: req.body.image,
    category: req.body.category,
    price: req.body.price,
    name: req.body.name,
    description: req.body.description,
  };

  db.collection("products")
    .add(product)
    .then(doc => {
      res.json({
        message: `Product added successfully. Product id: ${doc.id}
      `});
    })
    .catch(err => {
      res.status(500).json({error: "Error adding new product"});
      console.error(err);
    })


}; // createProduct


exports.getProduct = (req,res) => {
  let productData = {}
  db.doc(`/products/${req.params.id}`).get()
    .then(doc => {

      if (!doc.exists) {
        return res.json({error: `product not found`});
      }
      productData = {
        id: doc.id,
        description: doc.data().description,
        image: doc.data().image,
        name: doc.data().name,
        category: doc.data().category,
        price: doc.data().price,
      }

      return res.json({product: productData});
    })
    .catch(err => {
      console.error(err);
      return res.json({error: err.code});
    })

} // getProduct
