import React, { Component } from 'react';
import Header from './components/Header';
import './assets/sass/styles.scss'
import Products from './components/products.js'
import Cart from './components/Cart.js'
import ProductDetails from './components/productDetails.js'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

export default class App extends Component {
  constructor (props) {
      super(props);
    }
    
  render() {
      return (
          <div className="App">
            <BrowserRouter>
              <Header />
              <Switch>
                <Route path="/home" component={Products} />
                <Route path="/cart" component={Cart} />
                <Route path="/productDetails/:productId" component={ProductDetails} />
              </Switch>
            </BrowserRouter>
          </div>
      );
  }
}
