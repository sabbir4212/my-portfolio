import React from 'react';
import './Skils.css';

const Skils = () => {
    return (
        <div className='my-skils' data-aos="fade-up" data-aos-duration="1000">
            <h1 className='fw-bold text-center'>MY SKIL'S</h1>
            <hr />
            <div className="skils row text-center">
                <div className="col-6 col-md-4 col-lg-3 p-5" data-aos="flip-left">
                    <img style={{width:'100px', height:'100px'}} src="https://i.ibb.co/m6s7G0x/html.jpg" alt="" />
                    <h4 className='fw-bold'>HTML5</h4>
                    </div>
                <div className="col-6 col-md-4 col-lg-3 p-5" data-aos="flip-left">
                    <img style={{width:'100px', height:'100px'}} src="https://i.ibb.co/bszZdpc/css.png" alt="" />
                    <h4 className='fw-bold'>CSS3</h4>
                    </div>
                <div className="col-6 col-md-4 col-lg-3 p-5" data-aos="flip-left">
                    <img style={{width:'100px', height:'100px'}} src="https://i.ibb.co/nCTVgtW/js.png" alt="" />
                    <h4 className='fw-bold'>Javascript</h4>
                    </div>
                <div className="col-6 col-md-4 col-lg-3 p-5" data-aos="flip-left">
                    <img style={{width:'100px', height:'100px'}} src="https://i.ibb.co/rZpv92s/es6.png" alt="" />
                    <h4 className='fw-bold'>ES6</h4>
                    </div>
                <div className="col-6 col-md-4 col-lg-3 p-5" data-aos="flip-left">
                    <img style={{width:'100px', height:'100px'}} src="https://i.ibb.co/n1Rtyg7/react.png" alt="" />
                    <h4 className='fw-bold'>React</h4>
                    </div>
                <div className="col-6 col-md-4 col-lg-3 p-5" data-aos="flip-left">
                    <img style={{width:'100px', height:'100px'}} src="https://i.ibb.co/qJ3Nd1c/firebase.png" alt="" />
                    <h4 className='fw-bold'>Firebase</h4>
                    </div>
                <div className="col-6 col-md-4 col-lg-3 p-5" data-aos="flip-left">
                    <img style={{width:'100px', height:'100px'}} src="https://i.ibb.co/47q6FJh/Bootstrap.png" alt="" />
                    <h4 className='fw-bold'>Bootstrap</h4>
                    </div>
                <div className="col-6 col-md-4 col-lg-3 p-5" data-aos="flip-left">
                    <img style={{width:'100px', height:'100px'}} src="https://i.ibb.co/9qvzWjL/mui.png" alt="" />
                    <h4 className='fw-bold'>Material UI</h4>
                    </div>
                <div className="col-6 col-md-4 col-lg-3 p-5" data-aos="flip-left">
                    <img style={{width:'100px', height:'100px'}} src="https://i.ibb.co/M2k90RJ/node.png" alt="" />
                    <h4 className='fw-bold'>Node JS</h4>
                    </div>
                <div className="col-6 col-md-4 col-lg-3 p-5" data-aos="flip-left">
                    <img style={{width:'100px', height:'100px'}} src="https://i.ibb.co/hDDzgQg/tailwind-square.png" alt="" />
                    <h4 className='fw-bold'>Tailwind</h4>
                    </div>
                <div className="col-6 col-md-4 col-lg-3 p-5" data-aos="flip-left">
                    <img style={{width:'100px', height:'100px'}} src="https://i.ibb.co/tM2mSm9/express.png" alt="" />
                    <h4 className='fw-bold'>Express JS</h4>
                    </div>
                <div className="col-6 col-md-4 col-lg-3 p-5" data-aos="flip-left">
                    <img style={{width:'100px', height:'100px'}} src="https://i.ibb.co/FBbwqz6/mongodb.png" alt="" />
                    <h4 className='fw-bold'>MongoDB</h4>
                    </div>
            </div>
        </div>
    );
};

export default Skils;