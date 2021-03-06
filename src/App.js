import React, { Component } from 'react';
import './App.css';
import Products from './Products.js';
import Footer from './Footer.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { products: [], hideSoldItems: false };
    this.api = props.api;
    this.onHideSoldItems = this.onHideSoldItems.bind(this);
    this.handleLikeProduct = this.handleLikeProduct.bind(this);
  }

  async componentDidMount() {
    this._isMounted = true;
    let products = await this.api.getProducts();
    if (this._isMounted) {
      this.setState({ products: products });
    }
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  onHideSoldItems() {
    let newState = !this.state.hideSoldItems;
    this.setState({ hideSoldItems: newState });
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
            {this.state.hideSoldItems ? 'Show' : 'Hide'} Sold Items
          </button>
        </div>
        <Products
          products={this.state.products}
          onLikeProduct={this.handleLikeProduct}
          hideSoldItems={this.state.hideSoldItems}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
