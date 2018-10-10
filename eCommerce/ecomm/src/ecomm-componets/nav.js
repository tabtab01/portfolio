import React from "react";
import { NavLink } from "react-router-dom";
import '/Users/tgeiger/portfolio/eCommerce/ecomm/src/App.css';

const Nav = () => {
    return (
        <header>
            <h1><NavLink to="/" exact>Where the Mountains Roam</NavLink></h1>     
            <nav>
                <ul>
                    <li><NavLink to="/products" exact>Products</NavLink></li>
                    <li>|</li>
                    <li><NavLink to="/contact" exact>Contact</NavLink></li>
                </ul>
            </nav>
        </header>
    );
};

export default Nav;