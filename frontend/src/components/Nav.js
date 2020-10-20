import React from "react";
// import { Link } from "react-router-dom";
import line from "./../img/line.png";
import logo from "./../img/logo.png";
import './Nav.css';

function Nav(props) {
    const [isNavVisible, setIsNavVisible] = React.useState(true);
    const [isSmallScreen, setIsSmallScreen] = React.useState(false);

    const handleMediaQueryChange = mediaQuery => {
        if (mediaQuery.matches) {
            setIsSmallScreen(true);
        } else {
            setIsSmallScreen(false);
        }
    };

    React.useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 700px)");
        mediaQuery.addEventListener(handleMediaQueryChange);
        handleMediaQueryChange(mediaQuery)

        return () => {
            mediaQuery.removeEventListener(handleMediaQueryChange);
        };
    }, []);

    const toggleNav = () => {
        setIsNavVisible(!isNavVisible);
    };

    return (
        <header className="header pb-3">
            <img src={line} className="line" alt="line" />
            <img src={logo} className="logo" alt="logo" />
            {(!isSmallScreen || isNavVisible) && (
                <nav className="nav">
                    <a href="/">news</a>
                    <a href="/">creators</a>
                    <a href="/">comics</a>
                    <a href="/">market</a>
                    <button className="account">login</button>
                </nav>
            )}
            <div className="toggleDiv">
                <button onClick={toggleNav}>
                    toggle
                </button>
            </div>
        </header>
    );
}

export default Nav;