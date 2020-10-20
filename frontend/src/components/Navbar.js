import React from "react";
import { Squeeze as Hamburger } from "hamburger-react";
import { Announcement, Group, MenuBook, Storefront } from '@material-ui/icons';
import line from "./../img/line.png";
import logo from "./../img/logo.png";
import Login from "./Login";
import "./Nav.css"

function Navbar({ sticky }) {
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
        const mediaQuery = window.matchMedia("(max-width: 800px)");
        mediaQuery.addEventListener("change", handleMediaQueryChange);
        handleMediaQueryChange(mediaQuery);

        return () => {
            mediaQuery.removeEventListener("change", handleMediaQueryChange);
            handleMediaQueryChange(mediaQuery)
        };
    }, [isSmallScreen]);
    const Logo = (props) => (
        <div style={{ marginTop: "10px" }}>
            <a href={props.href}>
                <img src={props.src} className={props.class} alt={props.alt} />
            </a>
        </div>
    );

    return (
        <header className={sticky ? "navbar-sticky header mb-3" : "header mb-3"}>
            <img src={line} className="line" alt="line" />
            <Logo href="/" src={logo} class="logo" alt="logo" />
            {(!isSmallScreen || isNavVisible) && (
                <nav className="nav my-auto">
                    <a href="/news">
                        news <Announcement className="nav-icon" style={{ fontSize: "1.5rem" }} />
                    </a>
                    <a href="/creators">
                        creators <Group className="nav-icon" style={{ fontSize: "1.5rem" }} />
                    </a>
                    <a href="/comics">
                        comics <MenuBook className="nav-icon" style={{ fontSize: "1.5rem" }} />
                    </a>
                    <a href="/merch">
                        market <Storefront className="nav-icon" style={{ fontSize: "1.5rem" }} />
                    </a>
                    <Login />
                </nav>
            )}
            <div className="toggleDiv py-2">
                <Hamburger size={30} label="menu toggle" toggled={isNavVisible} toggle={setIsNavVisible} />
            </div>
        </header>
    );
}
export default Navbar;