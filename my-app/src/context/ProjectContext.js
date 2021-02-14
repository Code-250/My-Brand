import React, {createContext,useState}from 'react';
import {db} from "./firebase";

export const ProjectContext = createContext();

const ProjectProvider =(props)=>{
    const [projectObject, setProjects] = useState({})

    db.collection("Projects")
    .get()
    .then(snapshot=>{
        const project = snapshot.docs.map(doc=>doc.data());
        setProjects(project);
    })
    return(
        <ProjectContext.Provider value={{projectObject}}>
            {props.children}
        </ProjectContext.Provider>
    )
}

export default ProjectProvider;