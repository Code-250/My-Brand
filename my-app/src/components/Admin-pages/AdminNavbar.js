import React from "react";
import {NavLink} from 'react-router-dom';
import '../../App.css';

const AdNavbar =()=>{
    return(
        <>
            <nav className="navbar">
                <b className='brand-title'>Richard</b>
                    <div className='navbar-links'>
                        <ul className= 'nav-menu'>
                            <li className='nav-items'>
                                <NavLink to='/'
                                spy={true}
                                smooth={true}
                                offset={-130}
                                duration={500}
                                className="nav-links">
                                <p className="change">Home</p> 
                                </NavLink>
                            </li>
                            <li className='nav-items'>
                                <NavLink to='/createPost'
                                spy={true}
                                smooth={true}
                                offset={-130}
                                duration={500}
                                className="nav-links">
                                <p className="change">Upload new project</p> 
                                </NavLink>
                            </li>
                            <li className='nav-items'>
                                <NavLink to='/ContactMessage/:name'
                                spy={true}
                                smooth={true}
                                offset={-130}
                                duration={500}
                                className="nav-links">
                                <p className="change">Create Blog Post</p> 
                                </NavLink>
                            </li>
                        </ul>
                    </div>
            </nav>
        </>
    )
}


export default AdNavbar;