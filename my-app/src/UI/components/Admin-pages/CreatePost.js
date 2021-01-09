import React from "react";

const CreatePost =()=>{
    return(
        <div className="">
            <input     
            id='post'
             type='text'
            name='post-title'
            className=''
            placeholder=' Enter post Title'/>
            <button className=" ">upload</button>
            <div className="">
                <textarea type='textarea'
                            placeholder="post details"
                            className='contact-message'
                            cols='70'
                            rows='40'
                            >
                            
                </textarea>
                <button className="">upload Post</button>
            </div>
        </div>
    )
}

export default CreatePost;