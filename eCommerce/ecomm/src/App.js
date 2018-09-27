import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./ecomm-componets/home/Home";
import Products from "./ecomm-componets/products/Products";
import Contact from "./ecomm-componets/contact/Contact"
import Nav from "./ecomm-componets/nav";

class App extends Component {
  constructor() {
    super();

    this.state = {
    products: [],
    filteredProducts: []
    };
    }

componentDidMount() {
    fetch("http://api.jsonbin.io/b/5bad10ffa97c597b3c5a1597/5")
        .then(result => result.json())
        .then(resultJson => {
            this.setState({
                products: resultJson.products,
                filteredProducts: resultJson.products
            })
        });
      }

waterfallFilter() {
  let productsToFilter = [...this.state.products];
  let filteredLocations = productsToFilter.filter( location => location.waterFall === true);
  this.setState(
    {
      filteredProducts: filteredLocations
    }
  )
}

priceFilter() {
  let productsToFilter = [...this.state.products];
  let filteredPrice = productsToFilter.filter( price => price.waterFall < 600.00);
  this.setState(
    {
      filteredProducts: filteredPrice
    }
  )
}
 
  render() {
    return (
      <BrowserRouter>
        <div>
          <Nav />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/contact" component={Contact} exact />
            <Route path="/products" render={
              () => (
                <Products waterfallFilter={() => this.waterfallFilter()} products={this.state.products} filteredProducts={this.state.filteredProducts}/>
              )
            }/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
