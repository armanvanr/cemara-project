import React from "react";
import './style.css'
import Adopt from "../../Components/ContentDashboard/adopt";
import SideBarDashboard from "../../Components/SideBarDashboard";

const Dashboard = () => {
    return (
        <div className="container">
            <SideBarDashboard />
            <Adopt />
        </div>
    )
}

export default Dashboard