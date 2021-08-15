import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import { FaPlayCircle } from "react-icons/fa";

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src="/videos/video-2.mp4" autoPlay loop muted />
            <h1>ADVANTURE AWAITS</h1>
            <p>What are you waiting for?</p>
            <div className="hero-btns">
                <Button className="btn" buttonStyle='btn--outline'
                buttonSize='btn--large'>
                    GET STARTED
                </Button>
                <Button className="btn" buttonStyle='btn--primary'
                buttonSize='btn--large'>
                    WATCH TRAILER <FaPlayCircle className='fa-play-circle' />
                </Button>
            </div>
        </div>
    )
}

export default HeroSection
