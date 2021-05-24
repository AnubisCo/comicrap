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
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: {duration: 0.5} },
    }
    return (
        <>
            <motion.svg width="100vw"
            height="100vh" initial="hidden" animate="visible" variants={variants}>
                <circle stroke="#4b2584" fill="#f17e3a" strokeWidth="1%" cx="50%" cy="50%" r="75px" />
                <path stroke="#f17e3a" fill="#4b2584" viewBox="0 0 150 200" strokeWidth="1%" d="M 0 150 L 75 0 150 150 75 200 Z"/>
            </motion.svg>
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
