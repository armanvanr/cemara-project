import React from "react";
import './style.css'
import Donate from "../../Components/ContentDashboard/donate";
import SideBarDashboard from "../../Components/SideBarDashboard";

const DashboardDonate = () => {
    return (
        <div className="container">
            <SideBarDashboard />
            <Donate />
        </div>
    )
}

export default DashboardDonate;