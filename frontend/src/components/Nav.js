import React from "react";
// import { Link } from "react-router-dom";
import line from "./../img/line.png";
import logo from "./../img/logo.png";
import './Nav.css';

function Nav(props) {
    const [isNavVisible, setIsNavVisible] = React.useState(true);

    const toggleNav = () => {
        setIsNavVisible(!isNavVisible);
    };

    return (
        <header className="header pb-3">
            <img src={line} className="line" alt="line" />
            <button onClick={toggleNav} className="toggleNav">
                toggle
            </button>
            <img src={logo} className="logo" alt="logo" />
            {isNavVisible && (
                <nav className="nav">
                    <a href="/">news</a>
                    <a href="/">creators</a>
                    <a href="/">comics</a>
                    <a href="/">market</a>
                    <button className="account">login</button>
                </nav>
            )}
        </header>
    );
}

export default Nav;