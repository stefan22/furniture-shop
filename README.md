# React Store

- No longer fetching data with Express/jsonServer/FakerData
  * pdetails branch and it works great.
  * npm install dependencies and npm start
- Now fetching data from my GC Functions and Firestore db.

- New Data info:  https://fshop-f04aa.web.app/#home
- Need to redo pagination


<hr />
<br />




### Start [master branch]
- `npm start` opens in browser:
  + `localhost:3000` [client]


### Start [pDetails branch]
- `npm start` opens in browser:
  + `localhost:3000` [client]
  + `localhost:4000` [server]


### Folders
- redux [actions,reducers,store,types]
- shop [shopConnector & components: index.js,styles.scss, ]
- server `localhost:4000/api/products`  [pDetails branch]


### Functionality so far

• Products  `/shop/products`
- categories/data filtered-by, right-side menu
- click a product [add-to-cart] button & goto `/shop/cart`
- [cart badge] upper-right side, displays items currently on cart
- click [cart-icon] svg, it routes to `/shop/cart`



• Cart `/shop/cart`

- update quantity, it updates total
- remove item, it updates total
- option to [continue-shopping] button (back to `/shop/products`) || [proceed to checkout]
  button `/shop/checkout`


### Data [pDetails branch]

```
  @ json-server
  =============

  @url => http://localhost:4000/api/products?
  @param => category
  @param => _page
  @param => _limit
  @param => _sort

  # filter by param
  # ex: http://localhost:4000/api/products?_page2&_limit=20&_sort=name

```


```
  @ faker-data  [pDetails branch]
  ============

    ø Categories
      -----------
      • furniture
      • lighting
      • accessories

    ø Products
      ------------
      • id <number>
      • name <string>
      • image <string>
      • category <string>
      • description <string>
      • price <number>


  @ endpoints
  ===========
  https://fshop-f04aa.web.app/#products

```




<br />
<hr />
<br />

<kbd>screenshot</kbd>

![](src/images/screenshot.png)

<br/>








### GC functions endpoints

```
  //products
  app.get("/shop/products/all", getProducts );
  app.get("/shop/products/:category/:id", getProduct);
  //categories
  app.get("/shop/categories/all", getCategories);
  //cart
  app.get("/shop/cart", getCart);
  //product
  app.post("/shop/product", createProduct);
  //user
  app.post("/user/signup", registerUser);
  app.post("/user/login", loginUser);

```






<br />
<br />

<hr />



