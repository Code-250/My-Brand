import React from 'react';
import '../App.css';

const STYLE = ['btn--outline','btn--primary'];
const SIZES = ['btn--medium', 'btn--large']

export const Button = ({
    children, 
    type, 
    onClick,
     buttonStyle,
     buttonSize
    })=>{
    const checkButtonStyle =   
    STYLE.includes(buttonStyle) ? 
    buttonStyle : STYLE[0];
    const checkButtonSize = 
    SIZES.includes(buttonSize) ? 
    buttonSize : SIZES[0] 

    return(
        <button
            className={`btn
            ${checkButtonStyle} 
            ${checkButtonSize}`}
            onClick={onClick}
            type={type}
            style={{backgroundColor:"black", color:"white"}}
            >
                {children}
        </button>
    )
}