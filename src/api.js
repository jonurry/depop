const PRODUCTS_URL =
  'https://5c78274f6810ec00148d0ff1.mockapi.io/api/v1/products';

export default class API {
  async getProducts() {
    let response = await fetch(PRODUCTS_URL);
    return await response.json();
  }
}
