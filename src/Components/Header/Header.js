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
            <NavLink className="link-btn" to="/">Home</NavLink>
            <NavLink className="link-btn" to="/skils">Skils</NavLink> 
            <NavLink className="link-btn" to="/about">About</NavLink> 
            <NavLink className="link-btn" to="/project">Project</NavLink> 
            <NavLink className="link-btn" to="/contact">Contact</NavLink> 
            <NavLink className="link-btn" to="/blog">Blog</NavLink>
          </nav>
          <button onClick={() => {setOpenNav(!openNav)}} className="menu-ico">{openNav ? <AiOutlineClose></AiOutlineClose> : <AiOutlineMenuUnfold></AiOutlineMenuUnfold>}</button>
        </div>
      </div>
    );
};

export default Header;