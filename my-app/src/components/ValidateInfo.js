export default function ValidateInfo  (values)  {
    let errors ={};

    if(!values.email){
        errors.email ="email Address invalid"
    }
    if (!values.password){
     errors.password = 'password Required'
    }else if(values.password.length <8){
        errors.password ='password should be at least 8 characters.'
    }
     if(values.password !== values.password_comfirm){
        errors.password_comfirm="Password does not match"
    }
    return errors;
}

