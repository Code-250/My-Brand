import React, {useState} from "react";
import AdNavbar from "./AdminNavbar";
import "./adminStyle.css";
import {db} from "../../context/firebase";
import {Button} from "../Button";
import {NavLink} from "react-router-dom"

function CreateUser(){

    const AddUser =(owners)=>{
        db.collection('Users').set(
            owners,
            err=>{
                if(err){
                    console.log(err)
                }
            }
        )
    }
    

    const initialUserValues = {
        username:"",
        email:"",
        password:"",
        passwordConfirm:"",
        role:""
    }


    const [nameErrors, setNameErrors] = useState('');
    const [emailErrors, setEmailErrors] = useState('');
    const [passwordErrors, setPasswordErrors] = useState('');
    const [passwordConfErrors, setPasswordConfErrors] = useState('')
    const [roleError, setRoleError] = useState('');
    const [users, setUsers] = useState(initialUserValues);

    const changeHandler = (e)=>{
        const {name,value} = e.target;
            setUsers({
                ...users,
                [name]:value,
            })
    }
    const handleClick = (e) =>{
        e.preventDefault();
        if(users.username.length >=3 && users.email.length >=5 && users.password.length >=6){
            if(users.password === users.passwordConfirm){
                AddUser(users);
                setUsers(initialUserValues)
            }else{
                if(users.password !== users.passwordConfirm){

                }
            }
            
        } else{
            if(!users.username.trim()){
                setNameErrors("Username is required") 
            }
        
            // emaill
        
            if(!users.email){
                setEmailErrors("Email required")
            } else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[1-z]{2,}$/i.test(users.email)){
                setEmailErrors("Email address is invalid")
            }

            // password

            if(!users.password){
                setPasswordErrors("password is required")
            } else if(users.password.length < 6 ){
                setPasswordErrors("password needs to be atleast 6 characters")
            }
            // password Confirm

            if(!users.passwordConfirm){
                setPasswordConfErrors('password needed')
            }
            // role
            if(users.role.length < 4){
                setRoleError("this field should be filled")
            }
        }
    }
    return(
        <div className="admin-container">
            <AdNavbar/>
            <div className="admin-wrapper">
                <div className="left-sidebar">
                    <ul>
                        <NavLink to="/dashboard"><li>Manage Blogs</li></NavLink>
                        <NavLink to="/projects"><li>Manage Projects</li></NavLink>
                        <NavLink to="/manage-contacts"><li>Contact Messages</li></NavLink>
                        <NavLink to="/users"><li>Manage Users</li></NavLink>
                    </ul>
                    
                </div>
                <div className="admin-content">
                    <div className="button-group">
                        <NavLink to="/users">
                            <Button buttonStyle='btn--outline'
                            className='btn'>
                                Users 
                            </Button>
                        </NavLink>
                        <NavLink to="/">
                            <Button buttonStyle='btn--outline'
                            className='btn'>
                                Manage Users
                            </Button>
                        </NavLink>
                    </div>
                    <div className="content">
                        <h2 className="page-title">Add User</h2>
                        <form method="post">
                            <div className="add-post-title">
                                <label>UserName *:</label>
                                <input type="text" name="username"
                                 className="text-input"
                                 value={users.username}
                                 onChange={changeHandler}/>
                                 {nameErrors && <p className="user-errors">{nameErrors}</p>}
                            </div>
                            <div className="add-post-title">
                                <label>Email *:</label>
                                <input type="email" name="email" 
                                className="text-input"
                                value={users.email}
                                onChange={changeHandler}/>
                                {emailErrors && <p className="user-errors">{emailErrors}</p>}
                            </div>
                            <div className="add-post-title">
                                <label>Password *:</label>
                                <input type="password" name="password" 
                                className="text-input"
                                value={users.password}
                                onChange={changeHandler}/>
                                {passwordErrors && <p className="errors">{passwordErrors}</p>}
                            </div>
                            <div className="add-post-title">
                                <label>Password Comfirmation *:</label>
                                <input type="password" name="passwordConfirm"
                                 className="text-input"
                                 value={users.passwordComfirm}
                                 onChange={changeHandler}/>
                                 {passwordConfErrors && <p className="user-errors">{passwordConfErrors}</p>}
                            </div>
                            <div className="add-post-title">
                                <label>Role *:</label>
                                <input type="text" name="role"
                                 className="text-input"
                                 value={users.role}
                                 onChange={changeHandler}/>
                                 {roleError && <p className="user-errors">{roleError}</p>}
                            </div>
                            <div>
                                <NavLink to="/">
                                    <Button buttonStyle='btn--outline'
                                    className='btn'
                                    onClick={handleClick}>
                                    Add User 
                                    </Button>
                                </NavLink>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>  
    )
}

export default CreateUser;