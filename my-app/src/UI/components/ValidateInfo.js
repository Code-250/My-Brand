export default function Validate (values){
    let errors={}
    // username
    if(!values.username.trim()){
        errors.username='username required'
    }
// password
if (!values.password){
    errors.password="password required"
}else if(values.password.length<8){
    errors.password = "password needs to be 8 characters or more"
}
return errors;
}