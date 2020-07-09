import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
// redux
import { connect } from 'react-redux';
// comps
import Shop from './Shop';


const filterProducts = (products = [], category) =>
    (!category || category === 'All')
        ? products
        : products.filter(p => p.category.toLowerCase() === category.toLowerCase());

class ShopConnector extends Component {

  render () {
    const { products } = this.props;

    return <Switch>
        <Route path='/shop/products/:category?'
          render={  (routeProps) =>
            <Shop { ...this.props } { ...routeProps }
              products={filterProducts(products,routeProps.match.params.category)}
            />}
        />
        <Redirect to='/shop/products' />
      </Switch>


  }
}

const mapStateToProps = state => ({
  shop: state.shop,
});



export default connect(mapStateToProps)(ShopConnector);
