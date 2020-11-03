import React from "react";
import Slideshow from "./../components/Slideshow";
import img1 from "./../img/slide_1.jpg";
import img2 from "./../img/slide_2.jpg";
import img3 from "./../img/slide_3.jpg";
import img4 from "./../img/slide_4.jpg";
import img5 from "./../img/slide_5.jpg";

const imgs = [img1, img2, img3, img4, img5];

export default function Feat(props) {
    return (
        <div className="container my-5">
            <br />
            <h2>
                News
            </h2>
            <br />
            <div style={{ height: "40vh", width: "100%" }}>
                <Slideshow interval={6000} images={imgs} isHome={false} />
            </div>
        </div>
    );
}

