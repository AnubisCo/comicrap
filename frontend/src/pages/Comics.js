import React from 'react';
import Button from "@material-ui/core/Button";

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

function Comic({ comic = { series: "", series_img: null, issue: 0 } }) {
    return (
        <div className="comic text-center">
            <img alt="comic series cover" src={comic.series_img} />
            <h2 className="mt-5">
                {comic.series}
            </h2>
            <Button color="primary" className="mb-5" variant="contained">
                see more...
            </Button>
        </div>
    );
}

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