import React from 'react';
import Comic from "./Comic.js";

import "./Comics.css";
import immutable from "./../img/slide_1.jpg";
import highGround from "./../img/cover1.jpg";
import TandA from "./../img/cover2.jpg";

const comicArray = [
    {
        series: "immutable",
        series_img: immutable,
        issue: 0,
    },
    {
        series: "high ground",
        series_img: highGround,
        issue: 0,
    },
    {
        series: "trey and the angel",
        series_img: TandA,
        issue: 0,
    }
];

export default function Comics() {
    return (
        <div className="container my-5">
            <br />
            <h2>
                Comics
            </h2>
            <br />
            <div className="row py-5">
                {comicArray.map((comic, i) => (
                    <div key={i} className="col-md-4 mx-auto">
                        <Comic comic={comic} />
                    </div>
                ))}
            </div>
        </div>
    );
}