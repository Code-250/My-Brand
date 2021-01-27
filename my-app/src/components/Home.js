import React from 'react';
import '../App.css';
import HelloSection from './HelloSection';
import Card from './Card';
import Footer from './Footer';
import About from './About';
// import Dashboard from "./UI/components/Admin-pages/Dashboard";

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