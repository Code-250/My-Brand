import React,{useRef} from 'react';
import {Form, Button, Card} from  "react-bootstrap"

     

const Login = () => {

    const emailRef= useRef();
     const passwordRef= useRef();

     return (
        <>
        <Card style={{width:"80%"}}>
            <Card.Body style={{backgroundColor: '#212529'}}>
                <h2 style={{color:"white"}} className="text-center mb-4">Log In</h2>
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

                    <Button style={{border:'none',width:"30%",backgroundColor:"black", marginLeft:'2rem'}}
                    
                    type="submit">Log In</Button>
                </Form>
                <div className="w-100 text-center mt-2" style={{color:"white"}}>
                    Does not have an account? Sign Up
                </div>
            </Card.Body>
        </Card>
        
    </>
    )
        
}

export default Login
