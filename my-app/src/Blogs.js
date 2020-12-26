import  React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Footer from './UI/components/Footer';

function Blogs(){
    return(
        <Router>
            <div className='App'>
                <h1>Hello Blogs</h1>
                <Footer/>
            </div>
        </Router>
        
    )
}

export default Blogs;