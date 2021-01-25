import React from 'react';
import AdCards from "./AdCards"
import ContactMessage from "./contactMessage"
import Subscribe from "./subscription";
import AdNavbar from "./AdminNavbar";
import "./contactMessage.css";
const Dashboard = () =>{
    return(
        <div >
            <AdNavbar/>
            <div className="dashboard-title">
                <h1 className="dashboard-hello">Hello Richard </h1>
                <h1 className="dashboard-hello">welcome to your Dashboard</h1>
            </div>
            
            <AdCards/>
            <ContactMessage/>
            <Subscribe/>
            
        </div>
    )
}

export default Dashboard;