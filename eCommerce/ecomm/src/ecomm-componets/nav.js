import React from "react";
import { NavLink } from "react-router-dom";
import '/Users/tgeiger/portfolio/eCommerce/ecomm/src/App.css';

const Nav = () => {
    return (
        <header>
        <nav>
            <ul>
                <li><NavLink to="/products" exact>Products</NavLink></li>
                <li>|</li>
                <li><NavLink to="/contact" exact>Contact</NavLink></li>
            </ul>
        </nav>
        <h1><NavLink to="/" exact>Where the Mountains Roam</NavLink></h1>    
    </header>
    );
};

export default Nav;