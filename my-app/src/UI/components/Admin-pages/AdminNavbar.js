import React,{useState, useEffect} from "react";
import {NavLink} from 'react-router-dom';
import app from "../../../firebase";
import '../../../App.css';

const AdNavbar =()=>{
      const  [isOpen, setOpen] = useState(false);
      const [click, setClick] = useState(false);
      const [button, setButton] = useState(true);

      const closeMobileMenu= ()=>setClick(false);
      const showButton=()=>{
          if (window.innerWidth<=960){
            setButton(false);
          } else{
              setButton(true);
          }
      };
      useEffect (()=>{
        showButton()
      },[]);
      window.addEventListener('resize',showButton);
    return(
        <>
            <nav className="navbar" role=' navigation'
                aria-label='main-navigation'>
                    <b className='brand-title'>Richard
                    </b>
                    <div className="menu-icon">
                        <a
                        role="button"
                        className={`navbar-burger burger ${isOpen && 'is-active'}`}
                        aria-label="menu"
                        aria-expended="false"
                        onClick={()=>setOpen(!isOpen)}
                        >
                            <span aria-hidden ='true'></span>
                            <span aria-hidden ='true'></span>
                            <span aria-hidden ='true'></span>
                        </a>
                    </div>

                    <div className='navbar-links'>
                        <ul className={click ?'nav-menu-active' : 'nav-menu'}>
                            <li className='nav-items'>
                                <NavLink to='/' 
                                activeClass='active'
                                spy={true}
                                smooth={true}
                                offset={-130}
                                duration={500}
                                className="nav-links" onClick={closeMobileMenu}>
                                <p className="change">Home</p> 
                                </NavLink>
                            </li>
                            <li className='nav-items'>
                                <NavLink to='/createPost' 
                                activeClass='active'
                                spy={true}
                                smooth={true}
                                offset={-130}
                                duration={500}
                                className="nav-links" onClick={closeMobileMenu}>
                                <p className="change">Upload new project</p> 
                                </NavLink>
                            </li>
                            <li className='nav-items'>
                                <NavLink to='/ContactMessage/:name' 
                                activeClass='active'
                                spy={true}
                                smooth={true}
                                offset={-130}
                                duration={500}
                                className="nav-links" onClick={closeMobileMenu}>
                                <p className="change">Create Blog Post</p> 
                                </NavLink>
                            </li>
                            <button onClick={()=>app.auth().signOut()}>sign out</button>
                        </ul>
                    </div>
            </nav>
        </>
    )
}


export default AdNavbar;