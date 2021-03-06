import  React from 'react'
import './App.css';
import './About.css';
import Footer from './UI/components/Footer';

function About(){
    return(
        <div className='container'>
            <div className='about-container'>
                <div className='about-wrapper'>
                    <p>who is this guy?</p>
                    <p>what does he do ?</p> 
                    <p>what do we need to know about him?</p>
                </div>
                <img src='/images/PROFILE.JPG' alt='profile-picture'></img>
            </div>    
                    <div className='descript'>
                        <h1 className='intro'> 
                            WHO IS RICHARD
                        </h1>
                        <label className='explain'>
                            I am a beginer fullstack developer 
                            who is dedicated into helpng people 
                            in other words users to have the most
                            responsive websites and web apps.
                            Below are different services that we offer 
                            and the expertise.
                        </label>
                    </div> 
                    {/* services that we offer. */}

                    {/* expertise */}

                    {/* what our clients talk about us */}
                    <div className='clients'>
                         <h1 className="talk">
                             'What our clients talk about us'
                         </h1>
                         <p id='compliment'>
                            "having Richard in our team was just a relief becuse 
                            he is a hard work and he is good "
                            "having Richard in our team was just a relief becuse 
                            he is a hard work and he is good "
                        </p>
                        <h1 className='talk'>
                            director of andela
                        </h1>
                                                               
                    </div>
                    
            <Footer/>
        </div>
    )
}

export default About;