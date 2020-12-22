import React from 'react';
import './App.css';
import HelloSection from './UI/components/HelloSection';
import Card from './UI/components/Card';

// import Card from './UI/components/Card';
// import HelloSection from './UI/components/HelloSection';

function Home(){
    return(
        <div className='App'>
            <HelloSection/>
            <Card/>
            <h1>Richard</h1>
        </div>
    )
}
export default Home;