export default function ValidateInfo  (values)  {
    let errors ={};

    if(!values.username.trim()){
        errors.username ='username Required'
    }
    if(!values.email){
        errors.email ="email Address invalid"
    }
    if (!values.password){
     errors.password = 'password Required'
    }else if(values.password.length <8){
        errors.password ='password should be at least 8 characters.'
    }
     if(values.password !== values.ComfirmPassword){
        errors.ComfirmPassword="Password does not match"
    }
    return errors;
}

