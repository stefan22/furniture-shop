const faker = require("faker");
const categories = ["furniture","lighting","accessories"];

const dataConfig = {
  productImage: ["nature","business","city","food","people"],
  totalItems: 100,
  imageCount: 0,
  products: [],
}

// generate 100
faker.seed(100);

const generateData = ({productImage,totalItems,imageCount,products} = dataConfig) => {
  for (let i = 1; i <= totalItems; i++) {
    if ( imageCount === productImage.length ) imageCount = 0;
    let category = faker.helpers.randomize(categories);
    products.push({
        id: i,
        name: faker.commerce.productName(),
        image: `http://lorempixel.com/640/480/${productImage[imageCount]}`,
        category: category,
        description: `${category}: ${faker.lorem.sentence(3)}`,
        price: Number(faker.commerce.price())
    });
    imageCount++;
  }
  return products;
} //generateData fn

generateData(dataConfig);

// export product/categories
module.exports = function () {
  return {
    categories: categories,
    products: dataConfig.products,
  }
}
