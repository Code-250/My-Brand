import AdNavbar from "./AdminNavbar";
import "./adminStyle.css";
import {Button} from "../Button";
import {NavLink} from "react-router-dom"

function Projects(){
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
                                <th>SN</th>
                                <th>Title</th>
                                <th>contributer</th>
                                <th colSpan="3">Action</th>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Task Tracker</td>
                                    <td>Rich</td>
                                    <td><NavLink to="/" className="edit">edit</NavLink></td>
                                    <td><NavLink to="/" className="delete">delete</NavLink></td>
                                    <td><NavLink to="/" className="publish">publish</NavLink></td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Weather App</td>
                                    <td>Emmy Bigwi</td>
                                    <td><NavLink to="/" className="edit">edit</NavLink></td>
                                    <td><NavLink to="/" className="delete">delete</NavLink></td>
                                    <td><NavLink to="/" className="publish">publish</NavLink></td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Blogger Web</td>
                                    <td>Red Janvier</td>
                                    <td><NavLink to="/" className="edit">edit</NavLink></td>
                                    <td><NavLink to="/" className="delete">delete</NavLink></td>
                                    <td><NavLink to="/" className="publish">publish</NavLink></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                 </div>
             </div>
        </div>
    )
}
export default Projects;