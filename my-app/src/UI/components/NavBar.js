import React, {useState, useEffect} from 'react'
import {Link, withRoute} from 'react-router-dom';
import { Button } from './Button';
import '../../App.css';
import ContactMessage from './Admin-pages/ViewContactMessage'


function NavBar (props){
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
    return (
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
                                <Link to='/' 
                                activeClass='active'
                                spy={true}
                                smooth={true}
                                offset={-130}
                                duration={500}
                                className="nav-links" onClick={closeMobileMenu}>
                                <p className="change">Home</p> 
                                </Link>
                            </li>
                            <li className='nav-items'>
                                <Link to='/projects' 
                                activeClass='active'
                                spy={true}
                                smooth={true}
                                offset={-130}
                                duration={500}
                                className="nav-links" onClick={closeMobileMenu}>
                                <p className="change">Projects</p> 
                                </Link>
                            </li>
                            <li className='nav-items'>
                                <Link to='/ContactMessage/:name' 
                                activeClass='active'
                                spy={true}
                                smooth={true}
                                offset={-130}
                                duration={500}
                                className="nav-links" onClick={closeMobileMenu}>
                                <p className="change">Blogs</p> 
                                </Link>
                            </li>
                            <li className='nav-items'>
                                <Link to='/about' 
                                    activeClass='active'
                                    spy={true}
                                    smooth={true}
                                    offset={-130}
                                    duration={500}
                                    className="nav-links" onClick={closeMobileMenu}>
                                    <p className='change'>About</p>
                                </Link>
                            </li>
                            <li className='nav-items'>
                                <Link to="/viewContactMessage"
                                    activeClass='active'
                                    spy={true}
                                    smooth={true}
                                    offset={-130}
                                    duration={500} 
                                    className="nav-links" onClick={closeMobileMenu}>
                                    <p className='change'>Contact</p>
                                </Link>
                            </li>
                            <Link to='/Login'>
                             {button && <Button 
                                        buttonStyle='btn--outline'className='btn'>Login</Button>}
                            </Link>
                        </ul>
                    </div>
                    
                   
            </nav>
        </>
    )
}

export default NavBar