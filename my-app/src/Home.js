import React from 'react';
import './App.css';
import HelloSection from './UI/components/HelloSection';
import Card from './UI/components/Card';
import Footer from './UI/components/Footer';
import About from './About';


function Home(){
    return(
      
            <div className='App' id='home'>
                <HelloSection/>
                <About/>
                <Card/>
                <Footer/>
                
                
            </div>
        
        
    )
}
export default Home;