import {createContext, useEffect, useState, useContext} from 'react';
import {auth} from "../firebase";
const AuthContext= createContext();


export function useAuth(){
    return useContext(AuthContext)
}

export function AuthContent({children}){

    const [currentUser, setCurrentUser] = useState();

    function signUp (email,password){
        return auth.createUserWithEmailAndPassword(email,password)
    }
    useEffect(()=>{
       const unsubscribe= auth.onAuthStateChanges(user=>{
            setCurrentUser(user)
        })
        return unsubscribe
    },[])
    

    const value= {
        currentUser,
        signUp
    }
    return(
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}