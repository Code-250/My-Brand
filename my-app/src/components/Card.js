import React from 'react';
import BlogContextProvider from '../context/blogContext,';
import ProjectProvider from '../context/ProjectContext';
import BlogList from "./BlogList";
import ProjectList from "./ProjectList";

function ProjectCards(){
    return(
        <div className="cards">
            <ProjectProvider>
                <ProjectList/>
            </ProjectProvider>
            <BlogContextProvider>
                <BlogList/>
            </BlogContextProvider>
        </div>
        
        
        
    )
}
export default ProjectCards;