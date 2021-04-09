import React from "react";
import Typist from "react-typist";
import "react-typist/dist/Typist.css";
import 'react-slideshow-image/dist/styles.css';

import Slideshow from "./../components/Slideshow";
import Nav from "./../components/Nav";
import News from "./News";
import Creators from "./Creators";
import Comics from "./Comics";
import img1 from "./../img/slide_1.jpg";
import img2 from "./../img/slide_2.jpg";
import img3 from "./../img/slide_3.jpg";
import img4 from "./../img/slide_4.jpg";
import img5 from "./../img/slide_5.jpg";

const imgs = [img1, img2, img3, img4, img5];

function HomeDisplay(props) {
    return (
        <div id="top" style={{ position: "relative", height: "60vh", padding: "0", margin: "0", backgroundColor: "black", zIndex: "-2" }}>
            <Slideshow location="home" images={imgs} />
            <div style={{ position: "absolute", height: "100%", width: "100%", backgroundColor: "black", zIndex: "-1", opacity: "0.7" }}></div>
            <div className="container" style={{ zIndex: "10", }}>
                <h1 style={{ color: "white", paddingTop: "30vh", margin: "0" }}>
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
                <News />
                <Creators />
                <Comics />
            </div>
        );
    }
}

export default Home;
