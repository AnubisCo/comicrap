import React from 'react';
import logo from './../img/ZacharyMorrison.jpg';
import './Creators.css';

function CreatorCard(props) {
    return (
        <div className="creator-card p-3 mx-4">
            <div>
                <img className="creator-card-pic" src={logo} alt="creator profile" />
            </div>
            <div className="creator-card-text">
                <h4>
                    Josyah Morrison
                </h4>
                <p>
                    description of josyah to fill space idk what I'm really gonna put here at all
                </p>
            </div>
        </div>
    );
}

export default function Creators(props) {
    return (
        <div>
            <br />
            <div className="container">
                <h2 style={{ textAlign: "right" }}>
                    Creators
                </h2>
            </div>
            <br />
            <div className="creator-card-list">
                <CreatorCard />
                <CreatorCard />
                <CreatorCard />
                <CreatorCard />
                <CreatorCard />
                <CreatorCard />
            </div>
        </div>
    );
}
