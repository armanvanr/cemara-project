import React from "react";
import './style.css'
import ContentDashboard from "../../Components/ContentDashboard";
import SideBarDashboard from "../../Components/SideBarDashboard";

const Dashboard = () => {
    return (
        <div className="container">
            <SideBarDashboard />
            <ContentDashboard />
        </div>
    )
}

export default Dashboard