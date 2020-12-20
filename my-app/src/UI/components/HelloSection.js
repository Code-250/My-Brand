import React from 'react'
import './HelloSection'
import '../../App.css';
import {Button} from './Button';
import './HelloSection.css'

function HelloSection(){
    return(
        <div className='Hello-container'>
            <div className='wrapper'>
                
                <div >
                    
                    <p className='hey'>
                        <b>Hey There, I'm Richard</b><br></br>
                        A web developer & a designer at the same time
                     from Kigali Rwanda, I create best websites to  help people 
                     enjoy being online.</p>
                    <Button className='btns'
                            buttoStyle='btn--primary'
                            buttonSize='btn--large'
                            >
                                GET IN TOUCH
                    </Button>  
                    
                </div>
                
                <img src='/images/PROFILE.JPG'alt='background'className='profile'></img>
                    
            </div> 
               
        </div>
    )
}

export default HelloSection;