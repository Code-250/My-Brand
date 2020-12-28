import  React from 'react'
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import Footer from './UI/components/Footer';

function Contacts(){
    return(
        <Router>
            <div className='App'>
            <h1>Hello Projects</h1>
            <h1>how are you</h1>
            <Footer/>
        </div>
    
        </Router>
    )    
}

export default Contacts;