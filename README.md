# React Store &nbsp; :department_store:

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

### New data

- Hosted with GC Functions Firestore DB
- See [DataLink](https://fshop-f04aa.web.app/#home)

#### Main folders

- Redux: actions, reducers, store, types
- Shop: react components

#### Old data

- Url: "http://localhost:4000/api/products>?"

| Param | Url |
| ------ | ------ |
| category | localhost:4000/api/products?category=furniture |
| _page | localhost:4000/api/products?_page2  |
| _limit | localhost:4000/api/products?_page2&_limit=20  |
| _sort | localhost:4000/api/products?_page2&_limit=20&_sort=name  |

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

- Redo pagination
