import  React from 'react'
import './App.css';
import './About.css';
import Footer from './UI/components/Footer';

function About(){
    return(
        <div className='App'>
            <h1>Hello About</h1>
            <div className='about-container'>
                <div className='about-wrapper'>
                    <p>who is this guy?</p>
                    <p>what does he do ?</p> 
                    <p>what do we need to know about him?</p>
                </div>
            </div>    
                    <div>
                        <p>
                            I am a beginer fullstack developer 
                            who is dedicated into helpng people 
                            in other words users to have the most
                            responsive websites and web apps.
                            Below are different services that we offer 
                            and the expertise.
                        </p>
                    </div>
                    {/* services that we offer. */}

                    {/* expertise */}

                    {/* what our clients talk about us */}
                    
            <Footer/>
        </div>
    )
}

export default About;