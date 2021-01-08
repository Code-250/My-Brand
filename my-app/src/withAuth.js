import React from "react";
import {Redirect} from "react-router-dom"

const withAuth =(Contact)=>{
    const AuthRoute= ()=>{
        const isAuth = !!localStorage.getItem("token")
        if(isAuth){
            return (<Contact/>)
        }else{
            return <Redirect exact to ="/"/>
        }
        
    }
    return AuthRoute;
}
export default withAuth;