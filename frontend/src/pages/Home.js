import React from "react";
import Typist from "react-typist";
import Nav from "./../components/Nav"
import Feat from "./../components/Feat"

class Home extends React.Component {
    render() {
        return (
            <div style={{ overflow: "hidden" }}>
                <div id="top" style={{ position: "relative", backgroundColor: "black", height: "60vh", padding: "0", margin: "0" }}>
                    <div className="container">
                        <Typist>
                            <h1 style={{ color: "white", paddingTop: "30vh", margin: "0" }}>
                                Comics are made.
                                <br />
                                <Typist.Delay ms={1000} />
                                Together.
                            </h1>
                        </Typist>
                    </div>
                </div>
                <Nav />
                <div style={{ margin: 100 }}>
                    <h2> <b> Featured </b></h2>
                </div>
                <Feat />
                <div style={{ height: "100vh" }}>
                </div>
            </div>
        );
    }
}

export default Home;
