import React from 'react';
import {Button} from './Button';
import '../App.css';
import { Link } from 'react-scroll/modules';

function HelloSection(){
    return(
        <section className='Home-container' id='home'>     
                <div className='header'>
                    <h1 className='greetings'>
                        Hello, <br />
                        I'am <span>Richard Munyemana</span>Fullstack Developer
                    </h1>
                    <div id='button-btn'>
                        <Link to='contact'
                            activeClass='active'
                            spy={true}
                            smooth={true}
                            offset={-130}
                            duration={500}>
                            <Button className='btns'
                                    buttoStyle='btn--primary'
                                    buttonSize='btn--large'
                                    >
                                    GET IN TOUCH
                            </Button>
                        </Link>
                            
                            
                                
                            
                    </div>
                </div>        
            <img src='/images/PROFILE.JPG'alt='background'className='profile'/>
                
               
        </section>
    )
}

export default HelloSection;