import React,{useState} from 'react';
import '../../App.css';
import {Link, Redirect} from 'react-router-dom';
import {Route} from "react-router-dom";
import useLogin from './useLogin';
import ValidateInfo from './ValidateInfo';
import Signup from "./RegisterForm";
import { useAuth} from "../../context/context";
import axios from "axios";


const Login = () => {
    const { handleChange, values,handleSubmit,errors} =useLogin(ValidateInfo);

    return (
        <div className='form-content-right'>
            <form className='form' onSubmit={handleSubmit}>
                <h1 className="login-header">Login</h1>
                <div className='form-inputs'>
                    
                        <input 
                        id='username'
                        type='text'
                        name='username'
                        className='form-input'
                        placeholder=' username'
                        value={values.username}
                        onChange={handleChange}
                        />
                        {errors.username && <p>{errors.username}</p>}
                </div>
                <div className='form-inputs'>
                    
                        <input 
                        id='password'
                        type='password'
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
                    does not have an account? SignUp<Link to ='/signup'>here</Link>
                </span>
            </form>
        </div>
    )
}

export default Login
