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
                    <div classname="menu-icons" onClick={handleClick}>
                        <i class Name={click ? 'fas fa-times' : 'fas fa-bars'}/>
                    </div>
                    <ul className={click ?'nav-menu-active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' classname="nav-links" onClick={closeMobileMenu}>
                               <p className="change">HOME</p> 
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/Projects' classname="nav-links" onClick={closeMobileMenu}>
                           <p className='change'>PROJECTS</p>
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="/About" classname="nav-links" onClick={closeMobileMenu}>
                            <p className='change'>ABOUT ME</p>
                            </Link>
                        </li>
                         <li className='nav-item'>
                            <Link to='/Blogs' classname="nav-links" onClick={closeMobileMenu}>
                            <p class='change'>BLOGS</p>
                            </Link> 
                         </li>
                    </ul>
                    {button && <Button buttonStyle='btn--outline'>Login</Button>}
                    
                    
                </div>
            </nav>
        </>
    )
}

export default NavBar