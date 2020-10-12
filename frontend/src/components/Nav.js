import React from "react";
import { Link } from "react-router-dom";
import line from "./../line.png";
import './components.css';

class Nav extends React.Component {
    render() {
        return (
            <div>
                <img alt="a line" style={{ position: "sticky", bottom: "0", padding: "0", margin: "0", width: "100vw" }} src={line} />
                <div className="">
                    <ul className="nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/news">news</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/creators">creators</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/">logo</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/comics">comics</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/merch">merch</Link>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Nav;