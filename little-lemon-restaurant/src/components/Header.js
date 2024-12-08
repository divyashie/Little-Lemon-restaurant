import React from "react"; 
import { Link } from "react-router-dom"; 
import main_dish from "../images/main-dish.png"; 

const Header = () => {
    return(
        <header>
            <section>
                <div>
                    <h2>Little Lemon</h2>
                    <h3>Chicago</h3>
                    <p>We are a family owned Mediterranean Restaurant, focused on traditional recipes served with a modern twist.</p>
                    <Link to="/Booking"><button aria-label="On Click">Reserve Table</button></Link>
                </div>
                <div>
                    <img src={main_dish} alt="Main dish"></img> 
                </div>
            </section>
        </header>
    ); 

}
export default Header; 