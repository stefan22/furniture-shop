import React, { Component } from 'react';
import ProductList from './ProductList';


class TopNavigation extends Component {

	render() {
		return <div className="container-fluid">
				<div className="row">
						<div className="col bg-dark text-white">
								<div className="navbar-brand">Furniture Store</div>
						</div>
				</div>        
				<div className="row">
						<div className="col-3 p-2">
								<CategoryNavigation baseUrl="/shop/products" 
									categories={ this.props.categories } />
						</div>
						<div className="col-9 p-2">
								<ProductList products={ this.props.products } 
						</div>
				</div>
		</div>
 }
}


export default TopNavigation;