import React from "react";
import {Redirect} from "react-router-dom"

const withAuth =(Component)=>{
    const AuthRoute= ()=>{
        const isAuth = localStorage.getItem("token")
        if(isAuth){
            return (<Component/>)
        }else{
            return <Redirect exact to ="/"/>
        }
        
    }
    return AuthRoute;
}
export default withAuth;