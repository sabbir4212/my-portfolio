import React from 'react';
import './Banner.css';
import Swing from 'react-reveal/Swing';
import Jello from 'react-reveal/Jello';
import RubberBand from 'react-reveal/RubberBand';
import myImg from '../../images/my-img.jpg';
import { Nav } from 'react-bootstrap';

const Banner = () => {
    return (
        <div className='banner' id='home'>
            <div className='half-banner' style={{textAlign:'center'}}>
                <Jello>
                    <img src={myImg} alt="" />
                </Jello>
            </div>
            <div className='half-banner'>
                <Swing>
                    <h1>Sabbir Hossan</h1>
                </Swing>
                <p>I am a Junior Web Developer. I Can Make Web Application Using React, Node, Express, MongoDB and some more Tools and Frameworks</p>
                <RubberBand>
                    <Nav.Link target="_blank" className='download-resume' href="https://drive.google.com/file/d/1G1Ex4-9WhgOHchuBP5wAjZNfhAlKexoY/view?usp=sharing">Download Resume</Nav.Link>
                </RubberBand>
            </div>
        </div>
    );
};

export default Banner;