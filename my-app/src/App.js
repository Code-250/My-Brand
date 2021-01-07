import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
// import './App.css';
import Home from './Home';
import Form from './UI/components/Form';
import ScrollToTop from './ScrollToTop';
// import project from './UI/components/project';
import blog from './UI/components/blog';
import NavBar from './UI/components/NavBar';
// import Login from './UI/components/Login';
import ContactMessage from './UI/components/Admin-pages/ViewContactMessage';

function App (){
    return (
        
        <Router>
          <div className='main-body'>
              <ScrollToTop/>
                <NavBar/>
                        <Switch>
                          <Route path='/' exact component={Home}/>
                          <Route   path='/Login'exact component={Form}/>
                          <Route path='/viewContactMessages/:name' component={ContactMessage}/>
                          <Route path='/blog' component={blog}/>

                        </Switch>
                        
          </div>
        </Router>
    );
}

export default App;


<Router>
  
</Router>