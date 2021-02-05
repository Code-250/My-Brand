import React,{ useState, useEffect} from "react";

import {app} from "./firebase";

export const AuthContext = React.createContext()


export function AuthProvider({children}){
    const [currentUser, setCurrentUser] =useState(null);

    useEffect(()=>{
        app.auth().onAuthStateChanged(setCurrentUser);
    },[]);

    const value={
        currentUser
    }
    return(
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}
