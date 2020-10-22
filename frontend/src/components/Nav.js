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
        <header ref={ref} className={isSticky ? "navbar-sticky header mb-3 pl-2" : "header mb-3 pl-2"}>
            <Navbar />
        </header>
    );
}

export default Nav;