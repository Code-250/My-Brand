import React, { useContext } from 'react';
import './componentCss/project.css';
import { ProjectContext } from '../context/ProjectContext';

const ProjectList =()=>{
    const { projects } = useContext(ProjectContext);
    return(
        <div className="container">
            <h1 className='d-flex justify-content-center mb-5' style={{color:"#7e7b7b"}}>PROJECTS</h1>
            <div className="container-fluid  justify-content-center">
                <ul className="row col-12 justify-content-center ml-4">
                    { projects.map(project=>{
                    return(
                        <li key={project.id} className=" card col-md-5">
                            <div className="card-title">{project.title}</div>
                            <p className="card-text text-secondary">
                                lorem have been in jamaica andrenamed the gollira there it very awesome and 
                            </p>
                            <a href="#" className="btn btn-outline-success">See more</a>
                        </li>
                    )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default ProjectList;