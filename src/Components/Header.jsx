import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from '/src/assets/Images/logo.svg';

export const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    const closeMenu = () => {
        setMenuOpen(false);
    };
    return (
        <header className="header-area">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-3 col-6">
                        <div className="header-logo">
                            <Link to='/'>
                                <img src={logo} alt="img" />
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-9 col-6">
                        <div className="header-right">
                            <div className="header-nav d-lg-block d-none">
                                <ul>
                                    <li><Link to='/'>Home</Link></li>
                                    <li><Link to='/services'>Services</Link></li>
                                    <li><Link to='/about'>About</Link></li>
                                    <li><Link to='/blog'>Blog</Link></li>
                                    <li><Link to='/testimonial'>Testimonial</Link></li>
                                </ul>
                            </div>
                            <div className="header-btn">
                                <Link to='/contact' className="common-btn">Contact</Link>
                            </div>
                            <div
                                className={menuOpen ? "menu-bar active" : "menu-bar"}
                                onClick={toggleMenu}
                            >
                                <div></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={menuOpen ? "mobile-menu mobile-menu-active" : "mobile-menu"}>
                <div className="mobile-menu-wrap">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/services'>Services</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/blog'>Blog</Link></li>
                    <li><Link to='/testimonial'>Testimonial</Link></li>
                </div>
            </div>
            <div
                className={menuOpen ? "body-overlay body-overlay-active" : "body-overlay"}
                onClick={closeMenu}
            ></div>
        </header>
    );
};

export default Header;

