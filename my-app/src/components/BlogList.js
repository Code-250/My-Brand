import React, { useContext } from 'react';

import { BlogContext } from '../context/blogContext,';

const BlogList = ()=>{
    const { blogObject } = useContext(BlogContext);

    return(
        <div className="container">
            <h1 className='d-flex justify-content-center mb-5' style={{color:"#7e7b7b"}}>blogs</h1>
            <div className='container-fluid justify-content-center'>
                <ul className='row col-12 justify-content-center ml-4'>
                    {
                        Object.keys(blogObject).map(id=>{
                            return(
                                <li key={id} className="card col-md-5">
                                    <img className="card-img justify-content-center ml-4" src={blogObject[id].fileUrl}></img>
                                    <div className="card-title">{blogObject[id].title}</div>
                                    <p className="card-body">{blogObject[id].body}</p>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default BlogList;