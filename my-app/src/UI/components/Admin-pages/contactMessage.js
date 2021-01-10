import React from "react";
import "./contactMessage.css"

const ContactMessage = () =>{
    return(
    <div>

    <h1 className="contact-title">Contact-Messages</h1>
        <div className="contact-container">
            
            <div className="contact-message">
                <h3 className="contact-header">richard</h3>
                    <h4 className="contact-header">richmunye@gmail.com</h4>
                <p className="message">hello richard I would like to talk to you about
                    this project number 2 here is my number 078453773
                    hello richard I would like to talk to you about
                    this project number 2 here is my number 078453773

                </p>
            </div>
            <div className="contact-message">
                <h3 className="contact-header">Janvier</h3>
                    <h4 className="contact-header">richmuny97@gmail.com</h4>
                <p className="message">hello richard I would like to talk to you about
                    this project number 2 here is my number 078453773
                </p>

            </div>
            <div className="contact-message">
                <h3 className="contact-header">Brian</h3>
                <h4 className="contact-header">riche@gmail.com</h4>
                <p className="message">hello richard I would like to talk to you about
                this project number 2 here is my number 078453773
                </p>
            </div>
            <div className="contact-message">
                <h3 className="contact-header">Emmy</h3>
                <h4 className="contact-header">rmunyemana@gmail.com</h4>
                <p className="message">hello richard I would like to talk to you about
                this project number 2 here is my number 078453773
                </p>
            
            </div>
            
            
        </div>
    </div>

    )
}

export default ContactMessage;