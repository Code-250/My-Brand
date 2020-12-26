import React,{useState} from 'react';
import{Link} from 'react-router-dom';
import './Login.css';
import UseLogin from './UseLogin';
import Validate from './ValidateInfo';


const Login = () => {

    const {handleChange, values,handleSubmit,errors}= UseLogin(Validate);

    return (
        <div className='form-content-right'>
            <form className='form' onSubmit={handleSubmit}>
                <h1>Login</h1>
                <div className='form-inputs'>
                    
                        <input type='text'
                        name='username'
                        className='form-input'
                        placeholder=' username'
                        value={values.username}
                        onChange={handleChange}
                        />
                        {errors.username && <p>{errors.username}</p>}
                </div>
                <div className='form-inputs'>
                    
                        <input type='password'
                        name='password'
                        className='form-input'
                        placeholder='password'
                        value={values.password}
                        onChange={handleChange}
                        />
                        {errors.password && <p>{errors.password}</p>}
                    
                </div>
               
                    <button className='form-input-btn'
                    type='submit'>
                        Login
                    </button>
                 
                
                <span classname='form-input-signup'>
                    does not have an account? SignUp<a href='#'>here</a>
                </span>
            </form>
           
        </div>
    )
}

export default Login
