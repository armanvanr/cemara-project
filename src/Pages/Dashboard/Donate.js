import React from "react";
import './style.css'
import Donate from "../../Components/ContentDashboard/donate";
import SideBarDashboard from "../../Components/SideBarDashboard";

const Dashboard = () => {
    return (
        <div className="container">
            <SideBarDashboard />
            <Donate />
        </div>
    )
}

export default Dashboard