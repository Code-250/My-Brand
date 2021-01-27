import AdNavbar from "./AdminNavbar";
import "./adminStyle.css";
import {Button} from "../Button";
import {NavLink} from "react-router-dom"


const CreatePost =()=>{
    return(
        <div className="admin-container">
            <AdNavbar/>
             <div className="admin-wrapper">
                 <div className="left-sidebar">
                    <ul>
                        <NavLink to="/dashboard"><li>Manage Blogs</li></NavLink>
                        <NavLink to="/"><li>Manage Projects</li></NavLink>
                        <NavLink to="/"><li>Contact Messages</li></NavLink>
                        <NavLink to="/"><li>Manage Blogs</li></NavLink>
                    </ul>
                    
                 </div>
                 <div className="admin-content">
                    <div className="button-group">
                        <NavLink to="/dashboard">
                            <Button buttonStyle='btn--outline'
                            className='btn'>
                                Blogs 
                            </Button>
                        </NavLink>
                        <NavLink to="/">
                            <Button buttonStyle='btn--outline'
                            className='btn'>
                                Manage blogs
                            </Button>
                        </NavLink>
                    </div>
                    <div className="content">
                        <h2 className="page-title">Manage Blogs</h2>
                        <form method="post">
                            <div className="add-post-title">
                            <Button buttonStyle='btn--outline'
                                className='btn'>
                                   upload image 
                                </Button>
                            </div>
                            <div className="add-post-title">
                                <label>Title :</label>
                                <input type="text" name="title" className="text-input"/>
                            </div>
                            <div className="add-post-title">
                                <label>Body :</label>
                                <textarea id="body" name="title" className="text-input"/>
                            </div>
                            <div>
                                <NavLink to="/">
                                    <Button buttonStyle='btn--outline'
                                    className='btn'>
                                       Add Blog 
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

export default CreatePost;