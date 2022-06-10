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
            <NavLink className="link-btn" to="/blogs">Blogs</NavLink> 
            {/* <a className='link-btn' href="/">Home</a>
            <a className='link-btn' href="/skils">Skils</a>
            <a className='link-btn' href="/about">About</a>
            <a className='link-btn' href="/project">Project</a>
            <a className='link-btn' href="/contact">Contact</a> */}
            {/* <a className='link-btn' href="#blog">Blog</a> */}
            {/* <NavLink className='link-btn' to="/blog">Blog</NavLink> */}
          </nav>
          <button onClick={() => {setOpenNav(!openNav)}} className="menu-ico">{openNav ? <AiOutlineClose></AiOutlineClose> : <AiOutlineMenuUnfold></AiOutlineMenuUnfold>}</button>
        </div>
      </div>
    );
};

export default Header;