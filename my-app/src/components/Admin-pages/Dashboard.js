import React, {useState} from "react";
import {db} from "../../context/firebase";
import AdNavbar from "./AdminNavbar";
import "./adminStyle.css";
import {Button} from "../Button";
import {NavLink} from "react-router-dom";

const Dashboard = () =>{

    const [blogObjects, setBlogObjects] = useState({});

    db.collection('blogs')
    .get()
    .then(querySnapshot=>{
        const post = querySnapshot.docs.map(doc=> doc.data());
        setBlogObjects(post);
    });

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
                                    Object.keys(blogObjects).map(id=>{
                                        return <tr key={id}>
                                            <td>{blogObjects[id].title}</td>
                                            <td>{blogObjects[id].author}</td>
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