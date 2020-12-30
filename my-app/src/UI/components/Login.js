import React from 'react';
import './Login.css';
import useLogin from './useLogin';
import ValidateInfo from './ValidateInfo';


const Login = () => {

    const { hangleChange, Values,handleSubmit,errors} =useLogin(ValidateInfo)

    return (
        <div className='form-content-right'>
            <form className='form' onSubmit={handleSubmit}>
                <h1>Login</h1>
                <div className='form-inputs'>
                    
                        <input 
                        id='username'
                        type='text'
                        name='username'
                        className='form-input'
                        placeholder=' username'
                        Value={Values.username}
                        onChange={hangleChange}
                        />
                 {errors.username &&  <p>{errors.username}</p>}
                </div>
                <div className='form-inputs'>
                    
                        <input 
                        id='password'
                        type='password'
                        name='password'
                        className='form-input'
                        placeholder='password'
                        Value={Values.password}
                        onChange={hangleChange}
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
