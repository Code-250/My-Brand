import{ useState} from 'react'

const UseLogin= Validate =>{
    const [values,setValues]=useState({
        username:'',
        password:''
    })
    const [errors, setErrors]=useState({});
    const[isSubmitting, setIsSubmitting] = useState(false);



    const handleChange = e =>{
        const {name, value}= e.target
        setValues({
            ...values,
            [name]: value
        })
    };
    const handleSubmit = e=>{
        e.preventDefault();

        setErrors(Validate(values));
        setIsSubmitting(true);
    };
    return {handleChange, values,handleSubmit, errors}
}

export default UseLogin;