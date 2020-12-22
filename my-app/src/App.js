import React from 'react';
import NavBar from './UI/components/NavBar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Blogs from './Blogs'
import Footer from './UI/components/Footer'
// import Projects from './Projects';
// import Blogs from './Blogs'

class App extends React.Component {
  render(){
    return (
      <Router>
        <div>
          <NavBar/>
          <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/projects' component={Projects} />
            <Route path='/About' component={About}/>
            <Route path='/Blogs' component={Blogs}/>
          </Switch>
          
          <Footer/>
        </div>
        

          
    
      </Router>
      
   
    );
  }
  
}

export default App;
