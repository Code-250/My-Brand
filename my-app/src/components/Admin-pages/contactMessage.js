import React, {useEffect} from "react";
import UseStorage from "../../hooks/useStorage";

const ProgressBar =({file,setFile})=>{
    const {url,progress} =UseStorage(file);
    console.log(progress,url);

    
    return(
        <div style={{width: progress + '%'}}>{url}, progress</div>
    )
}

export default ProgressBar;