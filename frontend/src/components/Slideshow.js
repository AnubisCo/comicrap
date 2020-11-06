import React, { useState, useEffect } from "react";
import IButton from "@material-ui/core/IconButton";
import Prev from "@material-ui/icons/NavigateBefore";
import Next from "@material-ui/icons/NavigateNext";
import "./Slideshow.css";

const Article = (props) => {
    if (props.show) {
        return (
            <div className="article container px-5">
                <h4>
                    {props.article.title}
                </h4>
                <h6>
                    {props.article.author}
                </h6>
                <small>
                    {props.article.date}
                </small>
                <p>
                    {props.article.body}
                </p>
            </div>
        );
    } else {
        return (
            <div className="invis">
            </div>
        );
    }
}

export default function Slideshow({ articleArray = [{ title: "", img: null, body: "", author: "", date: "" }], images = [], interval = 3000, location = "" }) {
    const [thumbnails, setThumnails] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [currentSlideStyle, setCurrentSlideStyle] = useState({});
    const articles = articleArray;

    let isHome = null;
    if (location === "home") {
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
                        <Article article={articles[currentSlide]} show={!isHome} />
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