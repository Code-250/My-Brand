import React, {useState} from 'react';
import { Button } from './Button';

const Contact = () => {

    const initialFieldValues ={
        fullName:"",
        email:"",
        message:""
    }

    const [values, setValues] = useState(initialFieldValues);

    const handleChange =(e)=>{
        const {name, value} =e.target
        setValues({
            ...values,
            [name]: value
        })
    }
    const handleSubmit =(e)=>{
        e.preventDefault()
    }
    return (
        <div id='contact'>
            <section className='footer-contact'>
                    <h1 className='contact'>
                        CONTACT US
                    </h1>
                    <form className='contact-container' onSubmit={handleSubmit}>
                        <div className='contact-wrapper'>
                            <form classNane='form'>
                                <input 
                                type='text'
                                name="fullName"
                                placeholder="your Full Name"
                                className='contact-input'
                                values={values.fullName}
                                onChange={handleChange}/>
                                <input 
                                type='email'
                                name="email"
                                placeholder="your email"
                                className='contact-input'
                                values={values.email}
                                onChange={handleChange}
                                />
                            </form>
                        </div>
                        <div className='message'>
                            <textarea 
                            type='textarea'
                            name="message"
                            placeholder="Send your message here"
                            className='contact-message'
                            values={values.message}
                            onChange={handleChange}
                            >
                            </textarea>
                           <div className='send-message'>
                                <Button>
                                    Send
                                </Button>
                            </div> 
                            
                        </div>
                    
                    </form>
                    
                    
                </section>
        </div>
    )
}

export default Contact
