import React from 'react';
import './Banner.css';
import myImg from '../../images/my-img.jpg';
import { Nav } from 'react-bootstrap';

const Banner = () => {
    return (
        <div className='banner' id='home'>
            <div className='half-banner' style={{textAlign:'center'}} data-aos="fade-right">
                    <img src={myImg} alt="" />
            </div>
            <div className='half-banner' data-aos="fade-left">
                    <h1>Sabbir Hossan</h1>
                <p>I am a Junior Web Developer. I Can Make Web Application Using React, Node, Express, MongoDB and some more Tools and Frameworks</p>
                    <Nav.Link target="_blank" className='download-resume' href="https://drive.google.com/file/d/1G1Ex4-9WhgOHchuBP5wAjZNfhAlKexoY/view?usp=sharing">Download Resume</Nav.Link>
            </div>
        </div>
    );
};

export default Banner;