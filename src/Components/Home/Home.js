import React from 'react';
import Banner from '../Banner/Banner';
import Projects from '../Projects/Projects';
import './Home.css';

const Home = () => {
    return (
        <div className='home'>
            <Banner></Banner>
            <Projects></Projects>
        </div>
    );
};

export default Home;