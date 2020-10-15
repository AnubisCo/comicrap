import React from 'react';
import Nav from "./../components/Nav"
import Login from "./../components/Login"
import Feat from "./../components/Feat"

class Home extends React.Component {
    render() {
        return (
            <div style={{ overflow: "hidden" }}>
                <div id="top" style={{ position: "relative", backgroundColor: "black", height: "60vh", padding: "0", margin: "0" }}>
                    <div className="container">
                        <h1 style={{ color: "white", paddingTop: "30vh", margin: "0" }}>
                            Comics are made.<br /> Together.
                        </h1>
                    </div>
                </div>
                <Nav />
                <Login />
                <Feat />
                <div style={{ height: "100vh" }}>
                </div>
            </div>
        );
    }
}

export default Home;
