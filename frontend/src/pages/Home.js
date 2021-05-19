//  home page
//  author: ziem
import React from "react";
import 'react-slideshow-image/dist/styles.css';

//  importing styles
import "./Home.css";

//  importing other pages
import News from "./News";
import Creators from "./Creators";
import Comics from "./Comics";
import Merch from "./Merch";

//  importing components for site
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
            <div className="container row my-auto" style={{ zIndex: "10"}}>
                
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
