import React from 'react';

function scrollAround  () {
            const NavLinks = document.getElementsByClassName('nav-links')[0];
            const oneLink = document.querySelectorAll('.nav-item');

        oneLink.forEach((Link)=>{
            Link.addEventListener('click',(e)=>{
                NavLinks.classList.toggle('active');
            });
        }) 
    
}

export default scrollAround