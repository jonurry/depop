import React from 'react';
import Product from './Product.js';

export default class Products extends React.Component {
  render() {
    const { products } = this.props;
    return (
      <div>
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
