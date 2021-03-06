import React from 'react'
import {Link} from 'react-router-dom';

function CardItem(){
    return(
        <div className="holster">
            <li className='cards__item container x mandatory-scroll-snapping'>
                <Link className='cards__item__link'>
                    <figure className='cards__item__pic-wrap'>
                        <img src='/images/PROFILE.jpg' alt='card-profile'
                        className='cards__item__img'/>
                    </figure>
                    <div className='cards__item__info'>
                        <h5 className='cards__item__text'/>
                    </div>
                </Link>
            </li>
        </div>    
    )
}

export default CardItem;