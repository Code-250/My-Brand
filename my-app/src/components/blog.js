import React from 'react'
import Footer from './Footer';
import '../App.css'

function blog() {
    return (
            <div className='blog-container'>
                <div className='blog-header'>
                    <h1 id="blog-heading">
                        title of blog
                    </h1>
                
                </div>
                <div className='blog-img'>
                    {/* description image of project */}
                    <img src='/images/PROFILE.JPG' alt="project-description" id="profile"></img>
                </div>
                <div className='blog-description'>
                    {/* description of a project */}
                    <p>
                            I am humbly to meet your high responsibility to apply for the permission of carrying out internship in your Company.
                            In fact; I am student who is pursuing bachelor degree in Electronics and Telecommunications Engineering, moreover I am student in year 3 in College of Science and Technology (CST).
                            I would like to carry out the internship in your Company AKAGERA ELECTRONICS and the training will be for 10weekswith effect from 04 january,2020. carrying internship in reputed institution like yours will help me to develop my practical skills specifically in Electronics and Telecommunications and other related field activities.
                            For further information, I attached relevant documents including recommendation letter from School of Engineering.
                            I am looking forward hearing from you and I hope my request will be put into consideration.

                        </p>
                </div>
                <Footer className='footer'/>
            
            </div>
    )
}

export default blog