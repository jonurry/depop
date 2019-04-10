import React from 'react';
import Product from './Product.js';
import './Products.css';

export default class Products extends React.Component {
  render() {
    const { products } = this.props;
    return (
      <div className="products">
        {products.map(product =>
          typeof product !== 'undefined' ? (
            <Product key={product.id} product={product} />
          ) : (
            ''
          )
        )}
      </div>
    );
  }
}
