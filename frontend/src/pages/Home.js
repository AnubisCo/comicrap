import React from 'react';
import Nav from "./../components/Nav"
import line from "./../line.png";

class Home extends React.Component {
    render() {
        return (
            <>
                <div style={{ position: "relative", backgroundColor: "black", height: "60vh", padding: "0", margin: "0" }}>
                    <h1 style={{ color: "white", paddingTop: "30vh", margin: "0" }}>
                        Comics are made.<br /> Together.
                    </h1>
                    <img alt="a line" style={{ position: "absolute", bottom: "0", padding: "0", margin: "0", width: "100vw" }} src={line} />
                </div>
                <Nav />
                <div>
                    <form>
                        <h1>login</h1>
                        <p>username:</p>
                        <input
                            type="text"
                            name="username"
                        />
                    </form>
                </div>
            </>
        );
    }
}

export default Home;
