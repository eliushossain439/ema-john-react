import React from 'react';
import './Header.css'
import logo from '../../images/logo.png'
const Header = () => {
    return (
        <div>
            <div className="logo"> <img src={logo} alt="" /></div>
            <div className="navigation container">
                <nav className="nav">
                    <a href="/HOME">HOME</a>
                    <a href="/ABOUT">ABOUT</a>
                    <a href="/CONTACT">CONTACT</a>
                    <a href="/PRODUCT">PRODUCT</a>
                    <a href="/HELP">HELP</a>
                </nav>
            </div>
        </div>
    );
};

export default Header;