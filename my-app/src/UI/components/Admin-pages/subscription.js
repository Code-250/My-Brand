import React from "react";
import "./contactMessage.css"

const Subscribe = () =>{
    return(
        <div className="subscribe-container">
            <h1 className="subscription-title">
                SUBSCRIPTION COUNTER
            </h1>
            <div className="contact-message">
            <h3 className="subscription-header">Number of Subscribers</h3>
            <p className="subscription-no">0;</p>
            </div>  
        </div>


    )
}

export default Subscribe;