import React from "react";
import './style.css'
import Report from "../../Components/ContentDashboard/report";
import SideBarDashboard from "../../Components/SideBarDashboard";

const DashboardReport = () => {
    return (
        <div className="container">
            <SideBarDashboard />
            <Report />
        </div>
    )
}

export default DashboardReport;