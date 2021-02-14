import React,{useState} from "react";
import AdNavbar from "./AdminNavbar";
import "./adminStyle.css";
import {db, storage} from "../../context/firebase";
import {Button} from "../Button";
import {NavLink} from "react-router-dom"

const CreateProject = () => {

    const [fileUrl, setProjectFileUrl] =useState(null);
    const imageHandler = async(e)=>{
        const file = e.target.files[0];
        const storageRef = storage.ref()
        const fileRef = storageRef.child(file.name)
        await fileRef.put(file)
        setProjectFileUrl(await fileRef.getDownloadURL());
    }

    const initialProjectValues = {
        title:"",
        description:"",
        contributers:""
    }

    const [projects, setProjects] = useState(initialProjectValues);
    const [titleError, setTitleError] = useState('')
    const [descriptionError, setDescriptionError] = useState('')
    const [contributersError, setContributersError]=useState('')
    const changeHandler = (e) =>{
        const {name,value} =e.target
        setProjects({
            ...projects,
            [name] : value
        })
    }

    const submitHandler =(e)=>{
        e.preventDefault();

        if(projects.title.length>3 && projects.description.length > 7){
            db.collection("Projects").doc().set({
                ...projects,
                fileUrl
            })
        } else {
            if(!projects.title.trim()){
                setTitleError("Title of the Project is required")
            }
            if(!projects.description.trim()){
                setDescriptionError("Please give a brief description of your project")
            }
            if(!projects.contributers.trim()){
                setContributersError("please value contributers work")
            }
        }
    }
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
                    <form method="post" >
                        <div className="add-post-title">
                            <label>Image :</label>
                            <input type="file" name="image" className="text-input"
                            onChange={imageHandler}/>
                        </div>
                        <div className="add-post-title">
                            <label>Title :</label>
                            <input type="text" name="title" className="text-input"
                            value={projects.title}
                            onChange={changeHandler}/>
                            {titleError && <p>{titleError}</p>}
                        </div>
                        <div className="add-post-title">
                            <label>Description :</label>
                            <textarea name="description" className="text-input"
                            value={projects.description}
                            onChange={changeHandler}/>
                            {descriptionError && <p>{descriptionError}</p>}
                        </div>
                        <div className="add-post-title">
                            <label>Contributers :</label>
                            <textarea name="contributers" className="text-input"
                            value={projects.contributers}
                            onChange={changeHandler}/>
                            {contributersError && <p>{contributersError}</p>}
                        </div>
                        <div>
                            <NavLink to="/">
                                <Button buttonStyle='btn--outline'
                                className='btn' onClick={submitHandler}>
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
