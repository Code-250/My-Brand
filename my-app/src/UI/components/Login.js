import React from 'react'

import UseLogin from './UseLogin'

const Login = () => {

    const {handleChange, values,handleSubmit }= UseLogin()

    return (
        <div className='form-content-right'>
            <form className='form' onSubmit={handleSubmit}>
                <h1>Login</h1>
                <div className='form-inputs'>
                    
                        <input type='text'
                        name='username'
                        className='form-input'
                        placeholder='Enter your username'
                        value={values.username}
                        onChange={handleChange}
                        />
                    
                </div>
                <div className='form-inputs'>
                    
                        <input type='password'
                        name='password'
                        className='form-input'
                        placeholder='Enter your password'
                        value={values.password}
                        onChange={handleChange}
                        />
                    
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
