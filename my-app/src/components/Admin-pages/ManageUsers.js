import React, { useState } from "react";
import AdNavbar from "./AdminNavbar";
import {db} from "../../context/firebase";
import "./adminStyle.css";
import {Button} from "../Button";
import {NavLink} from "react-router-dom";

function ManageUser() {
    const [userObjects, setUserObjects] = useState({});
    

    db.collection('Users')
    .get()
    .then(querySnapshot=>{
        const user = querySnapshot.docs.map(doc=> doc.data());
        setUserObjects(user);
    });

    return (

        <div className="admin-container">
            <AdNavbar/>
            <div className="admin-wrapper">
                <div className="left-sidebar">
                    <ul>
                        <NavLink to="/dashboard"><li>Manage Blogs</li></NavLink>
                        <NavLink to="/projects"><li>Manage Projects</li></NavLink>
                        <NavLink to="/manage-contacts"><li>Contact Messages</li></NavLink>
                        <NavLink to="/users"><li>Manage users</li></NavLink>
                    </ul>
                    
                </div>
                <div className="admin-content">
                    <div className="button-group">
                        <NavLink to="/adduser">
                            <Button buttonStyle='btn--outline'
                            className='btn'>
                                Add User
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
                        <h2 className="page-title">Manage Users</h2>
                        <table>
                            <thead>
                                <th>title</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th colSpan="2">Action</th>
                            </thead>
                            <tbody>
                                {
                                    Object.keys(userObjects).map(id=>{
                                        return <tr key={id}>
                                            <td>{userObjects[id].username}</td>
                                            <td>{userObjects[id].email}</td>
                                            <td>{userObjects[id].role}</td>
                                            <td><NavLink to="/updateUsers"
                                            className="edit">edit</NavLink></td>
                                            <td><NavLink to="/" className="delete">delete</NavLink></td>
                                        </tr>
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                 </div>
             </div>
        </div>
    )
}

export default ManageUser;
