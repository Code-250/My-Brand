import {useState,useEffect} from "react";
import {storage} from "../context/firebase";

const UseStorage =(file) =>{
    const [progress, setProgress] =useState(0);
    const [error, setError] = useState(null);
    const [url,setUrl] = useState(null);

    useEffect(()=>{
        // reference

        const storageRef = storage.ref(file.name);
        storageRef.put(file).on('state_changed', (snap)=>{
            let percent = (snap.byteTransferred / snap.totalBytes) * 100;
            setProgress(percent);
        }, (err)=>{
            setError(err)
        },async ()=>{
            const url = await storageRef.getDownloadURL();
            setUrl(url);
        })
    },[file]);
    return{progress, url, error}
}

export default UseStorage;