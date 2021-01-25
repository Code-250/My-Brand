import React,{useContext} from "react";
import{Route, Redirect} from "react-router-dom";
import { AuthContext } from "./context";


function PrivateRoute({component: Component, ...rest}){
    const {currentUser} =useContext(AuthContext);
    return(
        <Route 
        {...rest} 
        render={props=>
        !!currentUser ? (    <Component {...props}/>
        ) : (
            <Redirect to="/Login"/>
        )
        }
        />
    )
}

export default PrivateRoute;