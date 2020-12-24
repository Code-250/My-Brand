import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom';
import { Button } from './Button';
import './navBar.css'

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
                <div className="navbar-container">
                    <b className='name'>RICHARD MUNYEMANA
                    </b>
                    <div className="menu-icons" onClick={handleClick}>
                        <i class Name={click ? 'fas fa-times' : 'fas fa-bars'}/>
                    </div>
                    <ul className={click ?'nav-menu-active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className="nav-links" onClick={closeMobileMenu}>
                               <p className="change">HOME</p> 
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/about' className="nav-links" onClick={closeMobileMenu}>
                           <p className='change'>ABOUT ME</p>
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="/contacts" className="nav-links" onClick={closeMobileMenu}>
                            <p className='change'>CONTACT US</p>
                            </Link>
                        </li>
                        
                    </ul>
                   <Link to='/contact'> {button && <Button buttonStyle='btn--outline'>Login</Button>}</Link>
                    
                    
                </div>
            </nav>
        </>
    )
}

export default NavBar