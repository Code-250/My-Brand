import React from 'react';
import {Link}  from 'react-scroll';
import AdCardItem from './AdCardItem';


function Card(){
    return(
        <div className='cards'>
            <div id='projects'>
                <h1 className='projects'>PROJECTS</h1>
                <div className='cards__container'>
                    <div className='cards__wrapper'>
                        <ul className='cards__items'>
                            
                            <Link to='home'
                            activeClass='active'
                            spy={true}
                            smooth={true}
                            offset={-130}
                            duration={500}
                            >
                                <AdCardItem 
                                    src='images/PROFILE.JPG'
                                    text='Explore the software scheduler
                                    and your day to day life planner'
                                    label='projects'
                                    path='projects'
                                />
                            </Link>
                            
                        
                            <Link to='home'
                            activeClass='active'
                            spy={true}
                            smooth={true}
                            offset={-130}
                            duration={500}
                            >
                                <AdCardItem 
                                    src='images/PROFILE.JPG'
                                    text='Explore the software scheduler
                                    and your day to day life planner'
                                    label='projects'
                                    path='projects'
                                />
                            </Link>
                            
                        
                            <Link to='home'
                            activeClass='active'
                            spy={true}
                            smooth={true}
                            offset={-130}
                            duration={500}>
                                <AdCardItem 
                                    src='images/PROFILE.JPG'
                                    text='Explore the software scheduler
                                    and your day to day life planner'
                                    label='projects'
                                    path='projects'
                                />
                            </Link>
                                
                        
                            
                            
                        </ul>
                    </div>
                </div>  
            </div>
            <div id='blogs'>
                <h1 className='blog-title'>blogs</h1>
                <div className='cards__container'>
                    <div className='cards__wrapper'>
                        <ul className='cards__items'>
                            <Link to='home'
                            activeClass='active'
                            spy={true}
                            smooth={true}
                            offset={-130}
                            duration={500}>
                                <AdCardItem 
                                src='images/soft.png'
                                text='Explore the software scheduler
                                and your day to day life planner'
                                label='View Details'
                                path='blogs'
                                />
                            </Link>
                            <Link to='home'
                            activeClass='active'
                            spy={true}
                            smooth={true}
                            offset={-130}
                            duration={500}>
                                <AdCardItem 
                                src='images/soft.png'
                                text='Explore the software scheduler
                                and your day to day life planner'
                                label='View Details'
                                path='blogs'
                                />
                            </Link>
                            <Link to='home'
                            activeClass='active'
                            spy={true}
                            smooth={true}
                            offset={-130}
                            duration={500}>
                                <AdCardItem 
                                src='images/PROFILE.JPG'
                                text='Explore the software scheduler
                                and your day to day life planner'
                                label='View Details'
                                path='blogs'
                                />
                            </Link>
                            
                    
                            
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        
        
    )
}
export default Card;