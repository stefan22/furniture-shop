import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./styles.scss";

class ProductDetails extends Component {


  render() {
    //console.log(this.props.match.params)
    //console.log(this);
    return (
      <div className="productDetails">
        Product details
      </div>
    );
  }
}

export default withRouter(ProductDetails);
