import React from 'react';
import '../App.css';
import HelloSection from './HelloSection';
import ProjectCards from './Card';
import Footer from './Footer';
import About from './About';
import NavBar from "./NavBar"
// import Dashboard from "./UI/components/Admin-pages/Dashboard";

function Home(){
    return(
      
            <div className='App' id='home'>
                <NavBar/>
                <HelloSection/>
                <About/>
                <ProjectCards/>
                <Footer/>
                
            </div>
        
        
    )
}
export default Home;