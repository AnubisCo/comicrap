import React from 'react';
import Button from "@material-ui/core/Button";

export default function Comic({ comic = { series: "", series_img: null, issue: 0 } }) {
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