import AdNavbar from "./AdminNavbar";
import "./adminStyle.css";
import {Button} from "../Button";
import {NavLink} from "react-router-dom"

function CreateUser(){
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
                                <label>UserName :</label>
                                <input type="text" name="username" className="text-input"/>
                            </div>
                            <div className="add-post-title">
                                <label>Email :</label>
                                <input type="email" name="email" className="text-input"/>
                            </div>
                            <div className="add-post-title">
                                <label>Password :</label>
                                <input type="password" name="password" className="text-input"/>
                            </div>
                            <div className="add-post-title">
                                <label>Password Comfirmation :</label>
                                <input type="password" name="passwordComfirm" className="text-input"/>
                            </div>
                            <div className="add-post-title">
                                <label>Role :</label>
                                <select name="role" className="text-input">
                                    <option value="Admin">Admin</option>
                                    <option value="Author">Author</option>
                                    <option value="Supervisor">Supervisor</option>
                                </select>
                            </div>
                            <div>
                                <NavLink to="/">
                                    <Button buttonStyle='btn--outline'
                                    className='btn'>
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