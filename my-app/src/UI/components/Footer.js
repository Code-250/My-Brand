import React from 'react'
import '../../App.css';
import { Button } from './Button';
import {Link} from 'react-router-dom';
import '../../App.css';
import Contact from './Contact';


function Footer() {
    return (
        <>
            <div className='footer-container'>
                <section className='footer-subscription'>
                    <h1 className='footer-subscription-heading'>
                        Join us to see more projects and Blogs!!
                    </h1>
                    <p className='subscription-text'>
                        you can unsubscribe at any time.
                    </p>
                    <div className="input-areas">
                        <form>
                            <input 
                            type='email'
                            placeholder='your email'
                            className='footer-input'
                            />
                            <Button buttonStyle='btn--outline'id='Subscribe'>Subscribtion</Button>
                        </form>
                    </div>
                </section>
                <Contact/>
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
                <div className="icons">
                    
                </div>
            </div>
        </>
    )
}

export default Footer
