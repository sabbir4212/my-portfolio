import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className='footer'>
            <p>Copyright &copy; {new Date().getFullYear()} | All rights reserved by MD Sabbir Hossan</p>
        </footer>
    );
};

export default Footer;