import React, {useState,useEffect} from "react";
import {db} from "./firebase";

const UseStorage = (file) =>{
    const [url, setUrl] =useState(null);

    useEffect(()=>{
        const storageRef = db.ref(file.name);
        storageRef.put(file);
        async ()=>{
            const url = await storageRef.getDownloadURL()
            setUrl(url)
        }

    },[file]);
    return{url}
}

export default UseStorage;