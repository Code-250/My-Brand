import React from 'react';


function AdCardItem(){
    return(
        <div className="holster">
            <li className='cards__item'>
                <div className='cards__item__link'>
                    <figure className='cards__item__pic-wrap'>
                        <img src='/images/PROFILE.jpg' alt='card-profile'
                        className='cards__item__img'/>
                    </figure>
                    <div className='cards__item__info'>
                        <h5 className='cards__item__text'>Explore the software scheduler
                                and your day to day life planner</h5>
                    </div>
                </div>
                <button ClassName="btn-edit">edit</button>
                <button className="btn-delete">delete</button>
            </li>
        </div>    
    )
}

export default AdCardItem;