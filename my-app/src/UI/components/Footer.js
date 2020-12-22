import React from 'react'
import '../../App.css';
import { Button } from './Button';
import './Footer.css'

function Footer() {
    return (
        <div className='footer-container'>
            <section className='footer-subscription'>
                <h1 className='footer-subscription-heading'>
                    Have a new project to work on 
                </h1>
                <div className="input-areas">
                    <form>
                        <input 
                         type='email'
                         placeholder='your email'
                         className='footer-input'
                         />
                         <Button buttonStyle='btn--outline'>Subscribtion</Button>
                    </form>
                </div>
            </section>
            <div className='footer-links'>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>About Us</h2>
                        

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
