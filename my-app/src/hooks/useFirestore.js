import { useState, useEffect } from "react";
import {db} from "../context/firebase";

const UseFirestore =(collection) =>{
    const [docs, setDocs] = useState([]);

    useEffect(()=>{
        const unsub = db.collection('contacts')
        .onSnapshot((snap)=>{
            let documents = [];
            snap.forEach(doc=>{
                documents.push({...doc.data(), id: doc.id});
            })
            setDocs(documents);
        })
        return () =>unsub();
    },[collection]);

    return{docs};
}


export default UseFirestore;