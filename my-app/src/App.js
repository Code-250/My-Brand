import React from 'react';
import NavBar from './UI/components/NavBar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './UI/components/Pages/Home'; 
import blogs from './UI/components/Pages/blogs'; 
import projects from './UI/components/Pages/projects';
import About from './UI/components/Pages/About';
import contact from './UI/components/Pages/contact';
import Login from './UI/components/Pages/Login';

class App extends React.Component {
  render(){
    return (
    <>
    <Router>
      <NavBar/>
      <Home/>
      <Switch>

        <Route path='/' Component={Home}/>
         <Route path='/projects' component={projects}/>
        <Route path='/blogs' component={blogs}/>
        <Route path='/contact' component={contact}/>
        <Route path='/Login' component={Login}/>
        <Route path='/About' component={About}/>
      </Switch>
    </Router>
      
    </>
  );
  }
  
}

export default App;
