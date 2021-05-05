import React from "react";
import Slideshow from "./../components/Slideshow";
import Button from "@material-ui/core/Button";
import Announcement from "@material-ui/icons/Announcement";

import "./News.css";
import toilet from "./../img/toilet.png";

import img1 from "./../img/slide_1.jpg";
import img2 from "./../img/slide_2.jpg";
import img3 from "./../img/slide_3.jpg";
import img4 from "./../img/slide_4.jpg";
import img5 from "./../img/slide_5.jpg";

const imgs = [img1, img2, img3, img4, img5];
const articles = [{
    title: "some random article",
    img: null,
    body: "blah blah blah sdkfjas dsdfa sdfaga asdf gasd gas dfa sdgasdg asd gasdf ag ghwae g asdf asd.",
    author: "zachary morrison",
    date: "2:22pm"
},
{
    title: "some random 1",
    img: null,
    body: "blah blah blah sdkfjas dsdfa sdfaga asdf gasd gas dfa sdgasdg asd gasdf ag ghwae g asdf asd.",
    author: "zachary morrison",
    date: "2:22pm"
},
{
    title: "some random 2",
    img: null,
    body: "blah blah blah sdkfjas dsdfa sdfaga asdf gasd gas dfa sdgasdg asd gasdf ag ghwae g asdf asd.",
    author: "zachary morrison",
    date: "2:22pm"
},
{
    title: "some random 3",
    img: null,
    body: "blah blah blah sdkfjas dsdfa sdfaga asdf gasd gas dfa sdgasdg asd gasdf ag ghwae g asdf asd.",
    author: "zachary morrison",
    date: "2:22pm"
},
{
    title: "some random 4",
    img: null,
    body: "blah blah blah sdkfjas dsdfa sdfaga asdf gasd gas dfa sdgasdg asd gasdf ag ghwae g asdf asd.",
    author: "zachary morrison",
    date: "2:22pm"
}
];

export default function News(props) {
    return (
        <div className="container my-3">
            <br />
            <h2>
                News
            </h2>
            <br />
            <div className="row">
                <div className="col-lg-6 my-auto px-5 text-center">
                    <div className="row">
                        <div className="col-md-6 py-3">
                            <img className="toilet" src={toilet} alt="toilet" />
                        </div>
                        <div className="col-md-6 my-auto py-3">
                            <h4>
                                Stay up to date!
                            </h4>
                            <p>
                                here I will place a description for the news section that will be on both the home and news page.
                            </p>
                            <Button variant="contained" color="primary" startIcon={<Announcement className="nav-icon" style={{ fontSize: "1.5rem" }} />} >
                                news
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 my-auto p-5">
                    <Slideshow articleArray={articles} interval={6000} images={imgs} />
                </div>
            </div>
        </div>
    );
}

