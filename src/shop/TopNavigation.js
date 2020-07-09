import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// comps
import ProductList from './ProductList';


class TopNavigation extends Component {

	render() {
		return (
      <>
        <Link to={this.props.baseURL}
          className="btn btn-secondary btn-block">All</Link>

          { !!this.props.categories &&
            this.props.categories.map(cat =>
              <Link key={cat}
                to={`${this.props.baseURL}/${cat.toLowerCase()}`}
                className="btn btn-secondary btn-block"
              >
                {cat}
              </Link>

            )

          }

      </>
    )
 }
}


export default TopNavigation;
