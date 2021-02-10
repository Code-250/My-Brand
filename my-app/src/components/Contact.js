import React,{ useState }from 'react';
import { Button } from './Button';
import "./Admin-pages/adminStyle.css";

const Contact = ({addContact}) => {
    const initialfieldValues={
        fullName:"",
        email:"",
        message:""
    }
    const [fullNameErrors, setfullNameErrors] = useState('');
    const [emailErrors, setEmailErrors] = useState('');
    const [messageErrors, setMessageErrors] = useState('');
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
        if(values.fullName.length >= 3 && values.email.length >=2 && values.message.length >=8){
            addContact(values);
            setValues(initialfieldValues);
        } else{
            if(!values.fullName.trim()){
                setfullNameErrors("Username is required") 
            }
        
            // emaill
        
            if(!values.email){
                setEmailErrors("Email required")
            } else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[1-z]{2,}$/i.test(values.email)){
                setEmailErrors("Email address is invalid")
            }
            //  message

            if(!values.message){
                setMessageErrors('fill this field to send message')
            }
            
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
                                {fullNameErrors && <p className="errors">{fullNameErrors}</p>}
                                <input 
                                type='email'
                                name="email"
                                placeholder="your email"
                                className='contact-input'
                                value={values.email}
                                onChange={changeHandler}
                                />
                                {emailErrors && <p className="errors">{emailErrors}</p>}
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
                            />
                            {messageErrors && <p className="errors">{messageErrors}</p>}
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
