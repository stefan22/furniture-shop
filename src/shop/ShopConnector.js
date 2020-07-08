import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
// redux
import { connect } from 'react-redux';
import { doDataLoad } from '../data/ActionCreators';
import { DataTypes } from '../data/Types';


// comps
import TopNavigation from './TopNavigation';



const filterProducts = (products = [], category) => 
	(!category || category === "All") 
		? products 
		: products.filter(p => p.category.toLowerCase() === category.toLowerCase());




class ShopConnector extends Component {

	componentDidMount() {
		this.props.doDataLoad(DataTypes.CATEGORIES, DataTypes.PRODUCTS);
	}

	render() {
			return <Switch>

					<Route path="/shop/products/:category?"
						render={ (routeProps) => 
							<Shop { ...this.props } { ...routeProps } 
								products={ filterProducts(this.props.products, 
									routeProps.match.params.category) } />} />

					<Route path="/shop/cart" render={ (routeProps) => 
						<CartDetails { ...this.props } { ...routeProps }  />} />                                
					<Redirect to="/shop/products" />
			</Switch>           
		}

}




const mapStateToProps = (state) => ({
    products: state.products,
		categories: state.categories,
})

const mapActionsToProps = {
    doDataLoad,
}