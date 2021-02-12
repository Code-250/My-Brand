import React,{ createContext, useState} from "react"
import {db} from "./firebase";
export const BlogContext = createContext();

const BlogContextProvider = (props)=>{

    const [blogObject, setBlogObjects] =useState({})
    
    db.collection("Blogs")
    .get()
    .then(querySnapshot=>{
        const post = querySnapshot.docs.map(doc=>doc.data());
        setBlogObjects(post);
    })
    return(
        <BlogContext.Provider value={{blogObject}}>
            {props.children}
        </BlogContext.Provider>
    )
}

export default BlogContextProvider;