import React,{ useRef} from 'react'
import {Form, Button, Card} from  "react-bootstrap"

 const SignUp = () => {
     const emailRef= useRef();
     const passwordRef= useRef();
     const passwordComfirmRef= useRef();
    return (
        <Card>
            <Card.Body style={{backgroundColor: '#212529'}}>
                <h2 className="text-center mb-4">Sign Up</h2>
                <Form>
                    <Form.Group>
                        
                        <Form.Control 
                        id="email"
                        type="email" 
                        placeholder="Email" 
                        ref={emailRef} required/>
                    </Form.Group>
                    <Form.Group>
                    <Form.Control 
                    id="password"
                    type="password"  
                    placeholder="Password"
                    ref={passwordRef} required/>
                    </Form.Group>
                    <Form.Group>
                    <Form.Control 
                    id="password-comfirm"
                    type="password"
                     placeholder="Comfirm passwrd"
                      ref={passwordComfirmRef}
                       required/>
                    </Form.Group>
                    <Button style={{backgroundColor:"black"},{border:'none'}}
                    className ="w-100"
                    type="submit">Sign Up</Button>
                </Form>
            </Card.Body>
        </Card>
    )
}
export default SignUp;