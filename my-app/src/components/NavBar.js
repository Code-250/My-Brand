import React from 'react'
import {NavLink } from 'react-router-dom';
import {Link} from "react-scroll/modules";
import {Button} from "./Button";
import '../App.css';


function NavBar (){

    
    return (
        <>
            <nav className="navbar">
                <b className='brand-title'>Richard
                </b>

                <div className='navbar-links'>
                    <ul className= 'nav-menu'>
                        <li className='nav-items'>
                            <NavLink to='/'
                            spy={true}
                            smooth={true}
                            offset={-135}
                            duration={500}
                            className="nav-links">
                            <p className="change">Home</p> 
                            </NavLink>
                        </li>
                        <li className='nav-items'>
                            <Link to='projects'
                            spy={true}
                            smooth={true}
                            offset={-135}
                            duration={500}
                            className="nav-links">
                            <p className="change">Projects</p> 
                            </Link>
                        </li>
                        <li className='nav-items'>
                            <Link to='blogs'
                            spy={true}
                            smooth={true}
                            offset={-65}
                            duration={500}
                            className="nav-links">
                            <p className="change">Blogs</p> 
                            </Link>
                        </li>
                        <li className='nav-items'>
                            <Link to="About"
                                spy={true}
                                smooth={true}
                                offset={-135}
                                duration={500} 
                                className="nav-links">
                                <p className='change'>About</p>
                            </Link>
                        </li>
                           <NavLink to="/login">
                                <Button buttonStyle='btn--outline'
                                className='btn'>
                                    LogIn  
                                </Button>
                            </NavLink>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default NavBar;