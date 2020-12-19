import React from 'react';
import NavBar from './UI/components/NavBar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './UI/components/Pages/Home'

class App extends React.Component {
  render(){
    return (
    <>
    <Router>
      <NavBar/>
      <Home/>
      <Switch>

        <Route path='/' exact Component={Home}/>
      </Switch>
    </Router>
      
    </>
  );
  }
  
}

export default App;
