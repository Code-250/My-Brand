import React from "react";
import "./createpost.css";

const CreatePost =()=>{
    return(
        <div className="post-container">
            <div className="post-header">
                <h1 className="post-hello">Hello Richard, </h1>
                <h1 className="post-createEdit">Let's create or edit posts</h1>
            </div>
            
            <input     
            id='post'
             type='text'
            name='post-title'
            className='post-title'
            placeholder=' Enter post Title'/>
            <button className="post-img">upload image</button>
            <div className="post-area">
                <textarea type='textarea'
                            placeholder="post details"
                            className='post-detail'
                            cols='40'
                            rows='10'
                            >
                            
                </textarea>
                <button className="btn-post">upload Post</button>

            </div>
            <div className="footer">
                <h5 className="footer-text">
                    All rights resrved to you Richard
                </h5>
            </div>
        </div>
    )
}

export default CreatePost;