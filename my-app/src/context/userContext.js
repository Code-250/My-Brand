import React, {createContext,useState} from "react";

export const userContext = createContext();

const userContextProvider = (props) => {
    const [users, setUsers] = useState([
        {content:"Manage Blogs", id:1},
        {content:"Manage Projects", id:2},
        {content:"Manage Contacts", id:3},
    ])
    const addUser = (content)=>{
        setUsers({...users, content})
    }
    const removeUser = (id)=>{
        setUsers(users.filter(user => user.id !== id))
    }
    return (
        <userContext.provider value={{user, addUser, removeUser}}>
            {props.children}
        </userContext.provider>
    );
}

export default userContextProvider;
