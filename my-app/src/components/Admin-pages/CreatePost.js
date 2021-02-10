import React,{useState} from "react";
import {db} from "../../context/firebase";
import AdNavbar from "./AdminNavbar";
import "./adminStyle.css";
import {Button} from "../Button";
import {NavLink} from "react-router-dom";
import ProgressBar from "./contactMessage";


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
    const [error, setError] =useState(null);

    const initialBlogValues = {
        file:"",
        title:"",
        body:"",
        author:""
    }
        const [file, setFile] =useState(null);
    
    const [titleErrors, setTitlteErrors] = useState('');
    const [bodyErrors, setBodyErrors] = useState('');
    const [authorErrors, setAuthorErrors] = useState('');
    const [blogs, setBlogs] = useState(initialBlogValues);

        const changeHandler =(e)=>{
            const { name, value} = e.target;
            setBlogs({
            ...blogs,
            [name]:value,
            })
        }
    const handleClick = (e) =>{
        e.preventDefault();
        if(blogs.title.length > 5 && blogs.body.length >20 &&blogs.author.length >4){
            AddPost(blogs);
            setBlogs(initialBlogValues);
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
                                className="text-input" name="file"
                                value={blogs.file}
                                onChange={changeHandler}/>
                                <div className="output">
                                    {error && <div>{error}</div>}
                                    {file && <div>{file.name}</div>}
                                    {file && <ProgressBar  file={file} setFile={setFile}/>}    
                                </div>
                            </div>
                            <div className="add-post-title">
                                <label>Title :</label>
                                <input type="text" name="title" className="text-input"
                                value={blogs.title}
                                onChange={changeHandler}/>
                                {titleErrors && <p className="user-errors">{titleErrors}</p>}
                            </div>
                            <div className="add-post-title">
                                <label>Body :</label>
                                <textarea id="body" name="body" className="text-input"
                                value={blogs.body}
                                onChange={changeHandler}/>
                                {bodyErrors && <p className="user-errors">{bodyErrors}</p>}

                            </div>
                            <div className="add-post-title">
                                <label>Author :</label>
                                <input type="text" name="author" className="text-input"
                                value={blogs.author}
                                onChange={changeHandler}/>
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