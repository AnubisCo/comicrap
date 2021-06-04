//  home page
//  author: ziem
import React from "react";
import 'react-slideshow-image/dist/styles.css';
import { motion } from "framer-motion";
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import Button from "@material-ui/core/Button";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

//  importing styles
import "./Home.css";

//  importing sample images
// import img from "./../img/Sun.png";
import img1 from "./../img/slide_1.jpg";
import img2 from "./../img/slide_2.jpg";
import img3 from "./../img/slide_3.jpg";
import img4 from "./../img/slide_4.jpg";
import img5 from "./../img/slide_5.jpg";
const img_array = [img1, img2, img3, img4, img5]

//  function HomeDisplay( props )
function HomeDisplay(props) {
    const variants = [
        { scale: 3, x: "50%", y: "50%" },
        { opacity: 1, scale: 0.70, x: "20%", y: "15%", transition: { delay: 1, duration: 1.5 } }
    ]
    const hill_variants = [
        { overflow: "visible", position: "absolute", bottom: "0", height: "80%", width: "100%", backgroundColor: "#bdf881", borderTopRightRadius: "50% 25%", borderTopLeftRadius: "50% 25%", padding: "0" },
        { height: "35%", transition: { delay: 1, duration: 1.5 } }
    ]
    const fade_variants = [
        { opacity: 0 },
        { opacity: 1, transition: { delay: 2.5, duration: 0.5 } }
    ]
    const colors = ["#1179cc", "#bdf881"];
    const HomeCarousel = (props) => {
        return (
            <Carousel showThumbs={false} autoplay>
                {
                    props.imgs.map((img) => {
                        return (
                            <div key={props.imgs.indexOf(img) + 1}>
                                <img style={{maxHeight: "100%"}} src={img} alt="carousel" />
                                <p className="legend">Legend {props.imgs.indexOf(img) + 1}</p>
                            </div>
                        )
                    })
                }
            </Carousel>
        );
    }
    return (
        <>
            <svg width="100%" height="100%" style={{ zIndex: 0, position: "absolute", backgroundColor: "black"}}>
                <motion.g initial={variants[0]} animate={variants.slice(1)} variants={variants} style={{ overflow: "visible" }}>
                    <circle id="sun" stroke="#bdf881" fill="#1179cc" strokeWidth="1%" r="75px" />
                    <text width="100%" style={{ color: "white"}} alignmentBaseline="top">
                        <textPath xlinkHref="#sun">
                            weseethesun.com
                        </textPath>
                    </text>
                    <svg x="-77.5">
                        <path stroke={colors[0]} fill={colors[1]} viewBox="0 0 155 205" strokeWidth="1%" d="M 5 155 L 80 5 155 155 80 205 Z"/>
                    </svg>
                </motion.g>
            </svg>
            <motion.div initial={fade_variants[0]} animate={fade_variants.slice(1)} style={{ position: "absolute", display: "flex", justifyContent: "center", width: "100%", height: "100%"}}>
                <div className="ml-5 pl-5 text-center" style={{ position: "absolute", top: "25%" }}>
                    <h1 style={{ color: "white", fontSize: "3.5rem", fontWeight: "bolder" }}>Anubis Corp</h1>
                    <h3 style={{ color: colors[1] }}>deadly innovative</h3>
                    <Button className="mt-5 p-2" style={{ backgroundColor: "white", outline: "none", fontSize: "1.25rem", textTransform: "none", fontWeight: "bold", border: "5px solid #1179cc", color: "#1179cc", borderRadius: "0" }}>
                        Support the Creators
                    </Button>
                </div>
            </motion.div>
            <motion.a initial={fade_variants[0]} animate={fade_variants.slice(1)}>
                <HelpOutlineIcon variant="contained" style={{ backgroundColor: "yellow", zIndex: 1, borderRadius: "100%", position: "absolute", fontSize: "5rem", top: "5%", right: "5%" }} />
            </motion.a>
            <motion.div initial={hill_variants[0]} animate={hill_variants.slice(1)} variants={hill_variants} style={{ zIndex: 2 }}>
                <motion.div initial={fade_variants[0]} animate={fade_variants.slice(1)} className="row h-100 w-100" style={{ display: "flex", alignItems: "center", justifyItems: "center", margin: "0"}}>
                    <div className="col-6 h-100 pt-5 px-0 text-center">
                        <a href="www.google.com">
                            <h1>our work</h1>
                        </a>
                    </div>
                    <div className="col-6 h-100 pt-5 px-0 text-center overflow-hidden">
                        <a href="www.google.com">
                            <h1>news</h1>
                        </a>
                        <div style={{ width: "100%", maxHeight: "150px", padding: "10%"}}>
                            <HomeCarousel imgs={img_array} />
                        </div>
                    </div>
                </motion.div>
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
