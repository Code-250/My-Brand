import React from 'react';
import NavBar from './UI/components/NavBar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './Home';
import About from './About';
import Contacts from './Contacts';
import Blogs from './Blogs';
import Form from './UI/components/Form'
import ScrollToTop from './ScrollToTop';


class App extends React.Component {
  render(){
    return (
        
        <Router>
        <div>
        <ScrollToTop/>
          <NavBar/>
          <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/Contacts' component={Contacts} />
            <Route path='/About' component={About}/>
            <Route path='/Blogs' component={Blogs}/>
            <Route path='/Login' component={Form}/>
            
            
          </Switch>
          
          
        </div>
        </Router>
    );
  }
  
}

export default App;
