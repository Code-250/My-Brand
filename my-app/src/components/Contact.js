import React,{ useState }from 'react';
import { Button } from './Button';

const Contact = ({addContact}) => {
    const initialfieldValues={
        fullName:"",
        email:"",
        message:""
    }

    const [values, setValues] = useState(initialfieldValues);

    const changeHandler =(e)=>{
        const {name, value} = e.target;
        setValues({
            ...values,
            [name] : value
        })
    }
    const handleClick =(e)=>{
        e.preventDefault();
        if(values.length !== 0){
            addContact(values);
            setValues(initialfieldValues);
        } else{
            console.log("error")
        }
            
        
    }
    
    return (
        <div id='contact'>
            <section className='footer-contact'>
                    <h1 className='contact'>
                        CONTACT US
                    </h1>
                    <form className='contact-container'>
                        <div className='contact-wrapper'>
                            <form classNane='form'>
                                <input 
                                type='text'
                                name="fullName"
                                placeholder="your Full Name"
                                className='contact-input'
                                value={values.fullName}
                                onChange={changeHandler}/>
                                <input 
                                type='email'
                                name="email"
                                placeholder="your email"
                                className='contact-input'
                                value={values.email}
                                onChange={changeHandler}
                                />
                            </form>
                        </div>
                        <div className='message'>
                            <textarea 
                            type='textarea'
                            name="message"
                            placeholder="Send your message here"
                            className='contact-message'
                            value={values.message}
                                onChange={changeHandler}
                            >
                            </textarea>
                           <div className='send-message'>
                                <Button onClick={handleClick}>
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
