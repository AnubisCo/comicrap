//  home page
//  author: ziem
import React from "react";
import 'react-slideshow-image/dist/styles.css';
import { motion } from "framer-motion";
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import Button from "@material-ui/core/Button";
import "react-responsive-carousel/lib/styles/carousel.min.css";

//  importing styles
import "./Home.css";

//  importing sample images
// import img from "./../img/Sun.png";
// import img1 from "./../img/slide_1.jpg";
// import img2 from "./../img/slide_2.jpg";
// import img3 from "./../img/slide_3.jpg";
// import img4 from "./../img/slide_4.jpg";
// import img5 from "./../img/slide_5.jpg";
// const img_array = [img1, img2, img3, img4, img5]

//  function HomeDisplay( props )
function HomeDisplay(props) {
    const colors = [
        "#E8DDCB", // pyramid stroke and circle fill
        "#CDB380", // circle stroke and pyramid fill
        "#036564", // background color
        "#033649",
        "#031634",
        "white",
        "black"
    ];
    const variants = [
        { scale: 3, x: "50%", y: "50%" },
        { opacity: 1, scale: 0.70, x: "20%", y: "15%", transition: { delay: 1, duration: 1.5 } }
    ]
    const hill_variants = [
        { overflow: "visible", position: "absolute", bottom: "0", height: "80%", width: "100%", backgroundColor: colors[1], borderTopRightRadius: "40% 20%", borderTopLeftRadius: "40% 20%", padding: "0" },
        { height: "15%", transition: { delay: 1, duration: 1.5 }, borderTopRightRadius: "0%", borderTopLeftRadius: "0%" }
    ]
    const fade_variants = [
        { opacity: 0 },
        { opacity: 1, transition: { delay: 2.5, duration: 0.5 } }
    ]
    // const HomeCarousel = (props) => {
    //     return (
    //         <>
    //         </>
    //     );
    // }
    return (
        <>
            <svg width="100%" height="100%" style={{ zIndex: 0, position: "absolute", backgroundColor: colors[4] }}>
                <motion.g initial={variants[0]} animate={variants.slice(1)} variants={variants} style={{ overflow: "visible" }}>
                    <circle id="sun" stroke={colors[1]} fill={colors[4]} strokeWidth="1%" r="75px" />
                    <text width="100%" style={{ color: "white"}} alignmentBaseline="top">
                        <textPath xlinkHref="#sun">
                            weseethesun.com
                        </textPath>
                    </text>
                    <svg x="-77.5">
                        <path stroke={colors[4]} fill={colors[1]} viewBox="0 0 155 205" strokeWidth="1%" d="M 5 155 L 80 5 155 155 80 205 Z"/>
                    </svg>
                </motion.g>
            </svg>
            <motion.div className="title" initial={fade_variants[0]} animate={fade_variants.slice(1)}>
                <div className="ml-5 pl-5 text-center" style={{ position: "absolute", top: "25%" }}>
                    <h1 className="company" style={{ color: colors[5] }}>
                        Anubis
                    </h1>
                    <h3 style={{ color: colors[1] }}>
                        deadly innovative
                    </h3>
                    <Button className="support-button mt-5 p-2" style={{ outline: "none", backgroundColor: colors[4], border: ("5px solid " + colors[1] ), color: colors[1], borderRadius: "0" }}>
                        Support Our Projects
                    </Button>
                </div>
            </motion.div>
            <motion.div initial={fade_variants[0]} animate={fade_variants.slice(1)}>
                <HelpOutlineIcon className="aboutus-button" variant="contained" style={{ color: colors[4], backgroundColor: colors[1], fontSize: "5rem" }} />
                <div>
                    
                </div>
            </motion.div>
            <motion.div className="home-video-container" initial={fade_variants[0]} animate={fade_variants.slice(1)}>
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/TUzZKLirkrE" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen" allowFullScreen></iframe>
            </motion.div>
            <motion.div initial={hill_variants[0]} animate={hill_variants.slice(1)} variants={hill_variants} style={{ zIndex: 2 }}>
            </motion.div>
        </>
    );
}

class Home extends React.Component {
    render() {
        return (
            <div style={{ overflow: "hidden", maxheight: "100%", maxwidth: "100%" }}>
                <HomeDisplay />
            </div>
        );
    }
}

export default Home;
