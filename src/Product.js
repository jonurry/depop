import React from 'react';

export default class Product extends React.Component {
  constructor(props) {
    super(props);
    this.product = props.product;
  }

  render() {
    return (
      <div>
        <img src={this.product.img} alt={this.product.title} />
        title brand size price
        <div>{this.product.title}</div>
        <div>{this.product.brand}</div>
        <div>{this.product.size}</div>
        <div>{this.product.price}</div>
      </div>
    );
  }
}
