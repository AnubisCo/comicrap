import React from "react";

export default class Nav extends React.Component {
    render() {
        return (
            <nav className="nav">
                <ul>
                    <li>
                        Home
                    </li>
                    <li>
                        Vision
                    </li>
                    <li>
                        Merch
                    </li>
                    <li>
                        Projects
                    </li>
                </ul>
            </nav>
        );
    }
}