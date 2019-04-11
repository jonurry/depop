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
    const likeClasses = `like ${this.product.liked ? 'liked' : ''}`;
    const productClasses = `product ${
      this.props.hide && this.product.sold ? 'hide' : ''
    }`;
    return (
      <div className={productClasses}>
        <div className={likeClasses} onClick={this.onLikeProduct}>
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
