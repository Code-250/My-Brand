export default function ValidateInfo  (values)  {
    let errors ={};

    if(!values.username.trim()){
        errors.username ='username Required'
    }
    if (!values.password){
     errors.password = 'password Required'
    }else if(values.password.length <8){
        errors.password ='password should be at least 8 characters.'
    }
    return errors;
}

