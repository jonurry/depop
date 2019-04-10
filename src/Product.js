import React from 'react';

export default class Product extends React.Component {
  constructor(props) {
    super(props);
    this.product = props.product;
  }

  render() {
    return (
      <div className="product">
        <img src={this.product.img} alt={this.product.title} />
        <div>{this.product.title ? this.product.title : 'No title'}</div>
        <div>{this.product.brand ? this.product.brand : 'No brand'}</div>
        <div>{this.product.size ? this.product.size : 'No size'}</div>
        <div>£{this.product.price ? this.product.price : 'No price'}</div>
      </div>
    );
  }
}
