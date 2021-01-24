import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
// import './App.css';
import Home from './Home';
// import Form from './UI/components/Form';
import ScrollToTop from './ScrollToTop';
// import project from './UI/components/project';
import blog from './UI/components/blog';
import NavBar from './UI/components/NavBar';
import Login from './UI/components/Login';
import Contact from './UI/components/Contact';
import SignUp from "./UI/components/RegisterForm";
import CreatePost from "./UI/components/Admin-pages/CreatePost"
import PrivateRoute from "./context/PrivateRoute";
import{AuthContext} from "./context/context";
import Dashboard from "./UI/components/Admin-pages/Dashboard"
import About from './About';
import {Container} from "react-bootstrap";


function App (props){
    return (
        <AuthContext.Provider value={false}>
          <Router>
            <div className='main-body'>
                <ScrollToTop/>
                  <NavBar/>
                          <Switch>
                            <Route path='/' exact component={Home}/>
                            
                            <Route path='/about' component={About}/>
                            <Route path='/blog' component={blog}/>
                            <Container className="d-flex align-items-center 
                            justify-content-center pt-5"
                            style={{minheight:"100vh"}}>
                              <div  
                               style={{maxwidth:'200px'}}>
                                 <Route   path='/Login'exact component={Login}/>
                                  <Route path="/signup" component={SignUp}/>
                              </div>
                                
                            </Container>
                            <PrivateRoute path="/dashboard" component={Dashboard}/>
                            <Route path="/createPost" component={CreatePost}/>
                            

                          </Switch>
                          
            </div>
          </Router>
        </AuthContext.Provider>
    );
}

export default App;


<Router>
  
</Router>