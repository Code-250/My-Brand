import {useState} from 'react';

const useLogin = (ValidateInfo) => {
    const [Values, setValues] = useState({
        username:'',
        password:''
    })
    const  [errors, setErrors] = useState({})

    const handleChange = e=>{
        const {name,Value} =e.target
        setValues({
            
            ...Values,
            [name]:Value 
        });
        
    };
    const handleSubmit =e=>{
        e.preventDefault();
        setErrors(ValidateInfo(Values))
    }
    return{ handleChange, Values,handleSubmit, errors}
}

export default useLogin;
