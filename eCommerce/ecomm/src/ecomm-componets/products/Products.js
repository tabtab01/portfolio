import React from "react";
import '/Users/tgeiger/weeklychallenges-r2h2018-1/eCommerce/ecomm/src/App.css';
const Products = (props) => {
                var displayProducts = [];

                if (props.filteredProducts.length > 0) {
                    props.filteredProducts.forEach(
                        element => {
                            displayProducts.push(
                            <div>
                                <h2>{element.location}</h2>
                                <h3>{element.price}</h3>
                                <img className="productImgs" src={element.image} alt="" />
                                <p>{element.description}</p>
                            </div>
                            )
                        }
                    )
                }
    return(
<section>
        <h2>Experience</h2>
        <p>Discover. Explore. Imagine. With experiences at 4 of our destinations this fall the possibilities are beautiful. Each of our experiences are carefully tailored
            to be your small town mountain experience. All are all inclusive and are 4 days and 3 nights of an itenarary planned to incorporate the most of each town.
        </p>
        <p>Choose an experience below and contact us to get started!</p>
        <button onClick={() => props.waterfallFilter()}>Only Waterfalls</button>
        <button onClick={() => props.priceFilter()}>Special Rates</button>
        <div>{displayProducts}</div>
        
    </section>


    )
};

export default Products;