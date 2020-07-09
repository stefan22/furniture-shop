import React, { Component } from 'react';
import ProductList from './ProductList';
import TopNavigation from './TopNavigation';

const baseURL = '/shop/products';

class Shop extends Component {

	render() {
    //console.log(this);
		return <div className="container-fluid">
      <div className="row">
        <div className="col bg-dark text-white">
          <div className="navbar-brand">Furniture Shop</div>
        </div>
        <div className="row">
          <div className="col-3 p-2">
            <TopNavigation
              baseURL={baseURL}
              categories={this.props.shop.categories}
            />
          </div>
          <div className="col-3 p-2">
            <ProductList
              products={this.props.shop.products}
            />
          </div>
        </div>
      </div>
    </div>
	}

}


export default Shop;
