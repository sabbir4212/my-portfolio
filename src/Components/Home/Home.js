import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Blogs from '../Blogs/Blogs';
import ContactMe from '../ContactMe/ContactMe';
import Projects from '../Projects/Projects';
import Skils from '../Skils/Skils';
import './Home.css';

const Home = () => {
    return (
        <div className='home'>
            <Banner></Banner>
            <Skils></Skils>
            <About></About>
            <Projects></Projects>
            <ContactMe></ContactMe>
            <Blogs></Blogs>
        </div>
    );
};

export default Home;