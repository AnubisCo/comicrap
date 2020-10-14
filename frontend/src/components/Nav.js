import React from "react";
import { Link } from "react-router-dom";
import line from "./../img/line.png";
import logo from "./../img/logo.png";
import './Nav.css';

class Nav extends React.Component {
    render() {
        return (
            <div className="shadow-lg" style={{ position: "sticky" }}>
                <img alt="a line" style={{ position: "absolute", top: "0", padding: "0", margin: "0", width: "100vw", height: "0.5vh" }} src={line} />
                <nav className="navbar-expand-sm container-fluid" style={{ width: "100vw", paddingTop: "1vh", paddingBottom: "0.5vh" }}>
                    <ul className="nav align-items-center">
                        <li>
                            <Collapse isActive={true} />
                        </li>
                        <li className="nav-item col">
                            <Link className="navbar-link" to="/">
                                <img className="logo" alt="logo" src={logo} />
                            </Link>
                        </li>
                        {["news", "creators", "comics", "merch"].map((s) =>
                            <li className="nav-item col" key={s}>
                                <Link className="nav-link" to={"/" + s}>{s}</Link>
                            </li>
                        )}
                    </ul>
                </nav>
            </div>
        );
    }
}

class Collapse extends React.Component {
    constructor(props) {
        super(props)
        this.isActive = props.isActive;
    }

    render() {
        return (
            <div>

            </div>
        )
    }
}
export default Nav;