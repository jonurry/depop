import React from 'react';
import Like from './Like.js';

export default class Product extends React.Component {
  constructor(props) {
    super(props);
    this.product = props.product;
    this.index = props.index;
    this.onLikeProduct = this.onLikeProduct.bind(this);
  }

  onLikeProduct() {
    this.props.onLikeProduct(this.index);
  }

  render() {
    const classes = `like ${this.product.liked ? 'liked' : ''}`;
    return (
      <div className="product">
        <div className={classes} onClick={this.onLikeProduct}>
          <Like />
        </div>
        <img src={this.product.img} alt={this.product.title} />
        <div>{this.product.title ? this.product.title : 'No title'}</div>
        <div>{this.product.brand ? this.product.brand : 'No brand'}</div>
        <div>{this.product.size ? this.product.size : 'No size'}</div>
        <div>£{this.product.price ? this.product.price : 'No price'}</div>
      </div>
    );
  }
}
