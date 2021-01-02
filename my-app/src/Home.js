import React from 'react';
import './App.css';
import HelloSection from './UI/components/HelloSection';
import Card from './UI/components/Card';
import Footer from './UI/components/Footer';
import About from './About';



function Home(){
    const navBarLinks = document.getElementsByClassName('navbar-links');
    const oneLink =document.querySelectorAll('.change');

    oneLink.forEach((About)=>{
        About.addEventListener("click",()=>{
            Home.scrollTo(About);
        })
    })
    return(
      
            <div className='App'>
                <HelloSection/>
                <About/>
                <Card/>
                <Footer/>
                
            </div>
        
        
    )
}
export default Home;