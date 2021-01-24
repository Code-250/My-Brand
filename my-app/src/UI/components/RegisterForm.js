import React,{ useRef} from 'react'
import {Form, Button, Card} from  "react-bootstrap"
import {useAuth} from "../../context/context";
 const SignUp = () => {
     const emailRef= useRef();
     const passwordRef= useRef();
     const passwordComfirmRef= useRef();

     const {signUp} = useAuth()

     function handleSubmit(e){
         e.preventDefault()

         signUp(emailRef.current.value,passwordRef.current.value)
     }
    return (
        <>
            <Card style={{width:"80%"}}>
                <Card.Body style={{backgroundColor: '#212529'}}>
                    <h2 className="text-center mb-4">Sign Up</h2>
                    <Form className="align-items-center">
                        <Form.Group>
                            
                        <Form.Control 
                        style={{width:"120%"}}
                        id="email"
                        type="email" 
                        placeholder="Email" 
                        ref={emailRef} required/>
                        </Form.Group>
                        <Form.Group>
                        <Form.Control 
                        style={{width:"120%"}}
                        id="password"
                        type="password"  
                        placeholder="Password"
                        ref={passwordRef} required/>
                        </Form.Group>
                        <Form.Group>
                        <Form.Control 
                        style={{width:"120%"}}
                        id="password-comfirm"
                        type="password"
                        placeholder="Comfirm passwrd"
                        ref={passwordComfirmRef}
                        required/>
                        </Form.Group>
                        <Button style={{border:'none',width:"30%",backgroundColor:"black", marginLeft:'2rem'}}
                        
                        type="submit">Sign Up</Button>
                    </Form>
                    <div className="w-100 text-center mt-2" style={{color:"white"}}>
                        already have an account? Log In
                    </div>
                </Card.Body>
            </Card>
            
        </>
    )
}
export default SignUp;