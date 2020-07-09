import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// comps
import ProductList from './ProductList';


class TopNavigation extends Component {

	render() {
		return (
      <div className="site-wrap"  id="home-section">
        <header className="site-navbar py-4 js-sticky-header site-navbar-target">
          <div class="container">
            <div class="row align-items-center">


          <Link to={this.props.baseURL}
            className="btn btn-secondary btn-block">All</Link>

            { !!this.props.categories &&
              this.props.categories.map(cat =>
              <Link key={cat}
                to={`${this.props.baseURL}/${cat.toLowerCase()}`}
                className="btn btn-secondary btn-block"
              >{cat} </Link>
            )}

              </div>
            </div>
         </header>
      </div>
    )
 }
}


export default TopNavigation;
