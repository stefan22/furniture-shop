# React Store &nbsp; :department_store:

> Candidate for deletion :neckbeard: :boom:  😱    🎻  
 
See [Repo Link](https://donpio.tech/repositories/fshop/)

Changes: no longer fetching data with Node/Express, JSONServer/FakerData

- Moved proj to [PDETAILS] Branch

## Installation

Install the dependencies and run by:

```sh

cd [to-local-folder]
$ npm install
$ npm start
```

```
  @url => http://localhost:4000/api/products?
  @param => category
  @param => _page
  @param => _limit
  @param => _sort

```


## Filter by param
ex: `http://localhost:4000/api/products?_page2&_limit=20&_sort=name`


## Faker-data
  
  
```
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

```


##  @ routes

• /shop/products/:category       
• /shop/products/cart   
• /shop/produts/checkout    
• /shop/products/:category/:id   
• /shop/products/all <redirect>    
• /shop/products/:category/:id  (details page)    



### Moved data to GCFirebase

- Need to redo pagination






<br />
<hr />
<br />

<kbd>screenshot</kbd>

![](src/images/screenshot.png)

<br/>



### New data

- Hosted with GC Functions Firestore DB
- See [DataLink](https://fshop-f04aa.web.app/#home)

#### Main folders

- Redux: actions, reducers, store, types
- Shop: react components

#### Old data

### firebase GCP functions
(production)

- deployed fb functions
- endpoints:

```
  app.get("/shop/products/all", getProducts );

  app.get("/shop/products/:category/:id", getProduct);

  app.get("/shop/categories/all", getCategories);

  app.get("/shop/cart", getCart);

  app.post("/shop/product", createProduct);

```



| Param    | Url                                                        |
| -------- | ---------------------------------------------------------- |
| category | localhost:4000/api/products?category=furniture             |
| \_page   | localhost:4000/api/products?\_page2                        |
| \_limit  | localhost:4000/api/products?\_page2&\_limit=20             |
| \_sort   | localhost:4000/api/products?\_page2&\_limit=20&\_sort=name |

##### Faker data products & categories

###### cateogries

- [Category] - furniture
- [Category] - lighting
- [Category] - accessories

###### products

- [product] - id :number
- [product] - name :string
- [product] - image :string
- [product] - category :string
- [product] - description :string
- [product] - price :number

### Todos


```

 Options -MultiViews
RewriteEngine On
Rewritecond %{REQUEST_FILENAME} !-f
RewriteRule ^ index.html [QSA,L]

```
