import React,{useState} from "react";
import {db} from "../../context/firebase";
import AdNavbar from "./AdminNavbar";
import "./adminStyle.css";
import {Button} from "../Button";
import {NavLink} from "react-router-dom"


const CreatePost =()=>{

    
    const AddPost = (posts) =>{
        db.collection('blogs').add(
            posts,
           err =>{
               if(err){
                    console.log(err);
                }
           } 
        )
    }
    const initialBlogValues = {
        image:"",
        title:"",
        body:"",
        author:""
    }
    const [blogs, setBlogs] = useState(initialBlogValues);
    const changeHandler = (e)=>{
        const {name, value} = e.target
        
        setBlogs({
            ...blogs,
            [name]:value,
        })
    }

    const handleClick = (e) =>{
        e.preventDefault();
        AddPost(blogs);
        setBlogs(initialBlogValues);
    }
    return(
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
                                <label>Image :</label>
                                <input type="file" name="image" 
                                className="text-input"
                                onChange={changeHandler}/>
                            </div>
                            <div className="add-post-title">
                                <label>Title :</label>
                                <input type="text" name="title" className="text-input"
                                value={blogs.title}
                                onChange={changeHandler}/>
                            </div>
                            <div className="add-post-title">
                                <label>Body :</label>
                                <textarea id="body" name="body" className="text-input"
                                value={blogs.body}
                                onChange={changeHandler}/>

                            </div>
                            <div className="add-post-title">
                                <label>Author :</label>
                                <input type="text" name="author" className="text-input"
                                value={blogs.author}
                                onChange={changeHandler}/>
                            </div>
                            <div>
                                    <Button buttonStyle='btn--outline'
                                    className='btn'
                                    onClick={handleClick}>
                                       Add Blog 
                                    </Button>
                            </div>
                        </form>
                    </div>
                 </div>
             </div>
        </div>
    )
}

export default CreatePost;