import React,{ createContext, useState} from "react"

export const BlogContext = createContext();

const BlogContextProvider = (props)=>{
    const [blogs, setBlogs] =useState([
        {title:"Hello world", id:1},
        {title:"money heist", id:2},
        {title:"gun maker and truble solver", id:3},
        {title:"Hello world", id:4},
    ])
    return(
        <BlogContext.Provider value={{blogs}}>
            {props.children}
        </BlogContext.Provider>
    )
}

export default BlogContextProvider;