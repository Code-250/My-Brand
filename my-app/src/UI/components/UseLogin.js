import {useState} from 'react';
import axios from "axios"

const useLogin = (ValidateInfo) => {
    const [values, setValues] = useState({
        firstName:'',
        lastName:"",
        email:"",
        password:'',
    password_comfirm:""
        
    });
    
    const  [errors, setErrors] = useState({})

    const handleChange = e=>{
        const {name,value} =e.target
        setValues({
            ...values,
            [name]:value  
        });
        
    };
    const handleSubmit =e=>{
        e.preventDefault();
        setErrors(ValidateInfo(values));

        axios.post("http://localhost:8000/signup",values).then(
            response=>{
                console.log(response)
            }
        ).catch(
            err=>{
                console.log(err);
            }
        )
        
    }
    return{ handleChange, values,handleSubmit, errors}
}

export default useLogin;
