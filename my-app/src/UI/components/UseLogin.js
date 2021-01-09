import {useState} from 'react';

const useLogin = (ValidateInfo) => {
    const [values, setValues] = useState({
        username:'',
        email:"",
        password:'',
        ComfirmPassword:""
        
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

    }
    return{ handleChange, values,handleSubmit, errors}
}

export default useLogin;
