import React, { Component } from 'react';
import './App.css';
import Products from './Products.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { products: [] };
    this.api = props.api;
    this.onHideSoldItems = this.onHideSoldItems.bind(this);
    this.handleLikeProduct = this.handleLikeProduct.bind(this);
  }

  async componentDidMount() {
    let products = await this.api.getProducts();
    this.setState({ products: products });
  }

  onHideSoldItems() {
    console.log('Hide sold items');
  }

  handleLikeProduct(index) {
    let newState = this.state.products;
    newState[index].liked = !newState[index].liked;
    this.setState({ products: newState });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Depop</h1>
        </div>
        <div className="results-header">
          <div className="number-of-results">
            {this.state.products.length} Results
          </div>
          <button
            className="btn-hide-sold-items"
            onClick={this.onHideSoldItems}
          >
            Hide Sold Items
          </button>
        </div>
        <Products
          products={this.state.products}
          onLikeProduct={this.handleLikeProduct}
        />
        <div>
          Icons made by{' '}
          <a
            href="https://www.flaticon.com/authors/smashicons"
            title="Smashicons"
          >
            Smashicons
          </a>{' '}
          from{' '}
          <a href="https://www.flaticon.com/" title="Flaticon">
            www.flaticon.com
          </a>{' '}
          is licensed by{' '}
          <a
            href="http://creativecommons.org/licenses/by/3.0/"
            title="Creative Commons BY 3.0"
            target="_blank"
          >
            CC 3.0 BY
          </a>
        </div>
      </div>
    );
  }
}

export default App;
