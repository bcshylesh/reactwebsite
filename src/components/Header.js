import React from 'react';
import logo from '../logo.svg';
import './Header.css';

function Header() {
    return (
        <div>
            <img src={logo} className="img-logo" />
            <h1>Smart Learning</h1>
        </div>
    )
}

export default Header
