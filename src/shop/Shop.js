import React, { Component } from 'react';
// comps
import ProductList from './ProductList';
import TopNavigation from './TopNavigation';

const baseURL = '/shop/products';

class Shop extends Component {

  handleFilterProducts = (cat, prdts) => {
    let products = [];
    if (cat === undefined) return prdts; //not predefined
    prdts.filter(p => //by category
      p.category.toLowerCase() === cat.toLowerCase()
        ?  products.push(p) : true);
    return products;
  }

	render() {
    const { category } = this.props.match.params;
		return <div className="container-fluid">
      <div className="row">
        <div className="col bg-dark text-white">
          <div className="navbar-brand">Furniture Shop</div>
        </div>
      </div>
      <div className="row">
        <div className="col-3 p-2">
            <TopNavigation
              baseURL={baseURL}
              categories={this.props.shop.categories}
            />
        </div>
        <div className="col-9 p-2">
           {!!this.props.products &&
            <ProductList
              products={this.handleFilterProducts(category, this.props.products)}
            />}
        </div>
        </div>
      </div>
	}

}


export default Shop;
