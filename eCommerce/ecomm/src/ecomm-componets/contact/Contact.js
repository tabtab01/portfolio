import React from "react";
import '/Users/tgeiger/weeklychallenges-r2h2018-1/eCommerce/ecomm/src/App.css';

const Contact = () => {
    return (
        <div>
            <h2>Write Us!</h2>
            <p>Ready to begin a great adventure? Ready to find yourself? Simply have some questions? Send us a message and we will get back to you shortly!</p>
            <form action="#" method="GET">
                <div>
                    <label>First Name:</label>
                    <input name="firstName"/>
                </div>
                <div>
                    <label>Last Name:</label>
                    <input name="lastName"/>
                </div>   
                <div>
                    <label>Email:</label>
                    <input name="email"/>
                </div>   
                <select name="experiences">
                    <option value="" selected disabled hidden>Choose here</option>
                    <option value="blowingRock">Blowing Rock</option>
                    <option value="saluda">Saluda</option>
                    <option value="hotSprings">Hot Springs</option>
                    <option value="brysonCity">Bryson City</option>
                </select>
                <textarea name="message" placeholder="Questions, comments, concerns..." cols="40" rows="10"></textarea>
                <button className="submit-button" name="submit" onclick="alert('We\'ve received your message!')">Submit</button>
            </form>
        </div>
    );
};

export default Contact;

