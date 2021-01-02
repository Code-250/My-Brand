import React from 'react';
import '../../App.css';
import {Button} from './Button';
import '../../App.css'

function HelloSection(){
    return(
        <section className='Home-container'>     
                <div className='header'>
                    <h1 className='greetings'>
                        Hello, <br />
                        I'am <span>Richard Munyemana</span><br />Fullstack Developer
                    </h1>
                    <div id='button-btn'>
                            
                        <Button className='btns'
                            buttoStyle='btn--primary'
                              buttonSize='btn--large'
                             >
                             GET IN TOUCH
                        </Button>          
                            
                    </div>
                </div>        
            <img src='/images/PROFILE.JPG'alt='background'className='profile'/>
                
               
        </section>
    )
}

export default HelloSection;