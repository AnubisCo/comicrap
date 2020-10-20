import React from "react";
import useSticky from "./hooks/useSticky";
import Navbar from "./Navbar";
import './Nav.css';

function Nav(props) {
    const { isSticky, element } = useSticky();
    return (
        <Navbar sticky={isSticky} />
    );
}

export default Nav;