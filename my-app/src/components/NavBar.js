import React from 'react'
import {NavLink } from 'react-router-dom';
import {Link} from "react-scroll/modules";
import {Button} from "./Button";
import '../App.css';
import app from "../context/firebase"


function NavBar ({value}){

    const handleLogout =() =>{
        app.auth().signOut();
    }
let buttons;
if(value){
    buttons=(<NavLink to={"/"}>
        <Button buttonStyle='btn--outline'
        onClick={handleLogout} className='btn'>
            Logout  
        </Button>
    </NavLink>)
}else{
    buttons=(<NavLink to={"/login"}>
    <Button buttonStyle='btn--outline' className='btn'>
        login
    </Button>
</NavLink>)
}
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
                            <NavLink to='/dashboard'
                                spy={true}
                                smooth={true}
                                offset={-135}
                                duration={500}
                                className="nav-links">
                                <p className='change'>Dashboard</p>
                            </NavLink>
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
                           {buttons}
                           <NavLink to={"/"}>
                                <Button buttonStyle='btn--outline'
                                onClick={handleLogout} className='btn'>
                                    Log Out  
                                </Button>
                            </NavLink>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default NavBar;