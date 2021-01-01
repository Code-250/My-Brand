import React from 'react';
import {Link}  from 'react-router-dom';
import CardItem from './CardItem';
import '../../App.css';

function Card(){
    return(
        <div className='cards'>
            <h1 id='projects'>PROJECTS</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        
                        <Link to='project1'>
                            <CardItem 
                                src='images/PROFILE.JPG'
                                text='Explore the software scheduler
                                and your day to day life planner'
                                label='projects'
                                path='projects'
                            />
                        </Link>
                           
                       
                        <Link to = 'project2'>
                            <CardItem 
                                src='images/PROFILE.JPG'
                                text='Explore the software scheduler
                                and your day to day life planner'
                                label='projects'
                                path='projects'
                            />
                        </Link>
                          
                       
                        <Link to='project3'>
                            <CardItem 
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
            
            <h1 id='blogs'>blogs</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <Link to='blog1'>
                            <CardItem 
                            src='images/soft.png'
                            text='Explore the software scheduler
                            and your day to day life planner'
                            label='View Details'
                            path='blogs'
                            />
                        </Link>
                        <Link to='/blog2'>
                            <CardItem 
                            src='images/soft.png'
                            text='Explore the software scheduler
                            and your day to day life planner'
                            label='View Details'
                            path='blogs'
                            />
                        </Link>
                        <Link to='blog3'>
                            <CardItem 
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
        
        
    )
}
export default Card;