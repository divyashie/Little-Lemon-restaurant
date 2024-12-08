import React, { useState } from 'react'; 
import little_lemon_logo from "../images/littleLemonLogo.png"
import { MdOutlineMenu } from 'react-icons/md';
import {MdClose} from 'react-icons/md';

function NavigationBar(){
    const [isOpen, setIsOpen] = useState(false); 
    return(
        <nav>
            <img src={little_lemon_logo} alt="Little Lemon Logo"></img>
             {/* Hamburger Menu */}
                <div onClick={() => setIsOpen(!isOpen)} className="HamburgerMenu">
                    {isOpen ? (
                    <MdClose size="30px" color="black" />
                    ) : (
                    <MdOutlineMenu size="30px" color="black" />
                    )}
                </div>
                {/*Conditionally render our links based on isOpen */}
                {isOpen && (
                    <>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/about">About</a></li>
                            <li><a href="/menu">Menu</a></li>
                            <li><a href="/reservations">Reservations</a></li>
                            <li><a href="/order online">Order Online</a></li>
                            <li><a href="/login">Login</a></li>
                        </ul>
                    </>
                )}
        </nav>
    ); 
}

export default NavigationBar; 