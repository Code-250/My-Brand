import React,{useState} from "react";
import "./contactMessage.css";
import AdNavbar from "./AdminNavbar";
import {Button} from "../Button";
import {db} from "../../context/firebase";
import {NavLink} from "react-router-dom"

const ManageContacts = () =>{

    const [contactObjects, setContactObject] = useState({})
    
    db.collection('contacts')
    .get()
    .then(querySnapshot =>{
        const data = querySnapshot.docs.map(doc=> doc.data());
        setContactObject(data);
    }); 

    return(
        <div className="admin-container">
            <AdNavbar/>
             <div className="admin-wrapper">
                 <div className="left-sidebar">
                    <ul>
                        <NavLink to="/dashboard"><li>Manage Blogs</li></NavLink>
                        <NavLink to="/projects"><li>Manage Projects</li></NavLink>
                        <NavLink to="/manage-contacts"className="active"><li>Contact Messages</li></NavLink>
                        <NavLink to="/users"><li>Manage Users</li></NavLink>
                    </ul>
                    
                 </div>
                 <div className="admin-content">
                    <div className="button-group">
                        <NavLink to="/">
                            <Button buttonStyle='btn--outline'
                            className='btn'>
                                Mark as Read 
                            </Button>
                        </NavLink>
                        <NavLink to="/">
                            <Button buttonStyle='btn--outline'
                            className='btn'>
                                Manage Messages
                            </Button>
                        </NavLink>
                    </div>
                    <div className="content">
                        <h2 className="page-title">Contacy Messages List</h2>
                        <table>
                            <thead>
                                <th>Full Name</th>
                                <th>Email</th>
                                <th>Message</th>
                                <th colSpan="2">Action</th>
                            </thead>
                            <tbody>
                                {
                                    Object.keys(contactObjects).map(id =>{
                                        return <tr key={id}>
                                            <td>{contactObjects[id].fullName}</td>
                                            <td>{contactObjects[id].email}</td>
                                            <td>{contactObjects[id].message}</td>
                                            <td><NavLink to="/" className="edit">reply</NavLink></td>
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

export default ManageContacts;