import React from "react";
import "./Hero.css";

function Hero() {
    return (
        <div data-test='hero-section'>
            <h1 className="hero-title">FLY</h1>
            <p className="hero-first-parag">CODERS</p>
            <p className="hero-second-parag">A TEC COMPANY</p>
        </div>
    );
}

export default Hero;
