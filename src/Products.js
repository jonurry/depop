import React from 'react';
import Product from './Product.js';
import './Products.css';

export default class Products extends React.Component {
  render() {
    const { products, onLikeProduct } = this.props;
    return (
      <div className="products">
        {products.map((product, index) =>
          typeof product !== 'undefined' ? (
            <Product
              key={product.id}
              product={product}
              index={index}
              onLikeProduct={onLikeProduct}
            />
          ) : (
            ''
          )
        )}
      </div>
    );
  }
}
