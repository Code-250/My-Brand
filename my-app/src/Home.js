import React from 'react';
import './App.css';
import HelloSection from './UI/components/HelloSection';
import Card from './UI/components/Card'
// import Card from './UI/components/Card';
// import HelloSection from './UI/components/HelloSection';

function Home(){
    return(
        <div className='App'>
            <HelloSection/>
            <Card/>
        </div>
    )
}
export default Home;