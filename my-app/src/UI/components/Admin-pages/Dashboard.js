import React from 'react';
import AdCards from "./AdCards"
import ContactMessage from "./contactMessage"
import Subscribe from "./subscription";
const Dashboard = () =>{
    return(
        <div >
            <h1>Hello Richard </h1>
            <h1>welcome to your Dashboard</h1>
            <AdCards/>
            <ContactMessage/>
            <Subscribe/>
        </div>
    )
}

export default Dashboard;