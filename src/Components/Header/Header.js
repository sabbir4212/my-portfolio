import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';
import { AiOutlineMenuUnfold, AiOutlineClose } from 'react-icons/ai';

const Header = () => {
    const [openNav, setOpenNav] = useState(false);
    return (
        <div className="header">
        <div>
          <Link to="/"><h1 className="title">Sabbir Hossan</h1></Link>
        </div>
        <div>
          <nav className={openNav ? " nav-close":"nav-open"}>
            <NavLink className={({isActive}) => (isActive ? 'active-link' : 'link-btn-style')} to="home#home" >Home</NavLink>
            <NavLink className={({isActive}) => (isActive ? 'active-link' : 'link-btn-style')} to="skils#skils">Skils</NavLink> 
            <NavLink className={({isActive}) => (isActive ? 'active-link' : 'link-btn-style')} to="about#about">About</NavLink> 
            <NavLink className={({isActive}) => (isActive ? 'active-link' : 'link-btn-style')} to="project#project">Project</NavLink> 
            <NavLink className={({isActive}) => (isActive ? 'active-link' : 'link-btn-style')} to="contact#contact">Contact</NavLink> 
            <NavLink className={({isActive}) => (isActive ? 'active-link' : 'link-btn-style')} to="blog#blog">Blog</NavLink>
          </nav>
          <button onClick={() => {setOpenNav(!openNav)}} className="menu-ico">{openNav ? <AiOutlineClose></AiOutlineClose> : <AiOutlineMenuUnfold></AiOutlineMenuUnfold>}</button>
        </div>
      </div>
    );
};

export default Header;

// game password https://thegamesdownload.net/