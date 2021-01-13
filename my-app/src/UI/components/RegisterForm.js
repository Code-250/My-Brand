import React from "react";
import useLogin from "./useLogin";
import ValidateInfo from "./ValidateInfo";
import {Link} from "react-router-dom";
import "../../App.css"

const Signup= ()=>{
    const { handleChange, values,handleSubmit,errors} =useLogin(ValidateInfo)
    return(
        <div className="form-content-right register">
            <form className='form' onSubmit={handleSubmit}>
                <h1 className="login-header">Register</h1>

                <div className="form-inputs">
                <input 
                        id='email'
                        type='email'
                        name='email'
                        className='form-input'
                        placeholder=' Email Address'
                        value={values.email}
                        onChange={handleChange}
                        />
                        {errors.email && <p>{errors.email}</p>}
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
                <div className='form-inputs'>
                    
                        <input 
                        id='comfirm-password'
                        type='password'
                        name='comfirm-password'
                        className='form-input'
                        placeholder='comfirm-password'
                        value={values.CmfirmPassword}
                        onChange={handleChange}
                        />
           
                        {errors.ComfirmPassword && <p>{errors.ComfirmPassword}</p>}
                </div>
               
                    <button className='form-input-btn'
                        type='submit'>
                            Register
                        </button>
            
                 
                
                <span classname='form-input-signup'>
                    Already have an Account? <Link to='/Login'>login</Link>
                </span>
            </form>
        </div>
    )
}

export default Signup;