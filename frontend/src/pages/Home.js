//  home page
//  author: ziem
import React from "react";
import Typist from "react-typist";
import "react-typist/dist/Typist.css";
import 'react-slideshow-image/dist/styles.css';
import Button from "@material-ui/core/Button";

//  importing styles
import "./Home.css";

//  importing other pages
import News from "./News";
import Creators from "./Creators";
import Comics from "./Comics";
import Merch from "./Merch";

//  importing components for site
import Slideshow from "./../components/Slideshow";
import Nav from "./../components/Nav";

//  importing sample images
import img1 from "./../img/slide_1.jpg";
import img2 from "./../img/slide_2.jpg";
import img3 from "./../img/slide_3.jpg";
import img4 from "./../img/slide_4.jpg";
import img5 from "./../img/slide_5.jpg";
const imgs = [img1, img2, img3, img4, img5];

//  function HomeDisplay( props )
//  description: this function defines the hero section of the home page 
function HomeDisplay(props) {
    return (
        <div id="homeHeroSection">
            <Slideshow location="home" images={imgs} />
            <div className="shadeScreen"></div>
            <div className="container row my-auto" style={{ zIndex: "10", }}>
                <div className="col-md-8">
                    <h1 style={{ color: "white", margin: "0"}}>
                        <Typist>
                            <Typist.Delay ms={1000} />
                            Comics are made.
                            <br />
                            <Typist.Delay ms={1500} />
                            Together.
                        </Typist>
                    </h1>
                </div>
                <div className="col-xs-4">
                    <Button color="primary">
                        hello
                    </Button>
                </div>
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
                <Comics />
                <Merch />
                <Creators />
            </div>
        );
    }
}

export default Home;
