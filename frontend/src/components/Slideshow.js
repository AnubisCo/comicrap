import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import "./Slideshow.css";

export default function Slideshow({ images = [], interval = 3000, isHome = true }) {
    const [thumbnails, setThumnails] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [currentSlideStyle, setCurrentSlideStyle] = useState({});

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

                    </div>
                </section>
                <div className={isHome ? "invis" : "slideshow-controller"}>
                    <Button onClick={previous} variant="contained" color="default">
                        prev
                    </Button>
                    <Button onClick={next} variant="contained" color="default">
                        next
                    </Button>
                </div>
            </div>
        </section>
    )
}   