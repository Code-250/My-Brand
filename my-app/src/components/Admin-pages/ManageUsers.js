import AdNavbar from "./AdminNavbar";
import "./adminStyle.css";
import {Button} from "../Button";
import {NavLink} from "react-router-dom"

function ManageUser() {
    
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
                                <th>SN</th>
                                <th>Title</th>
                                <th>Role</th>
                                <th colSpan="2">Action</th>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Richard</td>
                                    <td>Admin</td>
                                    <td><NavLink to="/" className="edit">edit</NavLink></td>
                                    <td><NavLink to="/" className="delete">delete</NavLink></td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Emmy Bigwi</td>
                                    <td>Author</td>
                                    <td><NavLink to="/" className="edit">edit</NavLink></td>
                                    <td><NavLink to="/" className="delete">delete</NavLink></td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Red Janvier</td>
                                    <td>Supervisor</td>
                                    <td><NavLink to="/" className="edit">edit</NavLink></td>
                                    <td><NavLink to="/" className="delete">delete</NavLink></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                 </div>
             </div>
        </div>
    )
}

export default ManageUser;
