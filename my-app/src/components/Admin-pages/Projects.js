import React,{ useContext } from "react";
import AdNavbar from "./AdminNavbar";
import "./adminStyle.css";
import {db} from "../../context/firebase";
import {Button} from "../Button";
import {NavLink} from "react-router-dom"
import { ProjectContext } from "../../context/ProjectContext";

function Projects(){

    const {projectObject} = useContext(ProjectContext);

    return(
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
                        <NavLink to="/createProject">
                            <Button buttonStyle='btn--outline'
                            className='btn'>
                                Add Project 
                            </Button>
                        </NavLink>
                        <NavLink to="/">
                            <Button buttonStyle='btn--outline'
                            className='btn'>
                                Manage Projects
                            </Button>
                        </NavLink>
                    </div>
                    <div className="content">
                        <h2 className="page-title">Manage Projects</h2>
                        <table>
                            <thead>
                                <th>Title</th>
                                <th>contributer</th>
                                <th colSpan="3">Action</th>
                            </thead>
                            <tbody>
                                {
                                    Object.keys(projectObject).map(id=>{
                                        return<tr key={id}>
                                            <td>{projectObject[id].title}</td>
                                            <td>{projectObject[id].contributers}</td>
                                            <td onClick={()=>{db.collection("Projects").doc("UP").delete().then(()=>{
                                                console.log("document deleted ")
                                            }).catch(error=>{
                                                console.error("error removing ",error)
                                            })}} className="edit">edit</td>
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
export default Projects;