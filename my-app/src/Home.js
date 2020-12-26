import React from 'react';
import './App.css';
import HelloSection from './UI/components/HelloSection';
import Card from './UI/components/Card';
import Footer from './UI/components/Footer';


function Home(){
    return(
        <div className='App'>
            <HelloSection/>
            <Card/>
            <Footer/>
        </div>
    )
}
export default Home;