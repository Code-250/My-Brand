import React from 'react';
import CardItem from './CardItem';
import './Card.css';

function Card(){
    return(
        <div className='cards'>
            <h1 id='projects'>PROJECTS</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem 
                        src='images/PROFILE.JPG'
                        text='Explore the software scheduler
                        and your day to day life planner'
                        label='projects'
                        path='projects'
                        />
                        <CardItem 
                        src='images/PROFILE.JPG'
                        text='Explore the software scheduler
                        and your day to day life planner'
                        label='projects'
                        path='projects'
                        />
                        <CardItem 
                        src='images/PROFILE.JPG'
                        text='Explore the software scheduler
                        and your day to day life planner'
                        label='projects'
                        path='projects'
                        />
                    </ul>
                </div>
            </div>
            
            <h1 id='blogs'>blogs</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem 
                        src='images/soft.png'
                        text='Explore the software scheduler
                        and your day to day life planner'
                        label='View Details'
                        path='blogs'
                        />
                        <CardItem 
                        src='images/soft.png'
                        text='Explore the software scheduler
                        and your day to day life planner'
                        label='View Details'
                        path='blogs'
                        />
                        <CardItem 
                        src='images/PROFILE.JPG'
                        text='Explore the software scheduler
                        and your day to day life planner'
                        label='View Details'
                        path='blogs'
                        
                        />
                    </ul>
                </div>
            </div>
            </div>
        
        
    )
}
export default Card;