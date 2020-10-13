import React from "react";
import { Link } from "react-router-dom";
import line from "./../img/line.png";
import logo from "./../img/logo.png";
import './Nav.css';

class Nav extends React.Component {
    render() {
        return (
            <div style={{ position: "sticky" }}>
                <img alt="a line" style={{ position: "absolute", top: "0", padding: "0", margin: "0", width: "100vw" }} src={line} />
                <nav className="navbar-expand-sm shadow-lg container-fluid" style={{ width: "100vw" }}>
                    <ul className="nav row align-items-center pt-3">
                        <li className="nav-item col">
                            <Link className="navbar-link" to="/">
                                <img className="logo" alt="logo" src={logo} />
                            </Link>
                        </li>
                        <li className="nav-item col">
                            <Link className="nav-link" to="/news">news</Link>
                        </li>
                        <li className="nav-item col">
                            <Link className="nav-link" to="/creators">creators</Link>
                        </li>
                        <li className="nav-item col">
                            <Link className="nav-link" to="/comics">comics</Link>
                        </li>
                        <li className="nav-item col">
                            <Link className="nav-link" to="/merch">merch</Link>
                        </li>
                        <li className="nav-item col">
                            <Link className="nav-link" to="/">login</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Nav;