import React, { useContext } from 'react';
import '../App.css';
import {NavLink} from "react-router-dom";
import { ProjectContext } from '../context/ProjectContext';

const ProjectList =()=>{
    const { projects } = useContext(ProjectContext);
    return(
        <div id='projects'>
            <h1 className='projects'>PROJECTS</h1>
            <div className='cards__container '>
                <ul className="cards__items">
                    { projects.map(project=>{
                    return( 
                        <li key={project.id}>{project.title}</li>
                    )
                    })}
                </ul>
            </div>  
        </div>
    )
}

export default ProjectList;