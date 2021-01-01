import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './Home';
import About from './About';

import Blogs from './Blogs';
import Form from './UI/components/Form'
import ScrollToTop from './ScrollToTop';
import project from './UI/components/project';
import blog from './UI/components/blog';
import NavBar from './UI/components/NavBar';
import scrollAround from './UI/components/scrollAround'

function App (){
    return (
        
        <Router>
        <div className='main-body'>
        <scrollAround/>
        <ScrollToTop/>
          <NavBar/>
          <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/About' component={About}/>
            <Route path='/Blogs' component={Blogs}/>
            <Route path='/Login' component={Form}/>
            <Route path='/blog1' component={blog}/>
            <Route path='/project1' component={project}/>
            
            
          </Switch>
          
          
        </div>
        </Router>
    );
}

export default App;
