import React,{useContext, useState} from "react";
import {db, storage} from "../../context/firebase";
import AdNavbar from "./AdminNavbar";
import "./adminStyle.css";
import {Button} from "../Button";
import {NavLink} from "react-router-dom";


const CreatePost =()=>{

    const [fileUrl, setFileUrl] = useState(null);
    const imageHandler =async(e)=>{
        const file= e.target.files[0];
        const storageRef = storage.ref()
        const fileRef = storageRef.child(file.name)
        await fileRef.put(file)
        setFileUrl( await fileRef.getDownloadURL());
    }

    const initialBlogValues = {
        title:"",
        body:"",
        author:""
    }
    
    const [titleErrors, setTitlteErrors] = useState('');
    const [bodyErrors, setBodyErrors] = useState('');
    const [authorErrors, setAuthorErrors] = useState('');
    const [blogs, setBlogs] = useState(initialBlogValues);

    const handleChange = (e) =>{
        const {name,value}=e.target;
        setBlogs({
            ...blogs,
            [name]:value
        })
    }
    const handleClick = (e) =>{
        e.preventDefault();


        if(blogs.title.length > 5 && blogs.body.length >20 && blogs.author.length >4){
            db.collection("Blogs").doc().set({
                ...blogs,
                fileUrl
            })
        } else{
            if(!blogs.title.trim()){
                setTitlteErrors("Title of the blog must be atleast 5 character long")
            } 
            if(!blogs.author.trim()){
                setAuthorErrors("author is required")
            }
            if(!blogs.body.trim()){
                setBodyErrors("body of the blog is required")
            }

        }
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
                                <input type="file" 
                                className="text-input"
                                onChange={imageHandler}/>
                            </div>
                            <div className="add-post-title">
                                <label>Title :</label>
                                <input type="text" name="title" className="text-input"
                                value={blogs.title}
                                onChange={handleChange}/>
                                {titleErrors && <p className="user-errors">{titleErrors}</p>}
                            </div>
                            <div className="add-post-title">
                                <label>Body :</label>
                                <textarea  name="body" className="text-input"
                                value={blogs.body}
                                onChange={handleChange}/>
                                {bodyErrors && <p className="user-errors">{bodyErrors}</p>}

                            </div>
                            <div className="add-post-title">
                                <label>Author :</label>
                                <input type="text" name="author" className="text-input"
                                value={blogs.author}
                                onChange={handleChange}/>
                                {authorErrors && <p className="user-errors">{authorErrors}</p>}
                            </div>
                            <div>
                                <NavLink to="/dashboard">
                                    <Button buttonStyle='btn--outline'
                                        className='btn'
                                        onClick={handleClick}>
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