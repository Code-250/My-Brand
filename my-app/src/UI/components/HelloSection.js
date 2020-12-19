import React from 'react'
import './HelloSection'
import '../../App.css';
import {Button} from './Button';
import './HelloSection.css'

function HelloSection(){
    return(
        <div className='Hello-container'>
            <div className='wrapper'>
                <div>
                    <p className='hey'>Hellooo!!! I am afull stack web developer & a web designer at the same 
                    got a project to work on </p>
                    <Button className='btns'
                            buttoStyle='btn--primary'
                            buttonSize='btn--large'
                            >
                                GET IN TOUCH
                    </Button>  

                </div>
                
                    <img src='/images/PROFILE.JPG'alt='background'></img>
                    
            </div> 
               
        </div>
    )
}

export default HelloSection;