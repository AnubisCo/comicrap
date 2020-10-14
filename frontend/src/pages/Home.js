import React from 'react';
import Nav from "./../components/Nav"
import Login from "./../components/Login"
import Button from 'react-bootstrap/Button';

class Home extends React.Component{
    constructor(props) {}
    render() {
        const[modalShow, setModalShow] = React.useState(false);
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
                    <Button variant="primary" onClick={() => setModalShow(true)}>
                        Login
                    </Button>
                    <Login
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    />
                </div>
            </div>
        );
    }
}

export default Home;
