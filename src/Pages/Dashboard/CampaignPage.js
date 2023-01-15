import React from "react";
import './style.css'
import Campaign from "../../Components/ContentDashboard/campaign";
import SideBarDashboard from "../../Components/SideBarDashboard";

const DashboardCampaign = () => {
    return (
        <div className="container">
            <SideBarDashboard />
            <Campaign />
        </div>
    )
}

export default DashboardCampaign;