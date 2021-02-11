import React, { useContext } from 'react';
import './componentCss/project.css';
import {NavLink} from "react-router-dom";
import { ProjectContext } from '../context/ProjectContext';

const ProjectList =()=>{
    const { projects } = useContext(ProjectContext);
    return(
        <div id='projects'>
            <h1 className='projects'>PROJECTS</h1>
            <div className='container'>
                <div classname="project-container">
                    <ul className="project">
                        { projects.map(project=>{
                        return( 
                            <li key={project.id} className="col-3 card-group ">
                                <div>{project.title}</div></li>
                        )
                        })}
                    </ul>
                </div>
                
            </div>  
        </div>
    )
}

export default ProjectList;