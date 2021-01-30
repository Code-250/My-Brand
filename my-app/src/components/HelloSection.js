import React from 'react';
import {Button} from './Button';
import '../App.css';
import { Link } from 'react-scroll/modules';

function HelloSection(){
    return(
        <section className='Home-container' id='home'>     
                <div className='header'>
                    <h1 className='greetings'>
                        Hello, 
                        I'am <span>Richard Munyemana</span>Fullstack Developer
                    </h1>
                        <Link to='contact'
                        className="btn"
                            activeClass='active'
                            spy={true}
                            smooth={true}
                            offset={-130}
                            duration={500}>
                                <Button >
                                    GET IN TOUCH
                                </Button>
                            
                        </Link>
                </div>        
            <img src='/images/PROFILE.JPG'alt='background'className='profile'/>
                
               
        </section>
    )
}

export default HelloSection;