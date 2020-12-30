const ValidateInfo = (Values) => {
    let errors = {}

    if (!Values.username){
        errors.username='username Required'
    }
    // password
    if(!Values.password){
        errors.password ='password Required'
    }else if(Values.password.length <8){
        errors.password = 'password requires at least 8 characters'
    }
    return errors
}

export default ValidateInfo
