import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header style={headerStyle}>
            <h1>Spoiler Free</h1>
            <Link style={linkStyle} to="/">Home</Link> | <Link style={linkStyle} to="/wiki">Wiki</Link> | <Link style={linkStyle} to="/about">About</Link>
        </header>
    )
}
const headerStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '1rem',
    gridRowStart: '1',
    gridRowEnd: '1',
}

const linkStyle = {
    color: '#fff'
}

export default Header;