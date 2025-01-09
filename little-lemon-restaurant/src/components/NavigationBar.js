import React, { useState } from 'react'; 
import { Link } from "react-router-dom"; 
import little_lemon_logo from "../images/littleLemonLogo.png";
import { MdOutlineMenu } from 'react-icons/md';
import { MdClose } from 'react-icons/md';

function NavigationBar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen); // Toggle the menu state on click
    }

    return (
        <nav>
            <img src={little_lemon_logo} alt="Little Lemon Logo" />
            
            {/* Conditionally render the menu items based on isOpen state */}
            {isOpen && (
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/menu">Menu</Link></li>
                    <li><Link to="/reservations">Reservations</Link></li>
                    <li><Link to="/order-online">Order Online</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </ul>
            )}

            {/* Hamburger Menu */}
            <div onClick={toggleMenu} className="HamburgerMenu">
                {isOpen ? (
                    <MdClose size="30px" color="black" />
                ) : (
                    <MdOutlineMenu size="30px" color="black" />
                )}
            </div>
        </nav>
    );
}

export default NavigationBar;