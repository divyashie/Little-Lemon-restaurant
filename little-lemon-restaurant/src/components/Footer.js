import React from "react";
import footer_logo from "../images/footer_logo.png";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                {/* Logo Section */}
                <div className="footer-logo">
                    <img src={footer_logo} alt="Little Lemon Logo" />
                    <p>© 2025 Little Lemon. All rights reserved.</p>
                </div>

                {/* Footer Links */}
                <div className="footer-links">
                    <div className="footer-section">
                        <h4>About Us</h4>
                        <ul>
                            <li><a href="/">Our Company</a></li>
                            <li><a href="/">Careers</a></li>
                            <li><a href="/">Newsletter</a></li>
                            <li><a href="/">Contact Us</a></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4>Contact Info</h4>
                        <ul>
                            <li><a href="tel:+1234567890">+1 (123) 456-7890</a></li>
                            <li><a href="mailto:info@littlelemon.com">info@littlelemon.com</a></li>
                            <li><address>123 Ford Blvd, Chicago, IL 60618</address></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4>Hours</h4>
                        <ul>
                            <li>Tues-Thurs: 12pm - 10pm</li>
                            <li>Fri-Sun: 12pm - 10pm</li>
                            <li>Mon: Closed</li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4>Follow Us</h4>
                        <ul>
                            <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                            <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                            <li><a href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer">Pinterest</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;