import React, {useState} from 'react'
import {Link} from 'react-router-dom'

import Login from './Login';

import Home from '../../Home'


const Form = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    function submitForm(){
        setIsSubmitted(true);
    }
    return (
        <div>
            
            { !isSubmitted ? <Login submitForm={submitForm }/> : <Home/>}
        </div>
    )
}

export default Form
