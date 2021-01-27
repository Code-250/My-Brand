import AdNavbar from "./AdminNavbar";
import "./adminStyle.css";
import {Button} from "../Button";
import {NavLink} from "react-router-dom"

const Dashboard = () =>{
    return(
        <div className="admin-container">
            <AdNavbar/>
             <div className="admin-wrapper">
                 <div className="left-sidebar">
                    <ul>
                        <NavLink to="/dashboard"><li>Manage Blogs</li></NavLink>
                        <NavLink to="/projects"><li>Manage Projects</li></NavLink>
                        <NavLink to="/"><li>Contact Messages</li></NavLink>
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
                                <th>SN</th>
                                <th>Title</th>
                                <th>Author</th>
                                <th colSpan="3">Action</th>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>This is the first page</td>
                                    <td>Rich</td>
                                    <td><NavLink to="/" className="edit">edit</NavLink></td>
                                    <td><NavLink to="/" className="delete">delete</NavLink></td>
                                    <td><NavLink to="/" className="publish">publish</NavLink></td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>This is the second  page</td>
                                    <td>Emmy Bigwi</td>
                                    <td><NavLink to="/" className="edit">edit</NavLink></td>
                                    <td><NavLink to="/" className="delete">delete</NavLink></td>
                                    <td><NavLink to="/" className="publish">publish</NavLink></td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>This is the third page</td>
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

export default Dashboard;