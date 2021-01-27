import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
// import './App.css';
import Home from './components/Home';
// import Form from './UI/components/Form';
import ScrollToTop from './ScrollToTop';
import blog from './components/blog';
import Login from './components/Login';
import SignUp from "./components/RegisterForm";
import CreatePost from "./components/Admin-pages/CreatePost";
import Projects from "./components/Admin-pages/Projects";
import CreateProject from "./components/Admin-pages/CreateProject";
import PrivateRoute from "./context/PrivateRoute";
 import{AuthProvider} from "./context/context";
import Dashboard from "./components/Admin-pages/Dashboard"
import About from './components/About';
import {Container} from "react-bootstrap";


function App (props){
  return (
    <AuthProvider>
      
      <Router>
        <div className='main-body'>
          <ScrollToTop/>
          <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/about' component={About}/>
            <Route path='/blog' component={blog}/>
            <PrivateRoute path="/dashboard" component={Dashboard}/>
            <Route path="/addPost" component={CreatePost}/>
            <Route path="/projects" component={Projects}/>
            <Route path="/createproject" component={CreateProject}/>
            <Container className="d-flex align-items-center 
              justify-content-center"
              style={{minheight:"100vh",marginTop:"12rem"}}>
              <div  
                style={{maxwidth:'200px'}}>
                <Route path='/Login'exact component={Login}/>
                <Route path="/signup" component={SignUp}/>
              </div>                    
            </Container>
            
          </Switch>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;


<Router>
  
</Router>