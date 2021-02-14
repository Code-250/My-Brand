import React, {useContext} from "react";
import {BlogContext} from "../../context/blogContext,";
import AdNavbar from "./AdminNavbar";
import "./adminStyle.css";
import {Button} from "../Button";
import {NavLink} from "react-router-dom";

const Dashboard = () =>{

    const {blogObject} = useContext(BlogContext);

    return(
        <div className="admin-container">
            <AdNavbar/>
            <div className="admin-wrapper">
                <div className="left-sidebar">
                    <ul>
                        <NavLink to="/dashboard" className="active"><li>Manage Blogs</li></NavLink>
                        <NavLink to="/projects"><li>Manage Projects</li></NavLink>
                        <NavLink to="/manage-contacts"><li>Contact Messages</li></NavLink>
                        <NavLink to="/users"><li>Manage Users</li></NavLink>
                    </ul>
                    
                </div>
                <div className="admin-content">
                    <div className="button-group">
                        <NavLink to="/addPost">
                            <Button buttonStyle='btn--outline'
                            className='btn'>
                                Add Blog 
                            </Button>
                        </NavLink>
                        <NavLink to="/">
                            <Button buttonStyle='btn--outline'
                            className='btn'>
                                Manage Blogs
                            </Button>
                        </NavLink>
                    </div>
                    <div className="content">
                        <h2 className="page-title">Manage Posts</h2>
                        <table>
                            <thead>
                                <th>Title</th>
                                <th>Author</th>
                                <th colSpan="3">Action</th>
                            </thead>
                            <tbody>
                                {   
                                    Object.keys(blogObject).map(id=>{
                                        return <tr key={id}>
                                            <td>{blogObject[id].title}</td>
                                            <td>{blogObject[id].author}</td>
                                            <td><NavLink to="/" className="edit">edit</NavLink></td>
                                            <td><NavLink to="/" className="delete">delete</NavLink></td>
                                            <td><NavLink to="/" className="publish">Publish</NavLink></td>
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

export default Dashboard;