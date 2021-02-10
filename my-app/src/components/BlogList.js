import React, { useContext } from 'react';

import {Link} from"react-scroll";
import { BlogContext } from '../context/blogContext,';

const BlogList = ()=>{
    const { blogs } = useContext(BlogContext);

    return(
        <div id='blogs'>
            <h1 className='blog-title'>blogs</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        {
                            blogs.map(blog=>{
                                return(
                                    <li key={blog.id}>{blog.title}</li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default BlogList;