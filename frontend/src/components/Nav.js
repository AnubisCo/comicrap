import React, { useEffect } from "react";
import Navbar from "./Navbar";
import './Nav.css';

function Nav(props) {
    const [isSticky, setSticky] = React.useState(false);
    const ref = React.useRef(null);
    const handleScroll = () => {
        if (ref.current) {
            setSticky(ref.current.getBoundingClientRect().top <= 0);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", () => handleScroll);
        }
    }, []);

    return (
        <header ref={ref}>
            <div className={isSticky ? "header-spacing-adjuster" : "invis"}></div>
            <div className={isSticky ? "navbar-sticky header pl-1" : "header pl-1"}>
                <Navbar />
            </div>
        </header>
    );
}

export default Nav;