import React from 'react';
import logo from './../img/logo.png';
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
        <div className="container">
            <br />
            <h2 style={{ textAlign: "right" }}>
                Creators
            </h2>
            <br />
            <div className="creator-card-list">
                <CreatorCard />
                <CreatorCard />
                <CreatorCard />
            </div>
        </div>
    );
}
