import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="header">
            <Link className="header-link" to="/"><h1>Spoiler<span>Free</span></h1></Link>

            <div className="header-link-wrap">
                <Link className="header-link" to="/">Home</Link>
                <Link className="header-link" to="/wiki">Wiki</Link>
                {/* <Link className="header-link" to="/about">About</Link> */}
            </div>
        </header>
    )
}


export default Header;