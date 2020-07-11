import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
// redux
import { connect } from 'react-redux';
// comps
import Shop from './Shop/index';



class ShopConnector extends Component {


  render () {
    const { products } = this.props.shop;

    return <Switch>
        <Route path='/shop/products/:category?'
          render={routeProps =>
            <Shop { ...this.props } {...routeProps}
              products={products}
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
