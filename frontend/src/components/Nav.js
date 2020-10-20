import React from "react";
import { Squeeze as Hamburger } from "hamburger-react";
// import { Link } from "react-router-dom";
import line from "./../img/line.png";
import logo from "./../img/logo.png";
import Login from "./Login";
import './Nav.css';

function Nav(props) {
    const [isNavVisible, setIsNavVisible] = React.useState(false);
    const [isSmallScreen, setIsSmallScreen] = React.useState(true);

    const handleMediaQueryChange = (mediaQuery) => {
        if (mediaQuery.matches) {
            setIsSmallScreen(true);
        } else {
            setIsSmallScreen(false);
        }
    };

    React.useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 700px)");
        mediaQuery.addEventListener("change", handleMediaQueryChange);
        handleMediaQueryChange(mediaQuery);

        return () => {
            mediaQuery.removeEventListener("change", handleMediaQueryChange);
            handleMediaQueryChange(mediaQuery)
        };
    }, [isSmallScreen]);

    // const toggleNav = () => {
    //     setIsNavVisible(!isNavVisible);
    // };

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
                    <Login />
                </nav>
            )}
            <div className="toggleDiv">
                <Hamburger size={48} label="menu toggle" toggled={isNavVisible} toggle={setIsNavVisible} />
            </div>
        </header>
    );
}

export default Nav;