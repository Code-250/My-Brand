import React,{useCallback,useContext} from 'react';
import {Redirect, withRouter} from "react-router"
import {Form, Button, Card} from  "react-bootstrap";
import app from "../context/firebase";
import {Link} from "react-router-dom";
import {AuthContext} from "../context/context"
     

const Login = ({history}) => {

    const handleLogin =useCallback(
        async e =>{
            e.preventDefault();
            const{email, password} =e.target.elements;
            try{
                await app
                    .auth()
                    .signInWithEmailAndPassword(email.value,password.value);
                history.push("/login");

            }catch (error){
                alert(error);
            }
        },[history]
    );

    const {currentUser} = useContext(AuthContext);

    if(currentUser){
        return <Redirect to="/dashboard"/>;
    }

    // const emailRef= useRef();
    //  const passwordRef= useRef();

     return (
        <>
        <Card style={{width:"80%"}}>
            <Card.Body style={{backgroundColor: '#212529'}}>
                <h2 style={{color:"white"}} className="text-center mb-4">Log In</h2>
                <Form className="align-items-center"onSubmit={handleLogin}>
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
                    name="password"
                    type="password"  
                    placeholder="Password"
                    required/>
                    </Form.Group>

                    <Button style={{border:'none',width:"30%",backgroundColor:"black", marginLeft:'2rem'}}
                    
                    type="submit">Log In</Button>
                </Form>
                <div className="w-100 text-center mt-2" style={{color:"white"}}>
                    Does not have an account? <Link to="/signup">Sign Up</Link>
                </div>
            </Card.Body>
        </Card>
        
    </>
    )
        
}

export default withRouter(Login);
