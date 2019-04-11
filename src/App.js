import React, { Component } from 'react';
import './App.css';
import Products from './Products.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { products: [] };
    this.api = props.api;
    this.onHideSoldItems = this.onHideSoldItems.bind(this);
  }

  async componentDidMount() {
    let products = await this.api.getProducts();
    this.setState({ products: products });
  }

  onHideSoldItems() {
    console.log('Hide sold items');
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
        <Products products={this.state.products} />
      </div>
    );
  }
}

export default App;
