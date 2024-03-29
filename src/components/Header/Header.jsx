import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <nav>
            <Link to="/">home</Link>
            <Link to="/about">About</Link>
            <Link to="/review">Order Review</Link>
            <Link to="/contact">contact</Link>
        </nav>
    );
};

export default Header;