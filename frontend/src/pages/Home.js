import React from 'react';
import Nav from "./../components/Nav"

class Home extends React.Component {
    render() {
        return (
            <div style={{ overflow: "hidden" }}>
                <div style={{ position: "relative", backgroundColor: "black", height: "60vh", padding: "0", margin: "0" }}>
                    <div className="container">
                        <h1 style={{ color: "white", paddingTop: "30vh", margin: "0" }}>
                            Comics are made.<br /> Together.
                        </h1>
                    </div>
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
                        <p>password:</p>
                        <input
                            type="text"
                            name="password"
                        />
                    </form>
                </div>
            </div>
        );
    }
}

export default Home;
