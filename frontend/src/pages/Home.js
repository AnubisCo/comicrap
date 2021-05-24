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
    const variants = {
        init: { opacity: 0, scale: 2 },
        anime: { opacity: 1, scale: 0.75, transition: { duration: 1 } },
    }
    const circle_variants = {
        init: {cx: "50%", cy: "50%"},
        anime: {cx: "150px", cy: "150px", transition: { duration: 5 } }
    }
    return (
        <motion.svg width="100vw"
        height="100vh" initial="init" animate="anime" variants={variants}>
            <motion.circle variants={circle_variants} initial="init" animate="anime" stroke="#4b2584" fill="#f17e3a" strokeWidth="1%" r="75px" />
            <motion.svg>
                <path stroke="#f17e3a" fill="#4b2584" viewBox="0 0 150 200" strokeWidth="1%" d="M 0 150 L 75 0 150 150 75 200 Z"/>
            </motion.svg>
        </motion.svg>
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
