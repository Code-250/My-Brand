import  React from 'react'
import './App.css';
import './App.css';

function About(){
    return(
        <div className='about' id='about'>
            <section>
                <h1 className='about-header'>
                    About
                </h1>
                <p className='about-intro'>
                    My aim is to design and implement high quality web
                    application I value strong communication,
                    transparency and focus.
                </p>
                <div className='skill-container'>
                    <div classNane='design skill'>
                        <img className='img-skill' src='./images/designer.svg' alt='Designer-log'/>
                        <h2 className='skill-title'>Design</h2>
                        <ul>
                            <li>Figma</li>
                            <li>Sketch</li>
                            <li>Adobe XD</li>
                        </ul>   
                    </div>
                    <div classNane=' skill'>
                        <img className='img-skill' src='./images/frontend.svg' alt='Front-end-logo'/>
                        <h2 className='skill-title'>Front-End</h2>
                        <ul>
                            <li>React</li>
                            <li>Javascript</li>
                            <li>css</li>
                        </ul>   
                    </div>
                    <div classNane='backend skill'>
                        <img className='img-skill' src='./images/mentor.svg' alt='BackEnd-Logo'/>
                        <h2 className='skill-title'>Back-End</h2>
                        <ul>
                            <li>Node</li>
                            <li>Express</li>
                            <li>MongoDB and PostgressDB</li>
                        </ul>   
                    </div>
                    <div classNane='Testing skill'>
                        <img className='img-skill' src='./images/test.svg' alt='Testing-skills'/>
                        <h2 className='skill-title'>Testing</h2>
                        <ul>
                            <li>Mocha</li>
                            <li>Jest</li>
                        </ul>   
                    </div>
                </div>
            </section>
        </div>
     )
}

export default About;