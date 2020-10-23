import { PinDropSharp } from '@material-ui/icons';
import React, { useState, useEffect } from 'react';
import "./Slideshow.css"

export default function Slideshow({ images = [], interval = 3000 }) {
    const [thumbnails, setThumnails] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [currentSlideStyle, setCurrentSlideStyle] = useState({});

    useEffect(() => {
        setThumnails(images);
        setCurrentSlideStyle({
            backgroundImage: "url('"+ images[currentSlide] + "')"
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
        <section className="slideshow">
            <div className="slide-holder">
                <section className="slide current-slide">
                    <div style={currentSlideStyle} className="slide-thumbnail"></div>
                </section>
            </div>
            <div className={PinDropSharp.isHome ? "slideshow-controller" : ""}>
                <span onClick={previous}>Previous</span>
                <span onClick={next}>Next</span>
            </div>
        </section>
    )
}   