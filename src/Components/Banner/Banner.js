import React from 'react';
import './Banner.css';
import myImg from '../../images/my-img.jpg';

const Banner = () => {
    return (
        <div className='banner'>
            <div className='half-banner' style={{textAlign:'center'}}>
                <img src={myImg} alt="" />
            </div>
            <div className='half-banner'>
                <h1>Sabbir Hossan</h1>
                <p>I am a Junior Web Developer. I Can Make Web Application Using React, Node, Express, MongoDB and some more Tools and Frameworks</p>
                <a target="_blank" className='download-resume' href="https://drive.google.com/file/d/1G1Ex4-9WhgOHchuBP5wAjZNfhAlKexoY/view?usp=sharing">Download Resume</a>
            </div>
        </div>
    );
};

export default Banner;