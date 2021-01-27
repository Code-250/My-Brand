import AdNavbar from "./AdminNavbar";
import {Link} from "react-router-dom";
import "./adminStyle.css"

const Dashboard = () =>{
    return(
        <div className="admin-container">
            <AdNavbar/>
             <div className="admin-wrapper">
                 <div className="left-sidebar">
                    <ul >
                        <li sytle={{color:"white"}}><Link to="/">Manage Blogs</Link></li>
                    </ul>
                    
                 </div>
                 <div className="admin-content">

                 </div>
             </div>
        </div>
    )
}

export default Dashboard;