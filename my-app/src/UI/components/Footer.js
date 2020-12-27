import React from 'react'
import '../../App.css';
import { Button } from './Button';
import {Link} from 'react-router-dom';
import './Footer.css';


function Footer() {
    return (
        <>
            <div className='footer-container'>
                <section className='footer-subscription'>
                    <h1 className='footer-subscription-heading'>
                        Have a new project to work on 
                    </h1>
                    <p>
                        you can unsubscribe at any time.
                    </p>
                    <div className="input-areas">
                        <form>
                            <input 
                            type='email'
                            placeholder='your email'
                            className='footer-input'
                            />
                            <Button buttonStyle='btn--outline'className='Subscribe'>Subscribtion</Button>
                        </form>
                    </div>
                </section>
                <section className='footer-contact'>
                    <h1>
                        CONTACT US
                    </h1>
                    <div className='contact-container'>
                        <div className='contact-wrapper'>
                            <form classNane='form'>
                                <input type='text'
                                placeholder="your Full Name"
                                className='contact-input'/>
                                <input type='email'
                                placeholder="your email"
                                className='contact-input'/>
                            </form>
                        </div>
                        <div className='message'>
                            <input type='text'
                            placeholder="Send your message here"
                            className='contact-message'/>
                            <Button buttonStyle='btn--outline'
                            className='Subscribe'
                            >Send</Button>
                            
                        </div>
                    
                    </div>
                    
                    
                </section>
                <div className='footer-links'>
                    <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                            <h2>Projects</h2>
                            <Link to='/'>Want to try this </Link>
                            <Link to='/'>What are we capable of?</Link>
                            <Link to='/'>Work with us</Link>
                            <Link to='/'>Who is </Link>
                        </div>
                        <div className='footer-link-items'>
                            <h2>About Us</h2>
                            <Link to='/About'>Who is this guy?</Link>
                            <Link to='/'>What are we capable of?</Link>
                            <Link to='/'>Work with us</Link>
                            <Link to='/'>Who is </Link>
                        </div>
                        
                    </div>
                    <div className='footer-link-wrapper'>
                        
                        <div className='footer-link-items'>
                            <h2>Contact Us</h2>
                            <Link to='/Projects'>Contact</Link>
                            <Link to='/'>Drop an idea and inquiries</Link>
                            <Link to='/'>Work with us</Link>
                            <Link to='/'>Who is </Link>
                        </div>
                        <div className='footer-link-items'>
                            <h2>Social Media</h2>
                            <Link to='/'>Facebook</Link>
                            <Link to='/'>Twitter</Link>
                            <Link to='/'>Instagram</Link>
                            <Link to='/'>Linked In</Link>
                        </div>
                    </div>
                </div>
                <section className='social-media'>
                    <div className='social-media-wrap'>
                    <small className='website-rights'>no copyright reserved</small>
                        <div className='social-icons'>
                            
                        </div>
                    
                    </div>
                    
                </section>
                
            </div>
        </>
    )
}

export default Footer
