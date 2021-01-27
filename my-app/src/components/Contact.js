import React from 'react';
import { Button } from './Button';

const Contact = () => {
    return (
        <div id='contact'>
            <section className='footer-contact'>
                    <h1 className='contact'>
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
                            <textarea type='textarea'
                            placeholder="Send your message here"
                            className='contact-message'
                            cols='30'
                            rows='10'
                            >
                            </textarea>
                           <div className='subscribe'>
                                <Button 
                                >Send</Button>
                            </div> 
                            
                        </div>
                    
                    </div>
                    
                    
                </section>
        </div>
    )
}

export default Contact
