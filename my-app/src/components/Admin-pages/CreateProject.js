import AdNavbar from "./AdminNavbar";
import "./adminStyle.css";
import {Button} from "../Button";
import {NavLink} from "react-router-dom"

const CreateProject = () => {
    return (
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
                    <NavLink to="/projects">
                        <Button buttonStyle='btn--outline'
                        className='btn'>
                            projects 
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
                    <form method="post">
                        <div className="add-post-title">
                            <label>Image :</label>
                            <input type="file" name="image" className="text-input"/>
                        </div>
                        <div className="add-post-title">
                            <label>Title :</label>
                            <input type="text" name="title" className="text-input"/>
                        </div>
                        <div className="add-post-title">
                            <label>Description :</label>
                            <textarea id="body" name="title" className="text-input"/>
                        </div>
                        <div>
                            <NavLink to="/">
                                <Button buttonStyle='btn--outline'
                                className='btn'>
                                   Add Project 
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

export default CreateProject
