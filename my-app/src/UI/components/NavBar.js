import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom';
import { Button } from './Button';
import '../../App.css';


function NavBar (){
      const [click, setClick] = useState(false);
      const [button, setButton] = useState(true);

      const handleClick = ()=>setClick(!click);
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
            <nav className="navbar">
                    <b className='brand-title'>Richard
                    </b>
                    <div className="menu-icons" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'}>
                        
                        </i>
                    </div>
                    <div className='navbar-links'>
                        <ul className={click ?'nav-menu-active' : 'nav-menu'}>
                            <li className='nav-item'>
                                <Link to='/' className="nav-links" onClick={closeMobileMenu}>
                                <p className="change">Home</p> 
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link to='/about' className="nav-links" onClick={closeMobileMenu}>
                            <p className='change'>About</p>
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link to="/contacts" className="nav-links" onClick={closeMobileMenu}>
                                <p className='change'>Contact</p>
                                </Link>
                            </li>
                            <Link to='/Login'> {button && <Button buttonStyle='btn--outline'className='btn'>Login</Button>}</Link>
                        </ul>
                    </div>
                    
                   
            </nav>
        </>
    )
}

export default NavBar