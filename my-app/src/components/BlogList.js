import React, { useContext } from 'react';

import {Link} from"react-scroll";
import { BlogContext } from '../context/blogContext,';

const BlogList = ()=>{
    const { blogs } = useContext(BlogContext);

    return(
        <div className="container">
            <h1 className='d-flex justify-content-center mb-5' style={{color:"#7e7b7b"}}>blogs</h1>
            <div className='container-fluid justify-content-center'>
                <ul className='row col-12 justify-content-center ml-4'>
                    {
                        blogs.map(blog=>{
                            return(
                                <li key={blog.id} className="card col-md-5">
                                    <div className="card-title">{blog.title}</div>
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