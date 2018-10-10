import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./ecomm-componets/home/Home";
import Products from "./ecomm-componets/products/Products";
import Contact from "./ecomm-componets/contact/Contact"
import Nav from "./ecomm-componets/nav";
import FooterContent from "./ecomm-componets/footer";

class App extends Component {
  constructor() {
    super();
    this.state = {
    products: [],
    filteredProducts: []
    };
    }
componentDidMount() {
    fetch("//api.jsonbin.io/b/5bbcacb571856b56d72b740c")
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
  let filteredPrice = productsToFilter.filter( location => location.price < 600 );
  this.setState(
    {
      filteredProducts: filteredPrice
    }
  )
}
resetFilter() {
  this.setState({
    filteredProducts: this.state.products
  })
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
                <Products waterfallFilter={() => this.waterfallFilter()} products={this.state.products} filteredProducts={this.state.filteredProducts} 
                priceFilter={() => this.priceFilter()} resetFilter={() => this.resetFilter()} />
              )
            }/>
          </Switch>
          <FooterContent />
        </div>
      </BrowserRouter>
    );
  }
}
export default App;