import React, { useContext } from 'react';
import './componentCss/project.css';
import { ProjectContext } from '../context/ProjectContext';

const ProjectList =()=>{
    const { projectObject } = useContext(ProjectContext);
    return(
        <div className="container">
            <h1 className='d-flex justify-content-center mb-5' style={{color:"#7e7b7b"}}>PROJECTS</h1>
            <div className="container-fluid  justify-content-center">
                <ul className="row">
                    {Object.keys(projectObject).map(id=>{
                    return(
                        <li key={id} className=" card col-md-7 mb-3">
                            <div>
                                <img width="300px" height="200px"className="overflow picture card-img justify-content-center ml-4" src={projectObject[id].fileUrl}/>
                            </div>
                            <h3 className="card-title">{projectObject[id].title}</h3>
                            <p className="card-text text-secondary">
                                {projectObject[id].description}
                            </p>
                            <div className="project-icons">
                                <a href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-code" viewBox="0 0 16 16">
                                        <path d="M5.854 4.854a.5.5 0 1 0-.708-.708l-3.5 3.5a.5.5 0 0 0 0 .708l3.5 3.5a.5.5 0 0 0 .708-.708L2.707 8l3.147-3.146zm4.292 0a.5.5 0 0 1 .708-.708l3.5 3.5a.5.5 0 0 1 0 .708l-3.5 3.5a.5.5 0 0 1-.708-.708L13.293 8l-3.147-3.146z"/>
                                    </svg>
                                    <p>Source Code</p>
                                </a>
                                
                                <a href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-display" viewBox="0 0 16 16">
                                        <path d="M0 4s0-2 2-2h12s2 0 2 2v6s0 2-2 2h-4c0 .667.083 1.167.25 1.5H11a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1h.75c.167-.333.25-.833.25-1.5H2s-2 0-2-2V4zm1.398-.855a.758.758 0 0 0-.254.302A1.46 1.46 0 0 0 1 4.01V10c0 .325.078.502.145.602.07.105.17.188.302.254a1.464 1.464 0 0 0 .538.143L2.01 11H14c.325 0 .502-.078.602-.145a.758.758 0 0 0 .254-.302 1.464 1.464 0 0 0 .143-.538L15 9.99V4c0-.325-.078-.502-.145-.602a.757.757 0 0 0-.302-.254A1.46 1.46 0 0 0 13.99 3H2c-.325 0-.502.078-.602.145z"/>
                                    </svg>
                                    <p>Live Priview</p>
                                </a>
                            </div>
                            
                        </li>
                    )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default ProjectList;