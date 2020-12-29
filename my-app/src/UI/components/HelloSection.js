import React from 'react';
import '../../App.css';
import {Button} from './Button';
import {Link} from 'react-router-dom';
import './HelloSection.css'

function HelloSection(){
    return(
        <div className='Hello-container'>
            <div className='wrapper'>
                
                <div className='intro'>
                    
                    <p className='hey'>
                        <b>Hey There, I'm Richard</b>
                        A web developer & a designer at the same time
                        from Kigali Rwanda, I create best websites to  help people 
                        enjoy being online.
                    </p>
                 <div id='button-btn'>
                    
                            <Button className='btns'
                                    buttoStyle='btn--primary'
                                    buttonSize='btn--large'
                                    >
                                        GET IN TOUCH
                            </Button>  
                        
                </div>
                    
                    
                    
                </div>
                
                <img src='/images/PROFILE.JPG'alt='background'className='profile'></img>
                    
            </div> 
               
        </div>
    )
}

export default HelloSection;