import React, { Component } from 'react';
import './App.css';
import Products from './Products.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { products: [] };
    this.api = props.api;
  }

  async componentDidMount() {
    let products = await this.api.getProducts();
    this.setState({ products: products });
  }

  render() {
    return (
      <div className="App">
        <div>{this.state.products.length} Results</div>
        <Products products={this.state.products} />
      </div>
    );
  }
}

export default App;
