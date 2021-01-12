import React, {useState, useEffect} from 'react'
import {NavLink, withRouter} from 'react-router-dom';
import {Button} from "./Button";
import '../../App.css';




function NavBar ({history}){
    const isAuth =!!localStorage.getItem("token");
    const loginUser =()=>{
        localStorage.setItem("token", "some-login-token");
        history.push("/Login");
    };
    const logoutUser =()=>{
        localStorage.removeItem("token");
        history.push("/");
    }

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
                                <NavLink to='/projects' 
                                activeClass='active'
                                spy={true}
                                smooth={true}
                                offset={-130}
                                duration={500}
                                className="nav-links" onClick={closeMobileMenu}>
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
                                className="nav-links" onClick={closeMobileMenu}>
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
                                    className="nav-links" onClick={closeMobileMenu}>
                                    <p className='change'>Dashboard</p>
                                </NavLink>
                            </li>
                            <li className='nav-items'>
                                <NavLink to="/contact"
                                    activeClass='active'
                                    spy={true}
                                    smooth={true}
                                    offset={-130}
                                    duration={500} 
                                    className="nav-links" onClick={closeMobileMenu}>
                                    <p className='change'>Contact</p>
                                </NavLink>
                            </li>
                            <Button buttonStyle='btn--outline' className='btn'>
                            
                                 { !isAuth? (<label
                                       onClick={loginUser}>Login</label>)
                                    
                                   :(<label 
                                    onClick={logoutUser}>Logout</label>
                                    
                                   )}
                                
                                
                            </Button> 
                        </ul>
                    </div>
                    
                   
            </nav>
        </>
    )
}

export default withRouter(NavBar);