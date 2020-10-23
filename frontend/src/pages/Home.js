import React from "react";
import Typist from "react-typist";
import "react-typist/dist/Typist.css";
import 'react-slideshow-image/dist/styles.css';

import Slideshow from "./../components/Slideshow";
import Nav from "./../components/Nav";
import Feat from "./../components/Feat";
import img1 from "./../img/slide_1.jpg";
import img2 from "./../img/slide_2.jpg";
import img3 from "./../img/slide_3.jpg";

const imgs = [img1, img2, img3];

function HomeDisplay(props) {
    return (
        <div id="top" style={{ position: "relative", height: "60vh", padding: "0", margin: "0" }}>
            <Slideshow interval={2000} images={imgs} />
            <div className="container" style={{ zIndex: "10", }}>
                <h1 style={{ color: "black", paddingTop: "30vh", margin: "0" }}>
                    <Typist>
                        <Typist.Delay ms={1000} />
                        Comics are made.
                            <br />
                        <Typist.Delay ms={1500} />
                            Together.
                    </Typist>
                </h1>
            </div>
        </div>
    );
}

class Home extends React.Component {
    render() {
        return (
            <div style={{ overflow: "hidden" }}>
                <HomeDisplay />
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
