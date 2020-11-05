import React, { useState, useEffect } from "react";
import IButton from "@material-ui/core/IconButton";
import Prev from "@material-ui/icons/NavigateBefore";
import Next from "@material-ui/icons/NavigateNext";
import "./Slideshow.css";

export default function Slideshow({ images = [], interval = 3000, location = "", articles = [{ title: "", img: null, body: "", author: "", time: "" }] }) {
    const [thumbnails, setThumnails] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [currentSlideStyle, setCurrentSlideStyle] = useState({});

    let isHome = null;
    if (location == "home") {
        isHome = true;
    } else {
        isHome = false;
    }

    useEffect(() => {
        setThumnails(images);
        setCurrentSlideStyle({
            backgroundImage: "url('" + images[currentSlide] + "')"
        });
        const loop = setInterval(() => {
            if (currentSlide === images.length - 1) {
                setCurrentSlide(0);
            } else {
                setCurrentSlide(currentSlide + 1);
            }
        }, interval);
        return () => clearInterval(loop);
    }, [images, currentSlide, interval]);

    function previous() {
        if (currentSlide > 0) {
            setCurrentSlide(currentSlide - 1);
        } else {
            setCurrentSlide(thumbnails.length - 1);
        }
    }

    function next() {
        if (currentSlide === thumbnails.length - 1) {
            setCurrentSlide(0);
        } else {
            setCurrentSlide(currentSlide + 1);
        }
    }

    return (
        <section className={isHome ? "slideshowHome" : "slideshow"}>
            <div className="slide-holder">
                <section className={isHome ? "slide current-slide" : "slide"}>
                    <div style={currentSlideStyle} className="slide-thumbnail">
                        <div className={isHome ? "invis" : "article"}>
                            {articles.title}
                        </div>
                    </div>
                </section>
                <div className={isHome ? "invis" : "slideshow-controller"}>
                    <IButton onClick={previous} variant="contained" color="primary">
                        <Prev fontSize="large" />
                    </IButton>
                    <IButton onClick={next} variant="contained" color="primary">
                        <Next fontSize="large" />
                    </IButton>
                </div>
            </div>
        </section>
    )
}