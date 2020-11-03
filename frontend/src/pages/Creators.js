import React, { useState, useCallback, useEffect } from 'react';
import Button from "@material-ui/core/Button";
import Group from '@material-ui/icons/Group';
import logo from './../img/ZacharyMorrison.jpg';
import './Creators.css';

const cardItems = [
    {
        id: 1,
        pic: logo,
        title: "zach",
        copy:
            "writer and co-creator of blah blah"
    }
];

function determineClasses(indexes, cardIndex) {
    if (indexes.currentIndex === cardIndex) {
        return "active";
    } else if (indexes.nextIndex === cardIndex) {
        return "next";
    } else if (indexes.previousIndex === cardIndex) {
        return "prev";
    }
    return "inactive";
}

const CardCarousel = () => {
    const [indexes, setIndexes] = useState({
        previousIndex: 0,
        currentIndex: 0,
        nextIndex: 1
    });

    const handleCardTransition = useCallback(() => {
        // If we've reached the end, start again from the first card,
        // but carry previous value over
        if (indexes.currentIndex >= cardItems.length - 1) {
            setIndexes({
                previousIndex: cardItems.length - 1,
                currentIndex: 0,
                nextIndex: 1
            });
        } else {
            setIndexes(prevState => ({
                previousIndex: prevState.currentIndex,
                currentIndex: prevState.currentIndex + 1,
                nextIndex:
                    prevState.currentIndex + 2 === cardItems.length
                        ? 0
                        : prevState.currentIndex + 2
            }));
        }
    }, [indexes.currentIndex]);

    useEffect(() => {
        const transitionInterval = setInterval(() => {
            handleCardTransition();
        }, 5000);

        return () => clearInterval(transitionInterval);
    }, [handleCardTransition, indexes]);

    return (
        <div className="container">
            <ul className="card-carousel">
                {cardItems.map((card, index) => (
                    <li
                        key={card.id}
                        className={`card ${determineClasses(indexes, index)}`}
                    >
                        <img className="card-img" src={card.pic} alt="card img" />
                        <div className="p-3">
                            <h2>{card.title}</h2>
                            <p>{card.copy}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default function Creators(props) {
    return (
        <div className="container my-5">
            <br />
            <h2>
                Creators
            </h2>
            <br />
            <div className="row">
                <div className="col-md-6 py-5 my-auto text-center">
                    <h4>
                        We love our creators!
                    </h4>
                    <p>
                        here I will place a description for the creator section that will be on both the home and creator page.
                    </p>
                    <Button variant="contained" color="primary" startIcon={<Group className="nav-icon" style={{ fontSize: "1.5rem" }} />} >
                        creators
                    </Button>
                </div>
                <div style={{ height: "500px" }} className="col-md-6 py-5">
                    <CardCarousel />
                </div>
            </div>
        </div>
    );
}
