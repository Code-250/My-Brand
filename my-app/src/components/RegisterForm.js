import React, { useCallback} from 'react'
import {Form, Button, Card} from  "react-bootstrap"
import {Link} from "react-router-dom"
import {app} from '../context/firebase';
import {withRouter} from "react-router-dom";

 const SignUp = ({history}) => {

     const handleSubmit = useCallback(async e =>{
         e.preventDefault();
         const {email,password} =e.target.elements;
         try{
            await app
                .auth()
                .createUserWithEmailAndPassword(email.value, password.value);
            history.push("/")

        }catch (error){
            alert(error);
        }
    }, [history]);
    // 
    return (
        <>
            
            <Card style={{width:"80%"}}>
                <Card.Body style={{backgroundColor: '#212529'}}>
                    <h2 className="text-center mb-4">Sign Up</h2>
                    <Form className="align-items-center"onSubmit={handleSubmit}>
                        <Form.Group>
                            
                        <Form.Control 
                        style={{width:"120%"}}
                        id="email"
                        name="email"
                        type="email" 
                        placeholder="Email" 
                        required/>
                        </Form.Group>
                        <Form.Group>
                        <Form.Control 
                        style={{width:"120%"}}
                        id="password"
                        password="password"
                        type="password"  
                        placeholder="Password"
                         required/>
                        </Form.Group>
                        <Form.Group>
                        <Form.Control 
                        style={{width:"120%"}}
                        id="password-comfirm"
                        type="password"
                        placeholder="Comfirm passwrd"
                        required/>
                        </Form.Group>
                        <Button style={{border:'none',width:"30%",backgroundColor:"black", marginLeft:'2rem'}}
                        
                        type="submit">Sign Up</Button>
                    </Form>
                    <div className="w-100 text-center mt-2" style={{color:"white"}}>
                        already have an account?<Link to="/login">Log In</Link> 
                    </div>
                </Card.Body>
            </Card>
        </>
    )
}
export default withRouter(SignUp);