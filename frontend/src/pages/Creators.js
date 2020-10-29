import React, { useState, useCallback, useEffect} from 'react';
import logo from './../img/ZacharyMorrison.jpg';
import './Creators.css';

const cardItems = [
    {
        id: 1,
        pic: logo,
        title: "Stacked Card Carousel",
        copy:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet dui scelerisque, tempus dui non, blandit nulla. Etiam sed interdum est."
    },
    {
        id: 2,
        pic: logo,
        title: "Second Item",
        copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
        id: 3,
        pic: logo,
        title: "A Third Card",
        copy:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet dui scelerisque, tempus dui non, blandit nulla."
    },
    {
        id: 4,
        pic: logo,
        title: "Fourth",
        copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
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
        <div>
            <div className="container">
                <h2>
                    Creators
                </h2>
            </div>
            <CardCarousel />
            <div>

            </div>
        </div>
    );
}
