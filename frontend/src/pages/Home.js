//  home page
//  author: ziem
import React from "react";
import 'react-slideshow-image/dist/styles.css';
import { motion } from "framer-motion";

//  importing styles
import "./Home.css";

// importing other pages
// import News from "./News";
// import Creators from "./Creators";
// import Comics from "./Comics";
// import Merch from "./Merch";

// importing components for site
// import Nav from "./../components/Nav";

//  importing sample images
// import img from "./../img/Sun.png";
// import img1 from "./../img/slide_1.jpg";
// import img2 from "./../img/slide_2.jpg";
// import img3 from "./../img/slide_3.jpg";
// import img4 from "./../img/slide_4.jpg";
// import img5 from "./../img/slide_5.jpg";

//  function HomeDisplay( props )
//  description: this function defines the hero section of the home page 
function HomeDisplay(props) {
    const variants = [
        { scale: 3, x: "50%", y: "50%" },
        { opacity: 1, scale: 1, x: "25%", y: "15%", transition: { delay: 1, duration: 1.5 } }
    ]
    const hill_variants = [
        { overflow: "visible", position: "absolute", bottom: "0", height: "80%", width: "100%", zIndex: 1, backgroundColor: "#bdf881", borderTopRightRadius: "50% 25%", borderTopLeftRadius: "50% 25%" },
        { height: "30%", boxShadow:"0.1rem 0.1rem 0.1rem #bdf881", transition: { delay: 1, duration: 1.5 } }
    ]
    return (
        <>
            <svg width="100vw" height="100vh" style={{ overflow: "visible", zIndex: 0, position: "absolute", backgroundColor: "#121211"}}>
                <motion.g initial={variants[0]} animate={variants.slice(1)} variants={variants} style={{ overflow: "visible" }}>
                    <circle id="sun" stroke="#bdf881" fill="#1179cc" strokeWidth="1%" r="75px" />
                    <text width="100%" style={{ transform: "translate3d(0,0,0);", color: "white"}} alignmentBaseline="top" xlinkHref="#sun">
                        <textPath>
                            weseethesun.com
                        </textPath>
                    </text>
                    <svg x="-77.5">
                        <path stroke="#1179cc" fill="#bdf881" viewBox="0 0 155 205" strokeWidth="1%" d="M 5 155 L 80 5 155 155 80 205 Z"/>
                    </svg>
                </motion.g>
            </svg>
            <motion.div initial={hill_variants[0]} animate={hill_variants.slice(1)} variants={hill_variants}>
                <div className="row h-100" style={{ display: "flex", alignItems: "center", justifyItems: "center" }}>
                    <div className="col-6 text-center">
                        <a href="www.google.com">
                            <h1>our work</h1>
                        </a>
                    </div>
                    <div className="col-6 text-center">
                        <a href="www.google.com">
                            <h1>news</h1>
                        </a>
                    </div>
                </div>
            </motion.div>
        </>
    );
}

class Home extends React.Component {
    render() {
        return (
            <div style={{ overflow: "hidden" }}>
                <div>
                    <HomeDisplay />
                </div>
            </div>
        );
    }
}

export default Home;
