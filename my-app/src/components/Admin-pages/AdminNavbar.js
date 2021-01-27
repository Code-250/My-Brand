import React from "react";
import {NavLink} from 'react-router-dom';
import '../../App.css';
import {Button} from "../Button";
import app from "../../context/firebase"

const AdNavbar =()=>{
    const handleLogout =() =>{
        app.auth().signOut();
    }
    return(
        <>
            <nav className="navbar">
                <b className='brand-title'>Richard</b>
                    <div className='navbar-links'>
                        <ul className= 'nav-menu'>
                            <li>
                                <NavLink to="/">
                                    <Button buttonStyle='btn--outline'
                                        onClick={handleLogout} className='btn'>
                                        Log Out  
                                    </Button>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
            </nav>
        </>
    )
}


export default AdNavbar;