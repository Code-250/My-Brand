import React from 'react'
import {NavLink, Link} from 'react-router-dom';
import {Button} from "./Button";
import '../../App.css';

function NavBar (){
    return (
        <>
            <nav className="navbar" role=' navigation'
                aria-label='main-navigation'>
                <b className='brand-title'>Richard
                </b>

                <div className='navbar-links'>
                    <ul className= 'nav-menu'>
                        <li className='nav-items'>
                            <NavLink to='/' 
                            activeClass='active'
                            spy={true}
                            smooth={true}
                            offset={-130}
                            duration={500}
                            className="nav-links">
                            <p className="change">Home</p> 
                            </NavLink>
                        </li>
                        <li className='nav-items'>
                            <NavLink to='/projects' 
                            activeClass='active'
                            spy={true}
                            smooth={true}
                            offset={-130}
                            duration={500}
                            className="nav-links">
                            <p className="change">Projects</p> 
                            </NavLink>
                        </li>
                        <li className='nav-items'>
                            <NavLink to='/ContactMessage/:name' 
                            activeClass='active'
                            spy={true}
                            smooth={true}
                            offset={-130}
                            duration={500}
                            className="nav-links">
                            <p className="change">Blogs</p> 
                            </NavLink>
                        </li>
                        <li className='nav-items'>
                            <NavLink to='/dashboard' 
                                activeClass='active'
                                spy={true}
                                smooth={true}
                                offset={-130}
                                duration={500}
                                className="nav-links">
                                <p className='change'>Dashboard</p>
                            </NavLink>
                        </li>
                        <li className='nav-items'>
                            <NavLink to="/About"
                                activeClass='active'
                                spy={true}
                                smooth={true}
                                offset={-130}
                                duration={500} 
                                className="nav-links">
                                <p className='change'>About</p>
                            </NavLink>
                        </li>
                        <Link to={"/login"}>
                            <Button buttonStyle='btn--outline' className='btn'>
                                    Login
                            </Button>
                            </Link>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default NavBar;