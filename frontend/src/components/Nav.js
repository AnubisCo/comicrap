import React from "react";
import { Link } from "react-router-dom";

class Nav extends React.Component {
    render() {
        return(
            <div>
                <ul>
                    <li>
                        <Link to="/news">news</Link>
                    </li>
                    <li>
                        <Link to="/creators">creators</Link>
                    </li>
                    <li>
                        <Link to="/">logo</Link>
                    </li>
                    <li>
                        <Link to="/comics">comics</Link>
                    </li>
                    <li>
                        <Link to="/merch">merch</Link>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Nav;