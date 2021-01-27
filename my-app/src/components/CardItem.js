import React from 'react'
import {Link}  from 'react-scroll/modules';

function CardItem(){
    return(
        <div className="holster">
            <li className='cards__item'>
                <Link
                to='home'
                activeClass='active'
                spy={true}
                smooth={true}
                offset={-130}
                duration={500}
                >
                
                
                    <div className='cards__item__link'>
                        <figure className='cards__item__pic-wrap'>
                            <img src='/images/PROFILE.jpg' alt='card-profile'
                            className='cards__item__img'/>
                        </figure>
                        <div className='cards__item__info'>
                            <h5 className='cards__item__text'>Explore the software scheduler
                                and your day to day and we have some things for you people life planner</h5>
                     </div>
                    </div>
                
                </Link>
            </li>
        </div>    
    )
}

export default CardItem;