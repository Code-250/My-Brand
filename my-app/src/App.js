import React from 'react';
import NavBar from './UI/components/NavBar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';

import Home from './Home';
import About from './About';
import Projects from './Projects';
import Blogs from './Blogs'

class App extends React.Component {
  render(){
    return (
    <>
      <Router>
        <NavBar/>

        <Switch>
          
          <Route path='/' exact component={Home} />
          <Route path='/About'  Component={About}/>
          <Route path='/Projects' Component={Projects}/>
          <Route path='/Blogs'  Component={Blogs}/>
        </Switch>
    
      </Router>
      
    </>
    );
  }
  
}

export default App;
