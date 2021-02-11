import React, {createContext,useState}from 'react';

export const ProjectContext = createContext();

const ProjectProvider =(props)=>{
    const [projects, setProjects] = useState([
        {title:"Hello world", id:1},
        {title:"money heist", id:2},
    ])
    return(
        <ProjectContext.Provider value={{projects}}>
            {props.children}
        </ProjectContext.Provider>
    )
}

export default ProjectProvider;